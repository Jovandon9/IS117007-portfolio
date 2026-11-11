<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { data as roles } from '../data/roles.data'
import { stages, startingStage, progressKey, readProgress } from '../data/roadmap.mjs'
const experience = ref('beginner')
const target = ref('ai-engineer')
const prerequisites = ref([false, false, false, false])
const completed = ref<string[]>([])
const storageNote = ref('Progress is stored only in this browser on this device, without an account. It is not sent to the site owner.')
const ready = ref(false)
const questions = ['I can change and explain a Python program with file input and error handling.', 'I can clone a repository, commit a change and follow setup instructions.', 'I can validate JSON and demonstrate tests for valid and invalid input.', 'I can reproduce a data query and non-AI baseline and explain a held-out test set.']
const start = computed(() => startingStage(experience.value, prerequisites.value))
const role = computed(() => roles.find(item => item.slug === target.value)!)
const emphasis = computed(() => ({
  'ai-engineer': 'Feature integration, failure evaluation and operation (stages 3–5).',
  'forward-deployed-engineer': 'Workflow discovery, integration and stakeholder handoff (stages 3, 5–6).',
  'ml-engineer': 'Data/baselines, measurement and reproducible operation (stages 2, 4–5).',
  'solutions-architect': 'System tradeoffs, operating constraints and explanation (stages 3, 5–6).',
  'product-manager': 'User problem, measurement and decision case study (stages 2, 4, 6).',
  'evaluation-engineer': 'Dataset quality, scoring and failure analysis (stages 2, 4, 6).',
  'research-engineer': 'Baselines, controlled experiments and reproducibility (stages 2, 4, 6).',
  'governance-specialist': 'Risk evidence, human review and responsibility (stages 4–6).'
}[target.value]))
onMounted(() => {
  try { completed.value = readProgress(localStorage.getItem(progressKey)) }
  catch { storageNote.value = 'Browser storage is unavailable. Progress works for this visit but may not survive reload.' }
  ready.value = true
})
function save() {
  try { localStorage.setItem(progressKey, JSON.stringify(completed.value)) }
  catch { storageNote.value = 'Could not save progress. Your current selections may not survive reload.' }
}
function resetProgress() {
  completed.value = []
  try { localStorage.removeItem(progressKey) } catch { storageNote.value = 'Storage could not be cleared; progress is reset for this visit.' }
}
</script>

<template>
  <div class="atlas-tool">
    <h3>Choose your starting point</h3>
    <label for="experience">Programming experience</label>
    <select id="experience" v-model="experience"><option value="beginner">Beginner — start with foundations</option><option value="experienced">Experienced — check what I can demonstrate</option></select>
    <fieldset><legend>Demonstrated prerequisites — select only what you can show</legend>
      <label v-for="(question, index) in questions" :key="question" class="check-line"><input v-model="prerequisites[index]" type="checkbox" /> {{ question }}</label>
    </fieldset>
    <p role="status">Recommended start: {{ stages[start].title }}. {{ start ? 'Earlier stages may be skipped only because the corresponding evidence is checked above.' : 'Begin with foundations; year of study alone does not establish prerequisites.' }}</p>
    <label for="target-role">Target role</label>
    <select id="target-role" v-model="target"><option v-for="item in roles" :key="item.slug" :value="item.slug">{{ item.title }}</option></select>
    <p>{{ emphasis }} <a :href="withBase('/roles/' + target)">Read the matching profile</a>.</p>
    <p>Suggested project: <a :href="withBase('/guide/portfolio-projects#' + ({documentation:'_1-a-documentation-assistant-with-citations',evaluation:'_2-an-evaluation-workbench-for-a-narrow-task',workflow:'_3-a-human-reviewed-workflow-prototype'}[role.comparison[4]]))">{{ role.comparison[4] === 'documentation' ? 'Documentation assistant' : role.comparison[4] === 'evaluation' ? 'Evaluation workbench' : 'Human-reviewed workflow' }}</a>. These are learning recommendations, not employer requirements.</p>
    <h3>Complete roadmap and progress</h3>
    <p>All six stages stay visible regardless of route. Effort ranges are planning estimates for small local projects, not measured completion times; prior experience and debugging can change them. Extend the schedule around exams.</p>
    <p role="status">{{ completed.length }} of {{ stages.length }} stages marked complete. {{ storageNote }}</p>
    <button type="button" :disabled="!ready" @click="resetProgress">Reset saved progress</button>
    <article v-for="(stage, index) in stages" :key="stage.id" class="roadmap-stage">
      <h4>{{ stage.title }}</h4>
      <p v-if="index < start">Optional review: prerequisites demonstrated above; verify the completion check before skipping.</p>
      <p><strong>Estimated effort:</strong> {{ stage.effort }} for two weeks.</p>
      <p><strong>Prerequisites:</strong> {{ stage.prerequisites }}</p>
      <p><strong>Minimum deliverable:</strong> {{ stage.minimum }}</p>
      <p><strong>Completion check:</strong> {{ stage.check }}</p>
      <label class="check-line"><input v-model="completed" :value="stage.id" type="checkbox" :disabled="!ready" @change="save" /> I produced the evidence and performed the check for {{ stage.title }}</label>
    </article>
  </div>
</template>

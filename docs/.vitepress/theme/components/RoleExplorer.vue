<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'

const query = ref('')
const category = ref('all')
const categories = [
  { value: 'all', label: 'All roles' },
  { value: 'build', label: 'Build systems' },
  { value: 'deploy', label: 'Work with customers' },
  { value: 'evaluate', label: 'Research & evaluate' },
  { value: 'shape', label: 'Shape decisions' }
]
const roles = [
  { title: 'AI Engineer', slug: 'ai-engineer', group: 'build', tag: 'BUILD', number: '01', summary: 'Turn models into useful applications, from retrieval pipelines to reliable AI-powered features.', skills: ['Python / TypeScript', 'RAG', 'Evaluation'], detail: 'From model API to working product' },
  { title: 'Forward-Deployed AI Engineer', slug: 'forward-deployed-engineer', group: 'deploy', tag: 'DEPLOY', number: '02', summary: 'Work directly with customers to turn ambiguous business problems into deployed AI solutions.', skills: ['Integration', 'Discovery', 'Communication'], detail: 'At the intersection of code and customers' },
  { title: 'Machine Learning Engineer', slug: 'ml-engineer', group: 'build', tag: 'BUILD', number: '03', summary: 'Build the data, training, and serving systems that make machine learning dependable in production.', skills: ['ML fundamentals', 'MLOps', 'Data pipelines'], detail: 'Reliable models at production scale' },
  { title: 'AI Solutions Architect', slug: 'solutions-architect', group: 'deploy', tag: 'DEPLOY', number: '04', summary: 'Design how AI fits into an organization’s systems, security boundaries, and operating constraints.', skills: ['Architecture', 'Cloud', 'Tradeoffs'], detail: 'A blueprint from problem to production' },
  { title: 'AI Product Manager', slug: 'product-manager', group: 'shape', tag: 'STRATEGY', number: '05', summary: 'Decide which problems AI should solve and define what a useful, trustworthy product looks like.', skills: ['Discovery', 'Metrics', 'Prioritization'], detail: 'User needs meet model capabilities' },
  { title: 'AI Evaluation Engineer', slug: 'evaluation-engineer', group: 'evaluate', tag: 'EVALUATE', number: '06', summary: 'Create the datasets, experiments, and feedback loops that reveal when an AI system succeeds or fails.', skills: ['Test design', 'Statistics', 'Failure analysis'], detail: 'Make quality measurable' },
  { title: 'AI Research Engineer', slug: 'research-engineer', group: 'evaluate', tag: 'RESEARCH', number: '07', summary: 'Translate research questions into reproducible experiments, efficient implementations, and evidence.', skills: ['PyTorch', 'Experiments', 'Math'], detail: 'Bridge scientific ideas and working code' },
  { title: 'AI Governance & Safety Specialist', slug: 'governance-specialist', group: 'shape', tag: 'GOVERNANCE', number: '08', summary: 'Help teams identify risks, document decisions, and put practical safeguards around AI systems.', skills: ['Risk assessment', 'Policy', 'Documentation'], detail: 'Accountability throughout the AI lifecycle' }
]
const filteredRoles = computed(() => {
  const term = query.value.trim().toLowerCase()
  return roles.filter(role =>
    (category.value === 'all' || role.group === category.value) &&
    `${role.title} ${role.summary} ${role.skills.join(' ')}`.toLowerCase().includes(term)
  )
})
function reset() { query.value = ''; category.value = 'all' }
</script>

<template>
  <div class="role-explorer">
    <div class="explorer-toolbar">
      <div class="role-filters" role="group" aria-label="Filter roles by type of work">
        <button v-for="option in categories" :key="option.value" type="button" :aria-pressed="category === option.value" @click="category = option.value">{{ option.label }}</button>
      </div>
      <div class="role-search">
        <label class="visually-hidden" for="role-query">Search roles or skills</label>
        <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m16 16 4.5 4.5" stroke="currentColor" stroke-width="1.6"/></svg>
        <input id="role-query" v-model="query" type="search" placeholder="Search roles or skills" autocomplete="off" />
      </div>
    </div>
    <p class="result-count" role="status">{{ filteredRoles.length }} {{ filteredRoles.length === 1 ? 'role' : 'roles' }} to explore</p>
    <div class="role-grid">
      <a v-for="role in filteredRoles" :key="role.slug" class="role-card" :class="`group-${role.group}`" :href="withBase(`/roles/${role.slug}`)">
        <div class="card-meta"><span class="role-tag">{{ role.tag }}</span><span class="role-number">{{ role.number }}</span></div>
        <h3>{{ role.title }}</h3>
        <p>{{ role.summary }}</p>
        <div class="skill-chips"><span v-for="skill in role.skills" :key="skill">{{ skill }}</span></div>
        <div class="card-footer"><span>{{ role.detail }}</span><span aria-hidden="true">↗</span></div>
      </a>
    </div>
    <div v-if="filteredRoles.length === 0" class="empty-results">
      <h3>No matching roles yet.</h3>
      <p>Try a broader skill or a different type of work.</p>
      <button type="button" @click="reset">Reset filters</button>
    </div>
  </div>
</template>

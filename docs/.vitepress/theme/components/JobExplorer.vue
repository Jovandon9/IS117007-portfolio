<script setup lang="ts">
import { computed, ref } from 'vue'
import { jobs, locationStatus, visibleJobs } from '../data/jobs.mjs'
const state = ref('all')
const experienced = ref(false)
const states = 'AL AK AZ AR CA CO CT DE DC FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY'.split(' ')
const visible = computed(() => visibleJobs(jobs, state.value, experienced.value))
const labels = { internship: 'Internship', newgrad: 'New graduate', mid: 'Mid-level · future-career example', senior: 'Senior · future-career example' }
function reset() { state.value = 'all'; experienced.value = false }
</script>

<template>
  <div class="atlas-tool">
    <label for="work-state">Planned U.S. work state (not your school location)</label>
    <select id="work-state" v-model="state"><option value="all">All locations — no state filter</option><option v-for="code in states" :key="code" :value="code">{{ code === 'NJ' ? 'New Jersey (NJ)' : code }}</option></select>
    <label class="check-line"><input v-model="experienced" type="checkbox" /> Include optional mid-level and senior future-career examples</label>
    <button type="button" @click="reset">Reset job filters</button>
    <p role="status">{{ visible.length }} examples shown. {{ jobs.length - visible.length }} hidden by experience or explicit state restrictions.</p>
    <p>State compatibility is not confirmation of personal eligibility. Unknown location rules remain unknown. Employer pages are the authority.</p>
    <article v-for="job in visible" :id="job.id" :key="job.id" class="job-record">
      <h3>{{ job.title }}</h3>
      <strong class="record-badge">{{ labels[job.category] }}</strong>
      <p><strong>Location restrictions:</strong> {{ job.location }}</p>
      <p class="location-status">{{ locationStatus(job, state) }}</p>
      <p><strong>Last recorded check:</strong> {{ job.checked }} · {{ job.status }}.</p>
      <p><strong>Public qualifications:</strong> {{ job.qualifications }}</p>
      <p class="job-summary">{{ job.summary }}</p>
      <a :href="job.url">Original employer description for {{ job.title }}</a>
      <p><a :href="'https://github.com/Jovandon9/IS117007-portfolio/issues/new?title=' + encodeURIComponent('Changed posting: ' + job.title)">Report a closed or changed posting on GitHub</a> — include the source URL, observed change and date; avoid private eligibility details.</p>
    </article>
    <p v-if="!visible.length">No examples match. Reset filters or check current employer listings; this sample is not a complete opportunity directory.</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { data as roles } from '../data/roles.data'
import { filterRoles } from '../data/roles.mjs'

const query = ref('')
const category = ref('all')
const categories = [
  { value: 'all', label: 'All roles' },
  { value: 'build', label: 'Build systems' },
  { value: 'deploy', label: 'Work with customers' },
  { value: 'evaluate', label: 'Research & evaluate' },
  { value: 'shape', label: 'Shape decisions' }
]
const selected = ref<string[]>([])
const filteredRoles = computed(() => filterRoles(roles, query.value, category.value))
const compared = computed(() => roles.filter(role => selected.value.includes(role.slug)))
const dimensions = ['Coding', 'Math and measurement', 'Customer interaction', 'Realistic entry route']
function toggle(slug: string) {
  selected.value = selected.value.includes(slug)
    ? selected.value.filter(item => item !== slug)
    : selected.value.length < 3 ? [...selected.value, slug] : selected.value
}

function reset() { query.value = ''; category.value = 'all' }
</script>

<template>
  <div class="role-explorer">
    <div class="explorer-toolbar">
      <div class="role-filters" role="group" aria-label="Filter roles by type of work">
        <button v-for="option in categories" :key="option.value" type="button" :aria-pressed="category === option.value" @click="category = option.value">{{ option.label }}</button>
      </div>
      <div class="role-search">
        <label for="role-query">Filter role cards by title or skill</label>
        <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m16 16 4.5 4.5" stroke="currentColor" stroke-width="1.6"/></svg>
        <input id="role-query" v-model="query" type="search" placeholder="Try SQL, retrieval, or Python" autocomplete="off" />
      </div>
    </div>
    <p class="result-count" role="status">{{ filteredRoles.length }} {{ filteredRoles.length === 1 ? 'role' : 'roles' }} to explore</p>
    <div class="role-grid">
      <div v-for="role in filteredRoles" :key="role.slug" class="role-card-wrap">
      <a class="role-card" :class="`group-${role.group}`" :href="withBase(`/roles/${role.slug}`)">
        <div class="card-meta"><span class="role-tag">{{ role.tag }}</span><span class="role-number">{{ role.number }}</span></div>
        <h3>{{ role.title }}</h3>
        <p>{{ role.summary }}</p>
        <div class="skill-chips"><span v-for="skill in role.skills" :key="skill">{{ skill }}</span></div>
        <div class="card-footer"><span>{{ role.detail }}</span><span aria-hidden="true">↗</span></div>
      </a>
        <label class="compare-choice"><input type="checkbox" :checked="selected.includes(role.slug)" :disabled="selected.length >= 3 && !selected.includes(role.slug)" @change="toggle(role.slug)" /> Compare {{ role.title }}</label>
      </div>
    </div>
    <section class="comparison-panel" aria-label="Focused role comparison">
      <h3>Compare two or three roles</h3>
      <p role="status">{{ selected.length }} of 3 selected. Selections stay when you filter the directory.</p>
      <p>Qualitative summaries of the linked profiles. Employers vary; these are not universal requirements or numeric rankings.</p>
      <button type="button" @click="selected = []" :disabled="!selected.length">Clear comparison</button>
      <div class="selection-actions">
        <button v-for="role in compared" :key="role.slug" type="button" @click="toggle(role.slug)">Remove {{ role.title }}</button>
      </div>
      <p v-if="compared.length < 2">Choose at least two roles using the labeled checkboxes above.</p>
      <div v-else class="comparison-grid" :style="{ '--comparison-columns': compared.length }">
        <article v-for="role in compared" :key="role.slug">
          <h4><a :href="withBase('/roles/' + role.slug)">{{ role.title }}</a></h4>
          <dl><template v-for="(dimension, index) in dimensions" :key="dimension"><dt>{{ dimension }}</dt><dd>{{ role.comparison[index] }}</dd></template></dl>
        </article>
      </div>
    </section>
    <div v-if="filteredRoles.length === 0" class="empty-results">
      <h3>No matching roles yet.</h3>
      <p>Try a broader skill or a different type of work.</p>
      <button type="button" @click="reset">Reset filters</button>
    </div>
  </div>
</template>


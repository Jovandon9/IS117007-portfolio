import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { roles, filterRoles } from '../docs/.vitepress/theme/data/roles.mjs'
import { jobs, visibleJobs, locationStatus } from '../docs/.vitepress/theme/data/jobs.mjs'
import { startingStage, readProgress } from '../docs/.vitepress/theme/data/roadmap.mjs'

test('profile skills and aliases can be combined with role categories', () => {
  const index = roles.map(role => ({ ...role, searchText: role.title + ' ' + readFileSync(new URL('../docs/roles/' + role.slug + '.md', import.meta.url), 'utf8') }))
  assert.ok(filterRoles(index, 'databases', 'build').some(role => role.slug === 'ai-engineer'))
  assert.ok(filterRoles(index, 'retrieval', 'build').some(role => role.slug === 'ai-engineer'))
  assert.equal(filterRoles(index, 'databases', 'shape').some(role => role.slug === 'ai-engineer'), false)
  assert.equal(filterRoles(index, 'impossible-skill-xyz').length, 0)
})

test('student defaults and New Jersey filtering never present an explicit exclusion as compatible', () => {
  assert.equal(visibleJobs(jobs, 'all', false).length, 4)
  const nj = visibleJobs(jobs, 'NJ', true)
  assert.equal(nj.some(job => job.id === 'eqt'), false)
  assert.equal(nj.at(-1).id, 'smartsheet')
  assert.match(locationStatus(jobs.find(job => job.id === 'smartsheet'), 'NJ'), /Unknown/)
  assert.match(locationStatus(jobs.find(job => job.id === 'twilio'), 'CA'), /Unknown/)
  assert.match(locationStatus(jobs[0], 'NJ'), /Excluded/)
  assert.equal(visibleJobs(jobs, 'all', true).length, 8)
})

test('experienced routes require demonstrated prerequisites and saved progress tolerates invalid data', () => {
  assert.equal(startingStage('beginner', [true, true, true, true]), 0)
  assert.equal(startingStage('experienced', [true, false, true, true]), 0)
  assert.equal(startingStage('experienced', [true, true, true, false]), 1)
  assert.equal(startingStage('experienced', [true, true, true, true]), 2)
  assert.deepEqual(readProgress('{broken'), [])
  assert.deepEqual(readProgress('{"software":true}'), [])
  assert.deepEqual(readProgress('["software","unknown"]'), ['software'])
})

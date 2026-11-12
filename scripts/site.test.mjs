import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile, readdir, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(fileURLToPath(new URL('../docs/.vitepress/dist/', import.meta.url)))
const base = '/IS117007-portfolio/'
const origin = 'https://jovandon9.github.io'
const roleSlugs = ['ai-engineer', 'forward-deployed-engineer', 'ml-engineer', 'solutions-architect', 'product-manager', 'evaluation-engineer', 'research-engineer', 'governance-specialist']
const guideSlugs = ['getting-started', 'skills-roadmap', 'portfolio-projects', 'sources', 'remote-jobs']
const requiredPages = ['index.html', 'roles/index.html', ...roleSlugs.map(slug => `roles/${slug}.html`), ...guideSlugs.map(slug => `guide/${slug}.html`)]

async function exists(file) {
  try { return (await stat(file)).isFile() } catch { return false }
}
async function resolveTarget(url) {
  const relative = decodeURIComponent(url.pathname.slice(base.length))
  const file = path.resolve(root, relative)
  assert.ok(file === root || file.startsWith(root + path.sep), `Link escapes site root: ${url.pathname}`)
  for (const candidate of [file, `${file}.html`, path.join(file, 'index.html')]) {
    if (await exists(candidate)) return candidate
  }
  return null
}

test('every career profile and guide renders substantive HTML', async () => {
  for (const relative of requiredPages) {
    const html = await readFile(path.join(root, relative), 'utf8')
    assert.ok(html.includes('id="VPContent"'), `Missing page content: ${relative}`)
    assert.ok(html.includes('<h1'), `Missing page heading: ${relative}`)
    assert.doesNotMatch(html, /<title>404/, `Unexpected 404: ${relative}`)
    if (relative !== 'index.html') {
      const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || ''
      assert.ok(main.replace(/<[^>]*>/g, ' ').split(/\s+/).length > 180, `Content did not render: ${relative}`)
    }
  }
})

test('all rendered local links, anchors, and assets resolve under the Pages base path', async () => {
  const files = (await readdir(root, { recursive: true })).filter(file => file.endsWith('.html'))
  const errors = []
  for (const relative of files) {
    const html = await readFile(path.join(root, relative), 'utf8')
    const page = new URL(base + relative.replace(/index\.html$/, ''), origin)
    for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
      const href = match[1].replaceAll('&amp;', '&')
      if (/^(?:mailto:|tel:|data:|javascript:)/.test(href)) continue
      const url = new URL(href, page)
      if (url.origin !== origin) continue
      if (!url.pathname.startsWith(base)) { errors.push(`${relative}: outside Pages base: ${href}`); continue }
      const target = await resolveTarget(url)
      if (!target) { errors.push(`${relative}: missing target: ${href}`); continue }
      if (url.hash && target.endsWith('.html')) {
        const targetHtml = await readFile(target, 'utf8')
        const id = decodeURIComponent(url.hash.slice(1))
        if (!targetHtml.includes(`id="${id}"`)) errors.push(`${relative}: missing anchor: ${href}`)
      }
    }
  }
  assert.deepEqual(errors, [])
})

test('the role explorer and client-side search are included in the production build', async () => {
  const home = await readFile(path.join(root, 'index.html'), 'utf8')
  assert.match(home, /aria-label="Filter roles by type of work"/)
  assert.match(home, /id="role-query"/)
  assert.equal([...home.matchAll(/<a\b[^>]*class="([^"]*)"/g)].filter(match => match[1].split(/\s+/).includes('role-card')).length, 8)
  for (const slug of roleSlugs) assert.ok(home.includes(`${base}roles/${slug}`), `Explorer missing ${slug}`)
  const assets = await readdir(path.join(root, 'assets'), { recursive: true })
  assert.ok(assets.some(name => /local.?search/i.test(name)), 'Local site search was not built')
})


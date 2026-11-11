import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { roles, comparisons } from './roles.mjs'

const aliases = {
  "ai-engineer": "SQL database databases RAG retrieval augmented generation LLM agent engineer applied AI",
  "forward-deployed-engineer": "FDE forward deployed implementation solutions engineer API",
  "ml-engineer": "ML machine learning MLOps",
  "solutions-architect": "architecture solutions architecture",
  "evaluation-engineer": "evals AI quality assurance statistics",
  "research-engineer": "PyTorch deep learning",
  "governance-specialist": "responsible AI model risk assurance governance safety",
  "product-manager": "PM product management"
}

export default {
  watch: ['../../../roles/*.md'],
  load() {
    return roles.map(role => ({
      ...role,
      comparison: comparisons[role.slug],
      // Index the actual profile so new explicit skills do not silently disappear.
      searchText: [role.title, role.summary, ...role.skills, aliases[role.slug],
        readFileSync(fileURLToPath(new URL(`../../../roles/${role.slug}.md`, import.meta.url)), 'utf8')
          .replace(/https?:\/\/[^\s)]+/g, '').replace(/[#*_`\[\]]/g, ' ')].join(' ')
    }))
  }
}

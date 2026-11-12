export const roles = [
  { title: 'AI Engineer', slug: 'ai-engineer', group: 'build', tag: 'BUILD', number: '01', summary: 'Turn models into useful applications, from retrieval pipelines to reliable AI-powered features.', skills: ['Python / TypeScript', 'RAG', 'Evaluation'], detail: 'From model API to working product' },
  { title: 'Forward-Deployed AI Engineer', slug: 'forward-deployed-engineer', group: 'deploy', tag: 'DEPLOY', number: '02', summary: 'Work directly with customers to turn ambiguous business problems into deployed AI solutions.', skills: ['Integration', 'Discovery', 'Communication'], detail: 'At the intersection of code and customers' },
  { title: 'Machine Learning Engineer', slug: 'ml-engineer', group: 'build', tag: 'BUILD', number: '03', summary: 'Build the data, training, and serving systems that make machine learning dependable in production.', skills: ['ML fundamentals', 'MLOps', 'Data pipelines'], detail: 'Reliable models at production scale' },
  { title: 'AI Solutions Architect', slug: 'solutions-architect', group: 'deploy', tag: 'DEPLOY', number: '04', summary: 'Design how AI fits into an organization’s systems, security boundaries, and operating constraints.', skills: ['Architecture', 'Cloud', 'Tradeoffs'], detail: 'A blueprint from problem to production' },
  { title: 'AI Product Manager', slug: 'product-manager', group: 'shape', tag: 'STRATEGY', number: '05', summary: 'Decide which problems AI should solve and define what a useful, trustworthy product looks like.', skills: ['Discovery', 'Metrics', 'Prioritization'], detail: 'User needs meet model capabilities' },
  { title: 'AI Evaluation Engineer', slug: 'evaluation-engineer', group: 'evaluate', tag: 'EVALUATE', number: '06', summary: 'Create the datasets, experiments, and feedback loops that reveal when an AI system succeeds or fails.', skills: ['Test design', 'Statistics', 'Failure analysis'], detail: 'Make quality measurable' },
  { title: 'AI Research Engineer', slug: 'research-engineer', group: 'evaluate', tag: 'RESEARCH', number: '07', summary: 'Translate research questions into reproducible experiments, efficient implementations, and evidence.', skills: ['PyTorch', 'Experiments', 'Math'], detail: 'Bridge scientific ideas and working code' },
  { title: 'AI Governance & Safety Specialist', slug: 'governance-specialist', group: 'shape', tag: 'GOVERNANCE', number: '08', summary: 'Help teams identify risks, document decisions, and put practical safeguards around AI systems.', skills: ['Risk assessment', 'Policy', 'Documentation'], detail: 'Accountability throughout the AI lifecycle' }
]

// Qualitative summaries of the linked profiles, not hiring requirements or rankings.
export const comparisons = {
  'ai-engineer': ['Application code, APIs, databases and tests', 'Understand model behavior and evaluation; depth varies', 'Usually product teams; customer contact varies', 'Software/backend work, then one evaluated AI feature', 'documentation'],
  'forward-deployed-engineer': ['Integrations and prototypes in customer systems', 'Applied measurement; task-dependent model depth', 'Discovery, implementation and handoff with customers', 'Software or implementation work plus stakeholder practice', 'workflow'],
  'ml-engineer': ['Training, data and serving pipelines', 'Statistics, model performance and experimental design', 'Usually internal engineering/product collaboration', 'Software/data foundations and a reproducible ML pipeline', 'evaluation'],
  'solutions-architect': ['Hands-on prototypes; emphasis on system design', 'Capacity, cost and quality tradeoffs', 'Requirements and architecture discussions with stakeholders', 'Software/cloud experience before broader system ownership', 'documentation'],
  'product-manager': ['Coding helps prototyping; not the only route', 'Metrics, experiment interpretation and uncertainty', 'User discovery and cross-functional prioritization', 'Student product work, analysis or supervised associate roles', 'workflow'],
  'evaluation-engineer': ['Scoring scripts, datasets and test harnesses', 'Sampling, uncertainty and reviewer agreement', 'Engineering, product and domain reviewers', 'Testing/data analysis plus a repeatable evaluation project', 'evaluation'],
  'research-engineer': ['Experiment implementations and research tooling', 'Linear algebra, probability and optimization', 'Primarily researchers; customer contact varies', 'Strong code/math foundations and supervised research', 'evaluation'],
  'governance-specialist': ['Varies: documentation through technical testing', 'Risk/metric literacy; specialist depth depends on scope', 'Cross-functional risk and responsibility reviews', 'Security, audit, policy or domain foundations plus a concrete review', 'workflow']
}

export function filterRoles(items, query = '', category = 'all') {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  return items.filter(role => (category === 'all' || role.group === category) &&
    terms.every(term => role.searchText.toLowerCase().includes(term)))
}

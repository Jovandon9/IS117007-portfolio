import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'AI Career Atlas',
  description: 'Explore emerging AI careers, compare responsibilities, and build evidence of your skills.',
  base: '/IS117007-portfolio/',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/IS117007-portfolio/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#142e3b' }],
    ['meta', { property: 'og:title', content: 'AI Career Atlas' }],
    ['meta', { property: 'og:description', content: 'A field guide to the people building, deploying, and evaluating AI.' }]
  ],
  sitemap: { hostname: 'https://jovandon9.github.io/IS117007-portfolio/' },
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'AI Career Atlas',
    nav: [
      { text: 'Internships & entry-level jobs', link: '/guide/remote-jobs' },
      { text: 'Explore roles', link: '/roles/', activeMatch: '/roles/' },
      { text: 'Skill roadmap', link: '/guide/skills-roadmap' },
      { text: 'Research guide', link: '/guide/getting-started' }
    ],
    sidebar: {
      '/roles/': [
        { text: 'The role landscape', items: [
          { text: 'Compare all roles', link: '/roles/' },
          { text: 'AI Engineer', link: '/roles/ai-engineer' },
          { text: 'Forward-Deployed AI Engineer', link: '/roles/forward-deployed-engineer' },
          { text: 'ML Engineer', link: '/roles/ml-engineer' },
          { text: 'AI Solutions Architect', link: '/roles/solutions-architect' },
          { text: 'AI Product Manager', link: '/roles/product-manager' },
          { text: 'AI Evaluation Engineer', link: '/roles/evaluation-engineer' },
          { text: 'AI Research Engineer', link: '/roles/research-engineer' },
          { text: 'AI Governance & Safety Specialist', link: '/roles/governance-specialist' }
        ]},
        { text: 'Build your next step', items: [
          { text: 'Skill roadmap', link: '/guide/skills-roadmap' },
          { text: 'Portfolio projects', link: '/guide/portfolio-projects' }
        ]}
      ],
      '/guide/': [{ text: 'Career research toolkit', items: [
        { text: 'U.S. remote job examples', link: '/guide/remote-jobs' },
        { text: 'Start your research', link: '/guide/getting-started' },
        { text: 'Skill roadmap', link: '/guide/skills-roadmap' },
        { text: 'Portfolio projects', link: '/guide/portfolio-projects' },
        { text: 'Sources & methodology', link: '/guide/sources' }
      ]}]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Jovandon9/IS117007-portfolio' }],
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    footer: {
      message: 'An independent career research project. Role titles and requirements vary by employer.',
      copyright: 'AI Career Atlas · Built with VitePress'
    },
    editLink: {
      pattern: 'https://github.com/Jovandon9/IS117007-portfolio/edit/main/docs/:path',
      text: 'Improve this page on GitHub'
    }
  }
})

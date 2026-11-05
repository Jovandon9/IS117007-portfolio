# AI Career Atlas

A VitePress career research website about emerging roles in the AI industry: what people do, which skills they use, and how to build evidence of those skills.

**GitHub Pages website:** [https://jovandon9.github.io/IS117007-portfolio/](https://jovandon9.github.io/IS117007-portfolio/)

> This is the configured publication URL. It becomes available after GitHub Pages is enabled with **GitHub Actions** as its source and the deployment workflow succeeds. The URL alone does not establish that the site is live.

**Repository:** [Jovandon9/IS117007-portfolio](https://github.com/Jovandon9/IS117007-portfolio)

## What’s inside

- Eight role profiles: AI Engineer, Forward-Deployed AI Engineer, ML Engineer, AI Solutions Architect, AI Product Manager, AI Evaluation Engineer, AI Research Engineer, and AI Governance & Safety Specialist.
- An interactive role explorer with work-type filters and skill search.
- Responsibilities, skill requirements, entry routes, and illustrative job briefs.
- A flexible twelve-week learning roadmap and three portfolio project briefs.
- Primary reference links and a method for comparing real job descriptions.
- Responsive design, light and dark themes, and local site search.

This is an independent research guide. Titles vary by employer. Illustrative job briefs are not live job ads, and this project does not claim current hiring demand, salary ranges, or guaranteed entry requirements.

## Develop locally

Use Node.js 24 (also recorded in `.nvmrc`) and npm. If you use nvm, run `nvm install` and `nvm use` first.

```sh
npm ci
npm run docs:dev
```

Open the address printed by VitePress, including the `/IS117007-portfolio/` base path. Edit Markdown files in `docs/`; navigation and deployment paths are configured in `docs/.vitepress/config.mts`.

```sh
npm run docs:build
npm test
npm run docs:preview
```

The build fails on broken Markdown links. The tests check rendered role and guide content, local links and anchors, assets under the GitHub Pages base path, and inclusion of the role explorer and local search. Run the build before tests because they inspect the generated site.

## GitHub Pages deployment

The [deployment workflow](.github/workflows/deploy.yml) builds and tests pull requests. Pushes to `main` and manual runs also upload and deploy the site using the official GitHub Pages actions.

One-time repository configuration:

1. Open [Settings → Pages](https://github.com/Jovandon9/IS117007-portfolio/settings/pages).
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open [Actions → Build and deploy VitePress](https://github.com/Jovandon9/IS117007-portfolio/actions/workflows/deploy.yml) and select **Run workflow** on `main` if the initial run occurred before Pages was enabled.
4. Wait for both `build` and `deploy` to succeed, then open the website link above.

GitHub Actions must be enabled for this repository, and its plan/visibility must support GitHub Pages. The workflow grants only `contents: read` for builds and `pages: write` plus `id-token: write` for deployments. It does not require a personal access token or a custom Actions secret.

If you rename the repository, update `base`, favicon path, sitemap hostname, and GitHub links in the VitePress configuration, plus the expected base/origin in `scripts/site.test.mjs` and website links here.

## Research and contributions

Start with [sources and methodology](docs/guide/sources.md). When updating a role, distinguish job-ad observations from interpretation, record the date and location of the evidence, and avoid treating one employer’s title as an industry-wide standard.

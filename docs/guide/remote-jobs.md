# U.S. remote internships and entry-level AI jobs

Employer postings checked **November 5, 2026**. Start with the location and eligibility details below. Follow the employer link for current availability. [See the November 11 research update and decision trail](#research-record-from-employer-evidence-to-portfolio-decisions).

## Internships

### EQT Corporation · AI Intern

**Paid, 12 weeks.** EQT considers remote applicants outside CA, CT, DE, IL, IN, LA, MA, MI, NJ, NY and TN. Applicants must be pursuing a technical bachelor’s or master’s degree and have experience with AI applications, machine learning or data science.

An intern interviews business teams about a workflow, builds a small language-model prototype, and demonstrates it to the people who would use it. Communication matters because the intern must explain what the pilot would improve. [EQT job description](https://job-boards.greenhouse.io/eqtcorporation/jobs/5462562008)

### Cohere · Machine Learning Intern/Co-op (Winter 2027)

**Full time, three to six months.** The remote posting includes the United States among its locations. Current enrollment in a postsecondary program and availability for the full work term are eligibility requirements.

The intern works alongside senior technical staff on training and serving language models. A project might investigate how to update a model as new training data arrives. Cohere looks for Python, ML frameworks, distributed training and familiarity with transformers. GPU kernel development, TPU experience and published research are bonuses. [Cohere job description](https://jobs.ashbyhq.com/cohere/36d1f52f-8270-4652-adf5-5303a0ff341b)

## Entry-level jobs

Both examples come from Quora, which makes it possible to compare two teams at the same employer. Both allow remote work anywhere in the U.S. and require availability **Monday–Friday, 9 a.m.–3 p.m. Pacific**.

### Quora · Machine Learning Engineer, New Grad - Quora (Remote)

**Full-time start in early 2027.** Quora accepts a relevant technical degree completed or in progress. It expects Python, ML mathematics and experience with language models through coursework, research or projects. Previous software engineering experience is preferred.

The engineer helps build agents that flag harmful content. A concrete assignment is to investigate spam the system missed, test a change on labeled examples and monitor what happens after release. The team weighs mistakes alongside response time and cost. [Quora job description](https://jobs.ashbyhq.com/quora/40659fe7-545e-4b08-b6d7-2567b18b9ed3)

### Quora · Software Engineer New Grad, Machine Learning Platform - Quora (Remote)

**2025 or 2026 graduates.** Quora asks for a related technical degree, interest in distributed systems and the ability to use or quickly learn Python, Go or C++. Profiling, ML frameworks and container experience are preferred.

This team builds the infrastructure other engineers use to run models. Work includes measuring GPU serving speed, improving access to model inputs and joining an on-call rotation. **Portfolio idea:** benchmark the same model at several batch sizes and explain which setting gives an individual user the quickest response. [Quora job description](https://jobs.ashbyhq.com/quora/cf34f80e-fe5c-454d-bc9a-4c59993ffda0)

## Mid-level work

### Twilio · Machine Learning Engineer 2

**U.S. remote with occasional travel.** The posting excludes San Francisco, Oakland, San Jose and surrounding areas. Twilio expected to accept applications through November 13, 2026, subject to change.

This engineer owns how an AI agent retrieves a customer's history. A mistaken match could give the agent someone else's information, so the team needs tests that catch retrieval errors before release. Twilio asks for backend service experience and production debugging with logs and metrics. Go, Python, event streaming and prior LLM product work are desired. We group this as **mid-level** based on the employer’s level 2 title and responsibility for a production component. [Twilio job description](https://job-boards.greenhouse.io/twilio/jobs/8240487)

## Senior jobs

### Buzz Solutions · Senior Forward Deployed Engineer

**U.S. remote, about 40% travel.** The engineer works directly with utilities adopting computer vision for power-grid inspections. Before a sale, they scope a pilot with utility staff. Afterward, they help deploy the software and turn recurring customer problems into reusable tools. Someone choosing between product engineering and field work should look closely at how much time this role spends with customers. [Buzz Solutions job description](https://job-boards.greenhouse.io/buzzsolutions/jobs/5436872008)

### Smartsheet · Sr. Software Engineer II - AI Engineering (Remote Eligible)

**U.S. remote in eligible locations.** The employer asks for ongoing U.S. work eligibility, eight or more years in software engineering and at least two years working with production LLMs. Experience tracking experiments is a plus.

A senior engineer measures when a planning agent invents information or retrieves the wrong evidence. They design tests across model versions, guide other engineers and establish a quality standard the wider team can reuse. [Smartsheet job description](https://job-boards.greenhouse.io/smartsheet/jobs/8167496)

### You.com · Senior Backend Engineer, Inference Platform

**Remote anywhere in the U.S.** The employer gives preference to candidates in the Bay Area or New York. It asks for hands-on experience tuning live model serving and operating infrastructure in the path of production requests. Contributions to open-source serving software are a plus.

This engineer owns the gateway that chooses a model for each request. If a provider slows down, the gateway needs to choose a fallback, keep the response moving and count usage accurately. The team tests routing changes against live traffic before giving them control over customer requests. [You.com job description](https://job-boards.greenhouse.io/youcom/jobs/4528457008)

## How the responsibilities change

The two Quora openings show why searching only for “AI engineer” misses relevant work. One new graduate evaluates moderation decisions. Another helps deliver model responses quickly enough for the product to use. At Twilio, the engineer takes responsibility for one retrieval system in production. At You.com, a senior engineer makes routing decisions that affect every product using the gateway. These examples compare scope across teams. Employers set their own levels.

[Compare AI career profiles](/roles/) · [Plan a portfolio project](/guide/portfolio-projects)

## Research record: from employer evidence to portfolio decisions

**Research update: November 11, 2026.** Only the Cohere internship and Quora ML new-grad description were reopened for this update. The other examples retain their November 5 check date. These selected descriptions are research examples, not a complete job market survey.

Use this index to trace one decision:

- [Question and audience](#question-and-audience)
- [Original sources and observed details](#original-sources-and-observed-details)
- [Evidence and assumptions](#evidence-and-assumptions)
- [Alternatives and proposed decision](#alternatives-and-proposed-decision)
- [User story and planned acceptance checks](#user-story-and-planned-acceptance-checks)
- [Verification and peer-feedback status](#verification-and-peer-feedback-status)
- [Repository](https://github.com/Jovandon9/IS117007-portfolio) · [Peer-feedback issues](https://github.com/Jovandon9/IS117007-portfolio/issues)

### Question and audience

**Question:** What small, inspectable portfolio artifact could demonstrate a beginning understanding of applied-AI evaluation, based on two original employer descriptions?

**Proposed audience:** A technical reviewer or internship recruiter who wants to inspect an early-career developer's reasoning, code, and honest limits. This audience choice is a hypothesis, not a finding from interviews. The existing Career Atlas helps readers explore roles; the proposed artifact would add specific project evidence rather than claim professional readiness.

### Original sources and observed details

Sources were opened directly on **November 11, 2026**. Publication dates were not stated in the reviewed descriptions. Check dates record observation, not original publication.

| Original employer description | Specific observed evidence | Availability and deadline observed |
| --- | --- | --- |
| [Cohere — Machine Learning Intern/Co-op (Winter 2027)](https://jobs.ashbyhq.com/cohere/36d1f52f-8270-4652-adf5-5303a0ff341b) | The responsibilities include improving models, developing safer and faster training/serving methods, and exploring continual or active learning. Desired fit includes Python, ML frameworks, distributed training, and transformers. | Readable with an application link. Deadline not stated. Remote locations include the U.S.; current enrollment and a full-time 3–6-month term are required. Winter 2027 is in the title; exact dates are not stated. |
| [Quora — Machine Learning Engineer, New Grad - Quora (Remote)](https://jobs.ashbyhq.com/quora/40659fe7-545e-4b08-b6d7-2567b18b9ed3) | Responsibilities include moderation agents, offline evaluation, online experiments, production monitoring, and failure investigation. Evaluation balances accuracy, reliability, latency, and cost. | Readable with an application link; the employer states applications are accepted on an ongoing basis. No fixed deadline stated. Remote U.S./Canada; early-2027 full-time start and weekday 9 a.m.–3 p.m. Pacific coordination hours required. |

An application link establishes what was visible on the check date; it does not guarantee later availability or individual eligibility. Full private role cards and personal eligibility circumstances belong in Canvas.

### Evidence and assumptions

**Observed evidence:** The Quora responsibilities explicitly connect evaluation to failure investigation. Cohere emphasizes training and serving models at scale. The two descriptions therefore provide different learning targets even though both concern ML.

**Interpretation:** A small evaluation exercise can make the process of specifying expected behavior and explaining failures visible. It would address a narrow part of Quora's evaluation expectations.

**Unverified assumptions:** The proposed reader will value a small transparent artifact; ten synthetic cases will be understandable enough for an initial walkthrough; and a moderation example is a suitable portfolio direction. Employer postings do not validate these audience assumptions.

**Limits:** A rules baseline is not an LLM agent, a trained model, a real moderation service, or evidence of distributed training. Ten synthetic cases cannot establish production accuracy, fairness, safety, or hiring readiness. No employer endorsement is implied.

### Alternatives and proposed decision

| Alternative | Benefit | Tradeoff |
| --- | --- | --- |
| Expand generic role summaries | Helps career exploration using the existing guide | Adds little executable evidence of evaluation or failure analysis |
| Train a large language model or build distributed training infrastructure | Relates directly to Cohere's work | Too broad for a one-week beginner artifact; difficult to substantiate |
| Build a small Python moderation baseline with explicit cases and a results table | Makes expectations, observed behavior, and errors inspectable | Narrow exercise; does not demonstrate LLM or production expertise |

**Proposed decision:** Start with the small evaluation artifact. Link it from the existing [portfolio project guide](/guide/portfolio-projects) only when code and actual results exist. Keep the role guide as research context.

**What would change the decision:** A reviewer cannot explain the connection to the employer requirement, the task cannot be completed within a week, or an initial run shows that the example produces no useful failure analysis. Revise scope based on those observations.

### User story and planned acceptance checks

**Story:** As a technical reviewer, I want to inspect the expected labels, actual outputs, and explanation of errors so I can judge what the developer understands about evaluation.

**Planned one-week artifact:** Python rules baseline, ten synthetic cases, documented label rules, setup/run instructions, and an expected-versus-observed results table. Use invented examples without real user data.

**Acceptance checks — planned, not performed:**

1. Run the documented command from a clean setup and record the environment and actual command.
2. Confirm every one of the ten case IDs has an expected label and an observed output; calculate the number of matches from those rows.
3. Include at least one deliberately difficult case and explain the observed behavior, including a mismatch if one occurs. Do not invent failures or successful outcomes.
4. Separate limitations of the label rules, test set, and implementation. Do not generalize a small synthetic result into production performance.
5. Ask a reviewer to follow the source-to-decision chain and run the same instructions. Record their actual result and any next change.

**Implementation status:** Proposed only. No baseline code, experiment results, model deployment, or reviewer outcome is claimed by this documentation update.

### Verification and peer-feedback status

**Observed during preparation:** The two original employer pages were readable and showed application links. Their requirements and deadline wording were checked against the comparison above. The existing published Career Atlas exposes role profiles, employer links, and research guides.

**Pending:** The baseline and all acceptance checks above. Peer review is deferred at the project owner's request; no review request was sent, no issues were filed or closed, and no reviewer retry has occurred.

When review resumes, ask a partner to open Quora's responsibilities, identify the evaluation requirement, and trace it through the observation, proposed decision, story, and check. Record feedback → implement/investigate/defer/decline decision → linked documentation or code commit/PR → actual verification → reviewer retry. Leave unfinished work open with its next step. [Use the existing issue record](https://github.com/Jovandon9/IS117007-portfolio/issues).

**AI assistance:** Codex helped compare the descriptions, organize the evidence, and draft the documentation and private submission. Employer facts were checked against the original pages during preparation. Audience needs and future results remain unverified; AI-generated suggestions are not evidence.

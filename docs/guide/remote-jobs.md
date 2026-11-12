# U.S. remote internships and entry-level AI jobs

Selected employer descriptions, with per-record check dates and uncertainty labels below. Follow the original employer link for current availability and requirements. [See the November 11 research update and decision trail](#research-record-from-employer-evidence-to-portfolio-decisions).

## Browse student opportunities

<JobExplorer />

Internships and new-graduate examples are shown by default. Use the optional experienced-role control for future-career research. State filtering removes explicit exclusions and places unknown location rules after other records.

## Listing and verification policy

This is a **dated research sample**, not a continuously maintained job board. A checked status means the original description and application route were observed on the stated date; it does not guarantee availability today or later. Other records are labeled not reverified rather than treated as confirmed openings. Publication dates are not recorded unless stated by the employer.

Every record displays its own check date, experience category, public qualifications, and location restrictions. [Report a closed or changed source](https://github.com/Jovandon9/IS117007-portfolio/issues/new) with the employer link and observation date. Reopen the original source before applying; [read the shared source policy](/guide/sources#job-example-maintenance-policy).

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

**Website issue update:** See the [issue decisions and observed verification](/guide/issue-changes) for the November 11 website fixes. The preparation status below concerns the proposed evaluation artifact, whose implementation and reviewer retry remain pending.

**Observed during preparation:** The two original employer pages were readable and showed application links. Their requirements and deadline wording were checked against the comparison above. The existing published Career Atlas exposes role profiles, employer links, and research guides.

**Pending:** The baseline and all acceptance checks above. Peer review is deferred at the project owner's request; no review request was sent, no issues were filed or closed, and no reviewer retry has occurred.

When review resumes, ask a partner to open Quora's responsibilities, identify the evaluation requirement, and trace it through the observation, proposed decision, story, and check. Record feedback → implement/investigate/defer/decline decision → linked documentation or code commit/PR → actual verification → reviewer retry. Leave unfinished work open with its next step. [Use the existing issue record](https://github.com/Jovandon9/IS117007-portfolio/issues).

**AI assistance:** Codex helped compare the descriptions, organize the evidence, and draft the documentation and private submission. Employer facts were checked against the original pages during preparation. Audience needs and future results remain unverified; AI-generated suggestions are not evidence.


---
description: Three scoped portfolio projects that demonstrate useful AI engineering and research habits.
---

# Projects that show how you work

A useful portfolio lets someone inspect your decisions and evidence. A polished demo helps, but so do a reproducible setup, an honest account of failures, and a clear explanation of the user problem.

These projects use public or synthetic data. Avoid uploading private conversations, confidential documents, or personal information to an external model service.

## 1. A documentation assistant with citations

**Prerequisites:** File/JSON handling, basic Python or TypeScript, Git, and simple tests. Learn keyword retrieval before introducing a model.

**Effort estimate:** 8–12 hours for the first milestone; 18–30 hours total for a small evaluated version. These are planning estimates, not measured guarantees.

**Minimum first milestone:** Index five openly licensed pages, answer five fixed questions with keyword search, and return source links or an explicit no-answer response. A local command-line interface is enough.

**Costs:** The keyword-only version runs locally with no paid service, assuming an existing computer. Optional generation needs a compatible local model and enough memory, or a billed provider. No provider price is assumed: check current rates, set a hard spending cap before use, and record requests/tokens and actual charges.

**Optional extensions:** Generated answers, a web UI, embeddings and access-control tests. Add these after the minimum retrieval result can be reproduced.

**Problem:** Help a new contributor find answers in a small, openly licensed documentation collection.

Build a retrieval assistant that returns a short answer, relevant source passages, and links. Start with a basic keyword-search baseline so you can determine whether the model adds value. Include a response for questions the collection cannot answer.

**Evaluate it:** Prepare approximately 25 questions covering straightforward answers, ambiguous wording, outdated documents, and unanswerable questions. Score source relevance, whether claims are supported, and whether the system appropriately declines. Keep some questions unseen until the final comparison.

**Deploy it:** Provide a small web interface or API. Document how to rebuild the index and measure response time. If you publish a public demo, control usage costs and avoid exposing service keys to the browser.

**Investigate risk:** Place an instruction-like passage in a test document and check whether it improperly overrides the task. Explain the limits of your prompt-injection test rather than claiming complete protection.

**Portfolio evidence:** Architecture sketch, baseline comparison, evaluation examples, setup guide, and a short failure analysis.

**Relevant roles:** [AI engineer](/roles/ai-engineer), [forward-deployed AI engineer](/roles/forward-deployed-engineer), and AI solutions architect.

## 2. An evaluation workbench for a narrow task

**Prerequisites:** Basic Python, CSV/JSON handling, tests, and the ability to explain expected labels and data splits.

**Effort estimate:** 6–10 hours for a first milestone; 12–20 hours for the bounded comparison, depending on labeling difficulty.

**Minimum first milestone:** Ten synthetic cases, two deterministic candidate rules, and a script producing item-level expected/observed results. Hold out some cases before changing the rules. A model is optional.

**Costs:** The rules-based version runs locally without paid APIs, assuming an existing computer. If using model outputs, cap the number of runs and check current provider pricing before sending requests; record actual usage. Fixed saved outputs can keep scoring reproducible without repeated calls.

**Optional extensions:** Larger datasets, prompt/model comparisons, reviewer agreement and a results dashboard. Do not expand the dataset until the scoring rules are understandable.

**Problem:** Compare two prompts or models on a repeatable task, such as extracting fields from synthetic support requests.

Create a versioned dataset, a scoring script, and a report. Define acceptable behavior before comparing systems. Use exact checks for structured fields where possible and a written rubric where judgment is necessary.

**Evaluate it:** Include malformed inputs, missing information, and examples from different categories. Report results by category as well as overall. If people assign labels, document disagreements and how they were resolved. If a model judges responses, explain its possible biases and check a human-reviewed sample.

**Deploy it:** Make the workbench runnable through one documented command. Keep model settings, dataset version, and relevant run configuration with each result so someone can reproduce the comparison.

**Investigate risk:** Check whether examples used to improve a prompt also appear in the final test set. Explain why a small dataset limits your conclusions.

**Portfolio evidence:** Dataset description, rubric, reproducible results, and a recommendation supported by the observed tradeoffs.

**Relevant roles:** [AI evaluation engineer](/roles/evaluation-engineer), ML engineer, and AI research engineer.

## 3. A human-reviewed workflow prototype

**Prerequisites:** Basic form or CLI programming, state/data handling, and clear acceptance criteria. Use synthetic requests and a consenting reviewer.

**Effort estimate:** 8–12 hours for the first milestone; 16–24 hours for a small documented review trial.

**Minimum first milestone:** Five synthetic requests in a local queue; rules suggest categories; a person can approve or edit each one; save an audit record of the action. No external service or autonomous action is needed.

**Costs:** The local rules-only version has no paid-service requirement on an existing computer. An optional hosted/model version may add hosting and API charges; choose an explicit cap using current rates and record usage. Keep the local demo as the free alternative.

**Optional extensions:** Draft responses, model suggestions, timing measurements and a controlled pilot. Keep human approval and failure recovery in every extension.

**Problem:** Help a fictional small organization sort incoming service requests without automatically making consequential decisions.

Use synthetic requests, interview a willing reviewer about the workflow, and write acceptance criteria. Build a prototype that suggests a category and draft response, with a person approving or editing the result.

**Evaluate it:** Compare against a simple rule-based baseline. Measure categorization errors, reviewer corrections, and handling time in a clearly described small trial. Do not turn a classroom trial into a general productivity claim.

**Deploy it:** Demonstrate an approval queue, a fallback when the model is unavailable, and an audit trail that avoids unnecessary personal data.

**Investigate risk:** Identify who remains responsible for decisions and which cases need escalation.

**Portfolio evidence:** User problem, workflow diagram, acceptance criteria, demonstration, and a recommendation about whether the feature should be adopted.

**Relevant roles:** Forward-deployed AI engineer, AI product manager, and AI governance specialist.

## Starter README

Copy this outline and replace each prompt with your actual evidence. Mark unperformed checks as planned.

```markdown
# Project title and one-sentence user problem
## Scope
Minimum version, exclusions, intended reader, and optional extensions.
## Setup
Runtime versions, dependency install, configuration, and exact run command.
Keep secrets out of source; use synthetic/public data.
## Data
Origin/license, schema, case IDs, expected behavior, and held-out split.
## Baseline and alternatives
What was compared, why, and which settings/versions were fixed.
## Evaluation
Scoring rules, exact reproduction command, item-level expected/observed
results, aggregate calculations, errors, and run date/environment.
## Costs
Local-resource assumptions, optional service cap, and actual usage.
## Limitations and risks
What the sample cannot establish, failures, and human responsibility.
## Reproduce and review
Fresh-setup result, reviewer feedback, linked change, and retry result.
```

## Completion rubric

Use the same evidence standard for all three projects. This is a self-check, not a replacement for the course grading rubric.

| Criterion | Evidence of a completed minimum | Still incomplete when… |
| --- | --- | --- |
| Scope and setup | A reader can identify the user problem, bounded version and exact run command | The demo depends on undocumented setup or claims extensions as completed |
| Data and behavior | Documented synthetic/public sources, case IDs and expected behavior | Labels or data origins are missing |
| Evaluation | Item-level observed outputs and a reproducible baseline comparison | Only a screenshot, planned test or favorable example is shown |
| Reasoning | At least one observed limitation/error and a decision tied to results | Claims go beyond the small sample or hide unsuccessful behavior |
| Reproduction and cost | Another person can follow the README; environment, usage assumptions and actual cost are recorded | Results cannot be regenerated or paid-service assumptions are omitted |

For project 1, verify source links and the no-answer path. For project 2, verify scoring and held-out cases. For project 3, verify that approving/editing a suggestion produces the correct audit record. Record real reviewer outcomes only after the walkthrough.


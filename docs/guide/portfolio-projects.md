---
description: Three scoped portfolio projects that demonstrate useful AI engineering and research habits.
---

# Projects that show how you work

A useful portfolio lets someone inspect your decisions and evidence. A polished demo helps, but so do a reproducible setup, an honest account of failures, and a clear explanation of the user problem.

These projects use public or synthetic data. Avoid uploading private conversations, confidential documents, or personal information to an external model service.

## 1. A documentation assistant with citations

**Problem:** Help a new contributor find answers in a small, openly licensed documentation collection.

Build a retrieval assistant that returns a short answer, relevant source passages, and links. Start with a basic keyword-search baseline so you can determine whether the model adds value. Include a response for questions the collection cannot answer.

**Evaluate it:** Prepare approximately 25 questions covering straightforward answers, ambiguous wording, outdated documents, and unanswerable questions. Score source relevance, whether claims are supported, and whether the system appropriately declines. Keep some questions unseen until the final comparison.

**Deploy it:** Provide a small web interface or API. Document how to rebuild the index and measure response time. If you publish a public demo, control usage costs and avoid exposing service keys to the browser.

**Investigate risk:** Place an instruction-like passage in a test document and check whether it improperly overrides the task. Explain the limits of your prompt-injection test rather than claiming complete protection.

**Portfolio evidence:** Architecture sketch, baseline comparison, evaluation examples, setup guide, and a short failure analysis.

**Relevant roles:** [AI engineer](/roles/ai-engineer), [forward-deployed AI engineer](/roles/forward-deployed-engineer), and AI solutions architect.

## 2. An evaluation workbench for a narrow task

**Problem:** Compare two prompts or models on a repeatable task, such as extracting fields from synthetic support requests.

Create a versioned dataset, a scoring script, and a report. Define acceptable behavior before comparing systems. Use exact checks for structured fields where possible and a written rubric where judgment is necessary.

**Evaluate it:** Include malformed inputs, missing information, and examples from different categories. Report results by category as well as overall. If people assign labels, document disagreements and how they were resolved. If a model judges responses, explain its possible biases and check a human-reviewed sample.

**Deploy it:** Make the workbench runnable through one documented command. Keep model settings, dataset version, and relevant run configuration with each result so someone can reproduce the comparison.

**Investigate risk:** Check whether examples used to improve a prompt also appear in the final test set. Explain why a small dataset limits your conclusions.

**Portfolio evidence:** Dataset description, rubric, reproducible results, and a recommendation supported by the observed tradeoffs.

**Relevant roles:** [AI evaluation engineer](/roles/evaluation-engineer), ML engineer, and AI research engineer.

## 3. A human-reviewed workflow prototype

**Problem:** Help a fictional small organization sort incoming service requests without automatically making consequential decisions.

Use synthetic requests, interview a willing reviewer about the workflow, and write acceptance criteria. Build a prototype that suggests a category and draft response, with a person approving or editing the result.

**Evaluate it:** Compare against a simple rule-based baseline. Measure categorization errors, reviewer corrections, and handling time in a clearly described small trial. Do not turn a classroom trial into a general productivity claim.

**Deploy it:** Demonstrate an approval queue, a fallback when the model is unavailable, and an audit trail that avoids unnecessary personal data.

**Investigate risk:** Identify who remains responsible for decisions and which cases need escalation.

**Portfolio evidence:** User problem, workflow diagram, acceptance criteria, demonstration, and a recommendation about whether the feature should be adopted.

**Relevant roles:** Forward-deployed AI engineer, AI product manager, and AI governance specialist.

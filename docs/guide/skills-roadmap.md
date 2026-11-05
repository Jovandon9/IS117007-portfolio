---
description: An adaptable twelve-week learning plan for exploring applied AI careers.
---

# Build a practical skill foundation

This optional twelve-week plan is a structure for exploration, not a job-readiness guarantee. Adjust the pace to your experience, available time, and target roles. If programming is new to you, spend more time on the foundations before adding models.

## Skills that connect the roles

| Skill | What you should be able to demonstrate | Especially useful for |
| --- | --- | --- |
| Python and software engineering | Readable code, tests, version control, and error handling | AI, ML, research, and evaluation engineering |
| Data and SQL | Explain a dataset, query it, and identify quality problems | Engineering, product, and evaluation |
| Model fundamentals | Explain training versus inference, context limits, and uncertainty | Every role family |
| APIs and deployment | Serve a feature and observe its behavior | AI engineering, forward deployment, and architecture |
| Evaluation | Compare a baseline and an alternative using relevant examples | Every role that makes claims about system quality |
| Privacy and risk | Identify sensitive data and propose appropriate controls | Every role family |
| Communication | Explain tradeoffs, user needs, and evidence clearly | Every role family |

You do not need to master every column before starting a project. Use an actual job description to prioritize.

## Weeks 1–2: Make software you can explain

Practice Python, Git, command-line basics, and working with JSON. Build a small program that reads a file, validates input, and handles a predictable error. Add a few tests that would catch meaningful mistakes.

**Evidence:** A repository with setup instructions and an example of a failure your tests catch.

## Weeks 3–4: Understand the data and the baseline

Use a small public or synthetic dataset. Explore its fields, missing values, and limitations. Learn basic SQL and distinguish training data from evaluation data. Define a simple non-AI baseline before introducing a model.

**Evidence:** A data note and a baseline result that you can reproduce.

## Weeks 5–6: Build one focused AI feature

Choose a task such as answering questions from a small document collection or classifying support messages. Learn the difference between prompting, retrieval, and fine-tuning. Use a local model or a service you are authorized to access; set a spending limit if usage is billed.

**Evidence:** A working feature with clear inputs, outputs, and known limitations.

## Weeks 7–8: Measure failures

Create a small evaluation set with expected behavior, including ambiguous inputs and cases the system should decline. Keep final test examples separate from the examples you use while improving the system. Compare quality, latency, and cost where relevant.

**Evidence:** An evaluation report with unsuccessful examples and a reasoned improvement.

## Weeks 9–10: Make operation visible

Package the application, add basic logging without storing sensitive content, and document configuration. Test an unavailable model, a timeout, and an invalid request. Add human review where a wrong answer could have a meaningful consequence.

**Evidence:** A local or hosted demonstration plus a short operating guide.

## Weeks 11–12: Explain the result to a specific audience

Write a case study: user problem, baseline, design choice, evaluation, limitations, and next step. Tailor the emphasis to the role. A forward-deployed engineer should explain adoption and stakeholder tradeoffs; an evaluation engineer should explain scoring and disagreement.

**Evidence:** A concise presentation someone else can understand and reproduce.

Next, choose a [portfolio project](/guide/portfolio-projects) and compare it against the responsibilities in the [role directory](/roles/).

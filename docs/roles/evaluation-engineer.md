---
title: AI evaluation engineer
description: Explore the datasets, experiments, and judgment used to evaluate AI systems.
---

# AI evaluation engineer

**Build evidence about what an AI system can and cannot do.** Evaluation engineers design repeatable checks that help teams compare versions, investigate failures, and make release decisions. Related titles include *LLM evaluation engineer*, *AI quality engineer*, and some forms of *AI assurance*.

Evaluation work also happens within software engineering, research, quality assurance, and safety teams. A separate title is not proof of a distinct career ladder at every employer.

## What the work looks like

An evaluator might test whether a document assistant cites the right evidence, whether a tool-using agent respects permission boundaries, or whether a summary leaves out important facts. They need to understand the intended use and what a consequential error looks like.

Typical responsibilities include building representative datasets, defining scoring rubrics, maintaining evaluation harnesses, running comparisons, organizing human reviews, and analyzing results. The work includes inspecting ambiguous examples rather than reducing every question to one automatic score.

Deliverables include a versioned dataset, documented metrics, a reproducible report, and a clear explanation of what the results do not establish. The team should be able to distinguish a real improvement from a changed test set, inconsistent labels, or a favorable prompt example.

## Skills to develop

- **Engineering:** Python or TypeScript, data processing, APIs, tests, reproducibility, and CI integration.
- **Measurement:** sampling, baselines, uncertainty, agreement between reviewers, and metric limitations.
- **Domain judgment:** recognizing errors that matter in the intended workflow.
- **Communication:** writing clear rubrics and explaining evidence to product, engineering, and safety partners.

Model-based judges can be useful, but they need validation. Check for position effects, inconsistent scoring, and disagreement with qualified human reviewers. A good score on a benchmark does not automatically predict success in a different workflow.

## Illustrative job brief

::: info Example written for this atlas
Create an evaluation harness for an assistant that answers questions about public policy documents. Build a representative question set, define citation and factuality criteria, compare two system versions, and organize a small human review. Report failure categories and recommend what must improve before a broader pilot.
:::

This brief is illustrative. It is not a live vacancy or a claim that one particular metric should determine release.

## A realistic entry route

Software testing, data analysis, applied research, quality engineering, and domain expertise can provide foundations. Start by making a small application evaluation repeatable. Learn basic statistics and practice writing a rubric that another person can apply consistently.

Some positions focus on infrastructure; others expect deep scientific or safety expertise. Check the role's seniority and specialty before deciding which skills to prioritize.

## Portfolio proof

Publish a small evaluation dataset using public or synthetic data, with its origin clearly stated. Compare a simple baseline with an improved system. Show item-level results, reviewer guidance, disagreements, and error categories. Hold out examples for the final comparison and document the limits of the sample. Include a script that reproduces the report.

## How this role differs

An [AI engineer](/roles/ai-engineer) builds the system being tested. A [research engineer](/roles/research-engineer) may develop new methods and experiments. An evaluation engineer makes measurement dependable enough to inform decisions, with substantial overlap in practice.

## Further reading

- [OpenAI evaluation guide](https://platform.openai.com/docs/guides/evals) — application evaluation concepts and workflow.
- [Hugging Face Evaluate documentation](https://huggingface.co/docs/evaluate/index) — tools and concepts for model evaluation.
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) — measurement as part of risk management.

---
title: AI engineer
description: What AI engineers build, which skills matter, and how to demonstrate them in a portfolio.
---

# AI engineer

**Build AI features that people can use reliably.** An AI engineer combines software engineering with model capabilities, data, evaluations, and operational controls. The job often involves using an existing model rather than training a new foundation model.

## What the work looks like

An engineer might build a support assistant that retrieves approved documentation, summarizes an internal report, or classifies incoming requests. The hard part extends beyond getting a plausible answer from a model: the feature must use the right information, handle failures, protect data, and fit the application's workflow.

Typical responsibilities include integrating model APIs or locally hosted models, preparing retrieval pipelines, building backend services, defining structured outputs, writing evaluations, and monitoring latency, quality, and cost. Some jobs also include fine-tuning or agent workflows; others primarily involve application development.

A useful deliverable is a working service with a documented input/output contract, a small evaluation dataset, operational measurements, and a clear path for users to correct or reject an answer.

## Skills to develop

- **Software foundations:** Python or TypeScript, HTTP APIs, Git, testing, databases, and deployment.
- **AI application patterns:** prompting, retrieval-augmented generation, embeddings, tool use, and structured responses.
- **Evaluation:** useful baselines, representative examples, failure analysis, and human review.
- **Production judgment:** authentication, data permissions, logging, rate limits, timeouts, and cost controls.

You do not need to know every framework. Explain why a simple retrieval system, a fixed workflow, or conventional software may be more suitable than an autonomous agent.

## Illustrative job brief

::: info Example written for this atlas
Build a documentation assistant for a software team. Integrate an existing model, retrieve only documents the user may access, include source citations, and route uncertain requests to a person. Maintain an evaluation set and report changes in answer quality, latency, and per-request cost before release.
:::

This is a sample scope, not a current job listing. A real advertisement might expect several years of backend experience or assign much narrower responsibilities.

## A realistic entry route

Start with a small software application that works without AI, then add one model-powered feature. Learn to test the surrounding code independently of the model. Improve the feature using a fixed set of examples rather than judging a few impressive outputs.

Junior software engineering, backend, data, or automation experience can provide a foundation. AI-titled positions vary in seniority; an application project does not substitute for every employer's experience requirements.

## Portfolio proof

Build a question-answering tool over public documents. Publish the data source, retrieval design, evaluation rubric, examples of incorrect answers, and a short explanation of data handling. Compare it with a simpler baseline. Show what happens when the answer is absent and when a retrieved document contains misleading instructions.

## How this role differs

An [ML engineer](/roles/ml-engineer) often spends more time on training pipelines, model deployment, and statistical performance. A [forward-deployed engineer](/roles/forward-deployed-engineer) works more directly within a customer's process and environment. These responsibilities can overlap in smaller teams.

## NJIT learning connections

See the [verified NJIT next steps](/guide/getting-started#njit-next-steps) for an ML course and prerequisites, supervised research, computing clubs and career advising. These are independent learning suggestions; confirm course fit and availability with NJIT.

## Further reading

- [Microsoft Azure AI services documentation](https://learn.microsoft.com/en-us/azure/ai-services/) — examples of AI services and application integration.
- [Hugging Face LLM course](https://huggingface.co/learn/llm-course/chapter1/1) — model and language-processing foundations.
- [OpenAI evaluation guide](https://platform.openai.com/docs/guides/evals) — evaluation concepts for model-powered applications.



---
title: AI research engineer
description: Learn about the implementation and experimentation work that supports AI research.
---

# AI research engineer

**Make research ideas possible to test.** A research engineer combines strong programming and systems skills with experimental thinking. The work may involve reproducing a paper, implementing a new training method, building research infrastructure, or investigating why an experiment behaves unexpectedly.

Job boundaries differ across labs. Some research engineers co-develop novel methods; others primarily enable experiments. *Research scientist*, *applied scientist*, and *research engineer* are overlapping titles with different expectations at different organizations.

## What the work looks like

A team may have a hypothesis about model performance but lack a reliable way to test it. A research engineer turns that idea into an implementation, checks the data and configuration, runs suitable baselines, and helps interpret the results.

Typical work includes reading papers, translating methods into code, building training and evaluation pipelines, profiling performance, debugging numerical or data issues, and documenting experiments. Some roles involve distributed training and specialized accelerators; others focus on smaller experiments, evaluation methods, or research tooling.

Deliverables can include reproducible code, experiment configurations, benchmark results, a model implementation, or an internal research report. Negative results can be valuable when the experiment is sound and its limits are clear.

## Skills to develop

- **Programming:** Python, a deep learning framework, testing, profiling, and clean experiment code.
- **Mathematical foundations:** linear algebra, probability, optimization, and the assumptions behind common methods.
- **Research practice:** reading papers critically, defining hypotheses, choosing baselines, and separating evidence from speculation.
- **Systems:** data pipelines, GPU basics, reproducibility, and resource-aware experiment planning.

Specialize gradually. A careful, well-explained small experiment can demonstrate more judgment than a costly training run without a clear research question.

## Illustrative job brief

::: info Example written for this atlas
Reproduce a published text-classification method on an openly licensed dataset. Implement the baseline and proposed change, track configuration and seeds, inspect failure cases, and write a report comparing the observed result with the paper. Identify differences in data, compute, and evaluation that may explain discrepancies.
:::

This is a learning assignment, not a live job listing. Industrial research roles may require substantially deeper experience and access to different resources.

## A realistic entry route

Develop strong software engineering and mathematical foundations, then contribute to research projects, open-source libraries, or supervised academic work. A degree can be useful and is required in some postings; requirements vary. Some roles accept equivalent demonstrated engineering experience, while others expect specialized graduate research.

Avoid assuming that all research engineering requires training a large model. Useful contributions include better experiment tooling, careful replications, performance improvements, and reliable evaluation infrastructure.

## Portfolio proof

Choose a paper whose experiment is feasible on your resources. Publish a short research question, implementation, baseline, configuration, result table, and error analysis. Explain every meaningful departure from the original setup. Record compute requirements and do not claim a reproduction succeeded if the evidence is inconclusive. Link the paper and respect dataset and model licenses.

## How this role differs

An [ML engineer](/roles/ml-engineer) commonly prioritizes operating a dependable production system. A research engineer prioritizes making experiments trustworthy and advancing understanding, though many teams need both. Research scientist roles may put greater weight on originating research directions and publication; titles alone do not establish that division.

## Further reading

- [PyTorch tutorials](https://pytorch.org/tutorials/) — implementing and understanding model workflows.
- [Hugging Face LLM course](https://huggingface.co/learn/llm-course/chapter1/1) — language model foundations and tooling.
- [Papers with Code on GitHub](https://github.com/paperswithcode) — public research tooling and resources; assess individual repositories and licenses before use.

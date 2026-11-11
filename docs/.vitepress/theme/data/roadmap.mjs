export const stages = [
  { id: 'software', title: 'Weeks 1–2: Make software you can explain', effort: '3–5 hours/week', prerequisites: 'None; allow extra time for first-time programming.', minimum: 'A Python file reader with validation, error handling, Git history and setup notes.', check: 'From a fresh folder, follow the README, run one valid input and two invalid inputs, and record actual outcomes.' },
  { id: 'data', title: 'Weeks 3–4: Understand the data and the baseline', effort: '3–5 hours/week', prerequisites: 'Run and change the stage-1 program; read JSON and explain a Git commit.', minimum: 'A small synthetic/public dataset, one SQL query, a data note and a non-AI baseline.', check: 'Reproduce the query and baseline; explain missing fields and keep final evaluation cases separate.' },
  { id: 'feature', title: 'Weeks 5–6: Build one focused AI feature', effort: '4–6 hours/week', prerequisites: 'Reproduce the dataset and baseline; define the expected input/output.', minimum: 'One narrow feature with documented inputs, outputs and an unavailable-model fallback.', check: 'Run three representative inputs plus one unsupported input; record actual outputs, settings and limitations.' },
  { id: 'evaluation', title: 'Weeks 7–8: Measure failures', effort: '4–6 hours/week', prerequisites: 'A runnable feature or two fixed candidate outputs and explicit expected behavior.', minimum: 'Versioned cases, a scoring script/rubric and item-level baseline comparison.', check: 'Rerun the report on held-out cases; inspect an error and explain what the sample cannot establish.' },
  { id: 'operation', title: 'Weeks 9–10: Make operation visible', effort: '3–5 hours/week', prerequisites: 'Reproducible feature, evaluation and configuration instructions.', minimum: 'Local demo, safe logs and an operating guide; hosting is optional.', check: 'Try invalid input, a timeout and unavailable service; record recovery behavior without logging sensitive content.' },
  { id: 'communication', title: 'Weeks 11–12: Explain the result to a specific audience', effort: '2–4 hours/week', prerequisites: 'Inspectable code/results with known limitations.', minimum: 'Case study linking the problem, alternative, decision, observed checks and next step.', check: 'Ask another person to follow the setup and explain one tradeoff; record their actual feedback and retry after changes.' }
]
export function startingStage(experience, prerequisites) {
  if (experience !== 'experienced' || !prerequisites.slice(0, 3).every(Boolean)) return 0
  return prerequisites[3] ? 2 : 1
}
export const progressKey = 'ai-career-atlas-roadmap-v1'
export function readProgress(raw) {
  try { const value = JSON.parse(raw); return Array.isArray(value) ? value.filter(id => stages.some(stage => stage.id === id)) : [] } catch { return [] }
}

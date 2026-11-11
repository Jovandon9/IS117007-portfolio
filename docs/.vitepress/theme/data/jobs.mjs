const records = [
  {
    "id": "eqt",
    "title": "EQT Corporation · AI Intern",
    "category": "internship",
    "location": "US remote excludes CA, CT, DE, IL, IN, LA, MA, MI, NJ, NY, TN.",
    "scope": "restricted",
    "excluded": [
      "CA",
      "CT",
      "DE",
      "IL",
      "IN",
      "LA",
      "MA",
      "MI",
      "NJ",
      "NY",
      "TN"
    ],
    "checked": "2026-11-05",
    "status": "Not reverified; dated research example",
    "url": "https://job-boards.greenhouse.io/eqtcorporation/jobs/5462562008",
    "summary": "Paid, 12 weeks. EQT considers remote applicants outside CA, CT, DE, IL, IN, LA, MA, MI, NJ, NY and TN. Applicants must be pursuing a technical bachelor’s or master’s degree and have experience with AI applications, machine learning or data science.\n\nAn intern interviews business teams about a workflow, builds a small language-model prototype, and demonstrates it to the people who would use it. Communication matters because the intern must explain what the pilot would improve."
  },
  {
    "id": "cohere",
    "title": "Cohere · Machine Learning Intern/Co-op (Winter 2027)",
    "category": "internship",
    "location": "Remote; United States, Canada, Europe and United Kingdom listed.",
    "scope": "us",
    "excluded": [],
    "checked": "2026-11-11",
    "status": "Checked: description and application link readable",
    "url": "https://jobs.ashbyhq.com/cohere/36d1f52f-8270-4652-adf5-5303a0ff341b",
    "summary": "Full time, three to six months. The remote posting includes the United States among its locations. Current enrollment in a postsecondary program and availability for the full work term are eligibility requirements.\n\nThe intern works alongside senior technical staff on training and serving language models. A project might investigate how to update a model as new training data arrives. Cohere looks for Python, ML frameworks, distributed training and familiarity with transformers. GPU kernel development, TPU experience and published research are bonuses."
  },
  {
    "id": "quora-ml",
    "title": "Quora · Machine Learning Engineer, New Grad - Quora (Remote)",
    "category": "newgrad",
    "location": "Remote anywhere in the U.S. or Canada; coordination hours apply.",
    "scope": "us",
    "excluded": [],
    "checked": "2026-11-11",
    "status": "Checked: accepting applications on an ongoing basis",
    "url": "https://jobs.ashbyhq.com/quora/40659fe7-545e-4b08-b6d7-2567b18b9ed3",
    "summary": "Full-time start in early 2027. Quora accepts a relevant technical degree completed or in progress. It expects Python, ML mathematics and experience with language models through coursework, research or projects. Previous software engineering experience is preferred.\n\nThe engineer helps build agents that flag harmful content. A concrete assignment is to investigate spam the system missed, test a change on labeled examples and monitor what happens after release. The team weighs mistakes alongside response time and cost."
  },
  {
    "id": "quora-platform",
    "title": "Quora · Software Engineer New Grad, Machine Learning Platform - Quora (Remote)",
    "category": "newgrad",
    "location": "Remote anywhere in the U.S.; coordination hours apply.",
    "scope": "us",
    "excluded": [],
    "checked": "2026-11-05",
    "status": "Not reverified; dated research example",
    "url": "https://jobs.ashbyhq.com/quora/cf34f80e-fe5c-454d-bc9a-4c59993ffda0",
    "summary": "2025 or 2026 graduates. Quora asks for a related technical degree, interest in distributed systems and the ability to use or quickly learn Python, Go or C++. Profiling, ML frameworks and container experience are preferred.\n\nThis team builds the infrastructure other engineers use to run models. Work includes measuring GPU serving speed, improving access to model inputs and joining an on-call rotation. Portfolio idea: benchmark the same model at several batch sizes and explain which setting gives an individual user the quickest response."
  },
  {
    "id": "twilio",
    "title": "Twilio · Machine Learning Engineer 2",
    "category": "mid",
    "location": "U.S. remote; excludes San Francisco, Oakland, San Jose and surrounding areas. Occasional travel.",
    "scope": "city",
    "excluded": [],
    "checked": "2026-11-05",
    "status": "Not reverified; dated research example",
    "url": "https://job-boards.greenhouse.io/twilio/jobs/8240487",
    "summary": "U.S. remote with occasional travel. The posting excludes San Francisco, Oakland, San Jose and surrounding areas. Twilio expected to accept applications through November 13, 2026, subject to change.\n\nThis engineer owns how an AI agent retrieves a customer's history. A mistaken match could give the agent someone else's information, so the team needs tests that catch retrieval errors before release. Twilio asks for backend service experience and production debugging with logs and metrics. Go, Python, event streaming and prior LLM product work are desired. We group this as mid-level based on the employer’s level 2 title and responsibility for a production component."
  },
  {
    "id": "buzz",
    "title": "Buzz Solutions · Senior Forward Deployed Engineer",
    "category": "senior",
    "location": "U.S. remote; about 40% travel.",
    "scope": "us",
    "excluded": [],
    "checked": "2026-11-05",
    "status": "Not reverified; dated research example",
    "url": "https://job-boards.greenhouse.io/buzzsolutions/jobs/5436872008",
    "summary": "U.S. remote, about 40% travel. The engineer works directly with utilities adopting computer vision for power-grid inspections. Before a sale, they scope a pilot with utility staff. Afterward, they help deploy the software and turn recurring customer problems into reusable tools. Someone choosing between product engineering and field work should look closely at how much time this role spends with customers."
  },
  {
    "id": "smartsheet",
    "title": "Smartsheet · Sr. Software Engineer II - AI Engineering (Remote Eligible)",
    "category": "senior",
    "location": "U.S. remote in eligible locations; specific eligible states not recorded.",
    "scope": "unknown",
    "excluded": [],
    "checked": "2026-11-05",
    "status": "Not reverified; location eligibility unknown",
    "url": "https://job-boards.greenhouse.io/smartsheet/jobs/8167496",
    "summary": "U.S. remote in eligible locations. The employer asks for ongoing U.S. work eligibility, eight or more years in software engineering and at least two years working with production LLMs. Experience tracking experiments is a plus.\n\nA senior engineer measures when a planning agent invents information or retrieves the wrong evidence. They design tests across model versions, guide other engineers and establish a quality standard the wider team can reuse."
  },
  {
    "id": "you",
    "title": "You.com · Senior Backend Engineer, Inference Platform",
    "category": "senior",
    "location": "Remote anywhere in the U.S.; Bay Area or New York preferred.",
    "scope": "us",
    "excluded": [],
    "checked": "2026-11-05",
    "status": "Not reverified; dated research example",
    "url": "https://job-boards.greenhouse.io/youcom/jobs/4528457008",
    "summary": "Remote anywhere in the U.S. The employer gives preference to candidates in the Bay Area or New York. It asks for hands-on experience tuning live model serving and operating infrastructure in the path of production requests. Contributions to open-source serving software are a plus.\n\nThis engineer owns the gateway that chooses a model for each request. If a provider slows down, the gateway needs to choose a fallback, keep the response moving and count usage accurately. The team tests routing changes against live traffic before giving them control over customer requests."
  }
]

export function locationStatus(job, state) {
  if (state === 'all') return 'Select a work state to compare stated restrictions'
  if (job.excluded.includes(state)) return 'Excluded by the recorded state restriction'
  if (job.scope === 'unknown' || (job.scope === 'city' && state === 'CA')) return 'Unknown: confirm the specific work location'
  return 'State not excluded in the recorded description; confirm current employer rules'
}

export function visibleJobs(items, state, experienced) {
  return items.filter(job => (experienced || ['internship', 'newgrad'].includes(job.category)) &&
    (state === 'all' || !job.excluded.includes(state)))
    .sort((a, b) => Number(a.scope === 'unknown' || (a.scope === 'city' && state === 'CA')) -
      Number(b.scope === 'unknown' || (b.scope === 'city' && state === 'CA')))
}

const qualifications = [
  'Technical bachelor’s or master’s in progress; AI, ML or data-science experience.',
  'Current postsecondary enrollment; full-time 3–6-month term; Python/ML frameworks and transformer familiarity sought.',
  'B.S., M.S. or Ph.D. in CS, engineering or a related technical field completed/in progress; Python, ML math and LLM/transformer experience; early-2027 start.',
  'Related technical degree; 2025/2026 graduate; Python, Go or C++ and distributed-systems interest.',
  'Backend service experience and production debugging; Go/Python, event streaming and LLM product work desired.',
  'Detailed minimum qualifications not recorded in this dated summary; inspect the original employer description.',
  'Eight or more software-engineering years, at least two years with production LLMs, and ongoing U.S. work eligibility.',
  'Hands-on production model-serving and infrastructure experience; open-source serving contributions preferred.'
]
export const jobs = records.map((job, index) => ({ ...job, qualifications: qualifications[index] }))


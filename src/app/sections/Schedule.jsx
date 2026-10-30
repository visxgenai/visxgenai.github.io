const schedule = [
  {
    time: "8:00–8:10",
    title: "Welcome, Opening Remarks & Challenge Introduction",
    highlight: true,
  },
  {
    time: "8:10–9:05",
    title: "Paper Session I: Building & Evaluating Agentic Visualization Systems",
    highlight: true,
  },
  {
    time: "8:10",
    title: "LM Agents for Visualization Generation and Vision-First Evaluation",
    presenter: "Tahsen Islam Sajon",
    mode: "Remote",
    challenge: true,
  },
  {
    time: "8:15",
    title: "Toward AI VIS Co-Scientists: An Agent Harness for End-to-End Design of Scientific Visualization Applications",
    presenter: "Haichao Miao",
    mode: "In person",
  },
  {
    time: "8:22",
    title: "CanvasObs: Structured Spatial Observation for Agent Editing in 2D Workspaces",
    presenter: "Jiahao Xu",
    mode: "In person",
  },
  {
    time: "8:29",
    title: "AgentPulse: Visual Analytics of Communication and Activity in LLM-Based Multi-Agent Systems",
    presenter: "Kathrin Guckes",
    mode: "In person",
  },
  {
    time: "8:36",
    title: "What Should the Agent Withhold? Designing Cognitive Friction Against Over-Reliance in Visualization Design Learning",
    presenter: "Jing Lu",
    mode: "Remote",
  },
  {
    time: "8:43",
    title: "From Agents to Agency: Rethinking Human Agency in Agentic Visualization",
    presenter: "Narges Mahyar",
    mode: "In person",
  },
  {
    time: "8:50",
    title: "Measuring the Collaboration, Not the Agent: An Evaluation Framework for Human-AI High-Dimensional Visual Analytics",
    presenter: "Xinxiao Li",
    mode: "Remote",
  },
  {
    time: "8:57",
    title: "Sycamore: Grounded Synthetic Evaluation for Visualization Systems",
    presenter: "Huyen N. Nguyen",
    mode: "In person",
  },
  {
    time: "9:05–9:30",
    title: "Coffee Break & Posters",
    details: "25 min",
    posters: true,
    highlight: true,
  },
  {
    time: "9:30–10:30",
    title: "Keynote Talk",
    details: "Title to be announced",
    presenter: "Eugene Wu",
    highlight: true,
  },
  {
    time: "10:30–11:00",
    title: "Coffee Break & Posters",
    details: "30 min",
    posters: true,
    highlight: true,
  },
  {
    time: "11:00–11:55",
    title: "Paper Session II: Trust, Alignment & Visual Perception of AI Models",
    highlight: true,
  },
  {
    time: "11:00",
    title: "Generate, Validate, Repair: Reliable Visual Data Reporting with LLM Agents",
    presenter: "Naga Datha Saikiran Battula",
    mode: "In person",
    challenge: true,
  },
  {
    time: "11:07",
    title: "How Do Artificial Agents Make Decisions in Light of Visual Data?",
    presenter: "Shayan Monadjemi",
    mode: "In person",
  },
  {
    time: "11:12",
    title: "Saying Uncertain, Showing Certain: Evidence–Action Mismatches in LLM Visualization Agents",
    presenter: "Arindam Bhattacharya",
    mode: "Remote",
  },
  {
    time: "11:19",
    title: "Evaluating Human-LLM Alignment on Visualization Preference",
    presenter: "Tanmay Bakshi",
    mode: "Remote",
  },
  {
    time: "11:26",
    title: "On Interpretability Methods for Vision Language Models in Visualization",
    presenter: "Pranava Madhyastha",
    mode: "Remote",
  },
  {
    time: "11:33",
    title: "Where LLMs Fail with Visualization DSLs",
    presenter: "Chang Han",
    mode: "In person",
  },
  {
    time: "11:40",
    title: "Graphical Perception Across Encoding Channels in Multimodal LLMs",
    presenter: "Markus Wallinger",
    mode: "In person",
  },
  {
    time: "11:47",
    title: "A Stevens' Power Law Measurement for Multimodal Large Language Models",
    presenter: "Kaichun Yang",
    mode: "In person",
  },
  {
    time: "11:55–12:00",
    title: "Closing Remarks",
    details: "Organizers",
    highlight: true,
  },
];

const posters = [
  {
    submission: 1219,
    title: "Point, Revise, Review: Grounded Agentic Analysis in Reactive Notebooks with marimo-lens",
    presenter: "Peter Gyarmati",
    mode: "In person",
  },
  {
    submission: 1237,
    title: "EduAgent: A Visual Feedback Agent for Teaching Python to Novices",
    presenter: "Lijie Yao",
    mode: "Remote",
  },
  {
    submission: 1358,
    title: "Food Critic: An Agentic Visualization System for Auditable Restaurant-Safety Reasoning",
    presenter: "Arleth Salinas",
    mode: "In person",
  },
  {
    submission: 1520,
    title: "From Description to Interactive VR Scene: An LLM Agent for Authoring Immersive Healthcare Experiences",
    presenter: "Allison Andreyev",
    mode: "In person",
  },
  {
    submission: 5081,
    title: "MAADG: A Multi-Agent Framework for On-Demand Interactive Visualization Generation in Web-Based Education",
    presenter: "Qiyuan Liu",
    mode: "In person",
  },
  {
    submission: 6497,
    title: "Verdict-Driven Human-Agent Collaboration for Autonomous-Driving Data Mining",
    presenter: "Chen Chen",
    mode: "In person",
  },
  {
    submission: 7121,
    title: "Semantic Action Graph: A Shared Representation for Agent Grounding and Human Interpretation of Sports Highlights",
    presenter: "Tica Lin",
    mode: "In person",
  },
  {
    submission: 7481,
    title: "TraceVis: Connecting Agent-Generated Analyses to the Queries and Evidence Behind Them",
    presenter: "Zhaocong Yang",
    mode: "In person",
  },
  {
    submission: 7794,
    title: "Levels of AI Autonomy and Analyst Control for Bias Mitigation Interventions in Visual Analytics",
    presenter: "Sunggyeol Oh",
    mode: "In person",
  },
  {
    submission: 8195,
    title: "Task-Aligned Layered Evaluation for Generative Visualizations",
    presenter: "Eunhye Kim",
    mode: "In person",
  },
  {
    submission: 8774,
    title: "ChartRevive: Reconstructing Data Visualizations from Chart Images Using MLLMs",
    presenter: "Yuki Ueno",
    mode: "In person",
  },
  {
    submission: 9370,
    title: "Multimodal LLMs and Deep Features as Perceptual Observers of Abstract Visualizations",
    presenter: "Meng Ling",
    mode: "In person",
  },
  {
    submission: 3617,
    title: "Compute-Then-Narrate: A Deterministic-Analysis Agent for Dataset-Agnostic Visual Data Storytelling",
    presenter: "Ishrat Jahan Eliza",
    mode: "In person",
    challenge: true,
  },
  {
    submission: 5661,
    title: "StoryKit: A Schema-Driven Agent for Generating and Evaluating Interactive Data Stories",
    presenter: "Aashish Panta",
    mode: "In person",
    challenge: true,
  },
  {
    submission: 6680,
    title: "Compiled Design, Verified Prose: An Agent That Writes Reports It Cannot See",
    presenter: "Yuwei Xiao",
    mode: "In person",
    challenge: true,
  },
  {
    submission: 7885,
    title: "From Data Intake to Decision-Ready Evidence: An Agentic Pipeline for Auditable Visual Analytics",
    presenter: "Kaustav Bhattacharjee",
    mode: "In person",
    challenge: true,
  },
];

export default function Schedule() {
  return (
    <section className="section" id="program" aria-labelledby="schedule-heading">
      <h2
        className="text-3xl font-bold text-gray-800 mb-2"
        id="schedule-heading"
      >
        Schedule
      </h2>
      <p className="text-gray-600 mb-4" id="schedule-description">
        November 9, 2026 · All times are local to Boston (EST, UTC−5).
      </p>
      <div
        className="overflow-x-auto rounded-lg border border-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#407498]"
        role="region"
        aria-labelledby="schedule-heading"
        tabIndex={0}
      >
        <table
          className="w-full min-w-[48rem] table-fixed text-left text-sm text-gray-700"
          aria-describedby="schedule-description"
        >
          <colgroup>
            <col className="w-32" />
            <col />
            <col className="w-48" />
            <col className="w-28" />
          </colgroup>
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Time</th>
              <th scope="col" className="px-4 py-3 font-semibold">Session / Talk</th>
              <th scope="col" className="px-4 py-3 font-semibold">Presenter</th>
              <th scope="col" className="px-4 py-3 font-semibold">Mode</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {schedule.map((item) => (
              <tr
                key={`${item.time}-${item.title}`}
                className={item.highlight ? "bg-gray-100" : "bg-white"}
              >
                <th
                  scope="row"
                  className={`px-4 py-3 align-top whitespace-nowrap ${item.highlight ? "font-semibold text-gray-800" : "font-normal"}`}
                >
                  {item.time}
                </th>
                <td
                  colSpan={item.highlight && !item.presenter ? 3 : 1}
                  className="px-4 py-3 align-top"
                >
                  {item.challenge && (
                    <span className="mr-2 inline-block rounded border border-[#F3B7A7] bg-[#FDF1EE] px-2 py-0.5 text-xs font-semibold text-gray-800">
                      CHALLENGE
                    </span>
                  )}
                  <span className={item.highlight ? "font-semibold text-gray-800" : "text-[#407498]"}>
                    {item.title}
                  </span>
                  {item.details && (
                    <span className="ml-1 text-gray-600">({item.details})</span>
                  )}
                  {item.posters && (
                    <a
                      href="#accepted-posters"
                      className="ml-2 text-[#407498] underline underline-offset-2 hover:text-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#407498]"
                    >
                      View accepted posters
                    </a>
                  )}
                </td>
                {(!item.highlight || item.presenter) && (
                  <>
                    <td className="px-4 py-3 align-top">{item.presenter}</td>
                    <td className="px-4 py-3 align-top whitespace-nowrap">
                      {item.mode === "Remote" ? (
                        <span className="inline-block rounded bg-blue-50 px-2 py-0.5 font-semibold text-blue-800">
                          Remote
                        </span>
                      ) : item.mode}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 scroll-mt-24" id="accepted-posters">
        <h3 className="text-2xl font-bold text-gray-800 mb-2" id="posters-heading">
          Accepted Posters
        </h3>
        <p className="text-gray-600 mb-4" id="posters-description">
          Poster sessions: 9:05–9:30 and 10:30–11:00 during the coffee breaks.
        </p>
        <div
          className="overflow-x-auto rounded-lg border border-gray-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#407498]"
          role="region"
          aria-labelledby="posters-heading"
          tabIndex={0}
        >
          <table
            className="w-full min-w-[40rem] table-fixed text-left text-sm text-gray-700"
            aria-describedby="posters-description"
          >
            <colgroup>
              <col />
              <col className="w-48" />
              <col className="w-28" />
            </colgroup>
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Poster</th>
                <th scope="col" className="px-4 py-3 font-semibold">Presenter</th>
                <th scope="col" className="px-4 py-3 font-semibold">Mode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {posters.map((poster) => (
                <tr key={poster.submission} className="bg-white">
                  <th scope="row" className="px-4 py-3 align-top font-normal text-[#407498]">
                    {poster.challenge && (
                      <span className="mr-2 inline-block rounded border border-[#F3B7A7] bg-[#FDF1EE] px-2 py-0.5 text-xs font-semibold text-gray-800">
                        CHALLENGE
                      </span>
                    )}
                    {poster.title}
                  </th>
                  <td className="px-4 py-3 align-top">{poster.presenter}</td>
                  <td className="px-4 py-3 align-top whitespace-nowrap">
                    {poster.mode === "Remote" ? (
                      <span className="inline-block rounded bg-blue-50 px-2 py-0.5 font-semibold text-blue-800">
                        Remote
                      </span>
                    ) : poster.mode}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

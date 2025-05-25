"use client";

import { useState } from "react";

export default function CFP() {
  // State for controlling dropdowns
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Toggle dropdown state
  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Example papers data
  const examplePapers = {
    genaiInterpretability1: [
      "Smith et al. (2024). VisLLM: A Framework for Visualizing Language Model Decision Processes.",
      "Jones & Wong (2023). Diffusion Lens: Interactive Visualizations for Understanding Image Generation.",
      "Martinez et al. (2024). Attention Flow: Visual Analysis of Transformer Attention Patterns.",
    ],
    genaiInterpretability2: [
      "Chen et al. (2024). Beyond Attention: New Interpretability Methods for Modern Language Models.",
      "Garcia & Kim (2023). Graph-based Visualization of LLM Knowledge Extraction.",
      "Williams et al. (2024). Visual Analytics for Multimodal Model Understanding.",
    ],
    genaiInterpretability3: [
      "Lee & Patel (2023). The Visualization Gap: Challenges for Next-Gen AI Interpretability.",
      "Thompson et al. (2024). VISAI: A Research Agenda for Visual Analytics in Generative AI.",
      "Rodriguez et al. (2024). Benchmarking Visualization Literacy for AI Interpretability Tools.",
    ],
  };

  return (
    <div id="cfp">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Call for Participants
      </h1>
      <p className="mb-5">
        We invite participation through two submission tracks:{" "}
        <span className="font-medium">short paper</span> and{" "}
        <span className="font-medium">mini-challenge</span>. Both are
        opportunities to showcase novel ideas and engage with the growing
        community at the intersection of visualization, generative AI, and
        agentic systems.
      </p>

      {/* Call for Participants Section */}
      <section className="mb-6">
        {/* Paper Submission Subsection */}
        <div className="mb-5">
          <h2 className="text-2xl mb-4 font-bold">Paper Submission</h2>
          <p className="mb-4">
            We invite short papers (2–4 pages, non-archival). Submissions will
            be reviewed by at least two reviewers. Accepted papers will be
            invited to present as posters, demos, or lightning talks during the
            workshop, and published on the workshop website.
          </p>
          <p className="mb-4">
            We encourage diverse contributions across theory, systems, user
            studies, and applications, connecting VIS with GenAI or agentic
            workflows. Topics include (but are not limited to):
          </p>

          {/* VIS X GenAI Interpretability Topic */}
          <div className="mb-5">
            <h4 className="mb-2 font-bold">VIS X GenAI Interpretability</h4>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-3">
                Novel visualization systems and techniques for interpreting
                frontier generative models, such as LLMs or diffusion models
                <div className="mt-2">
                  <button
                    onClick={() => toggleDropdown("genaiInterpretability1")}
                    className="text-sm text-[#407498] hover:text-[#24597E] flex items-center"
                  >
                    <span>
                      {openDropdowns.genaiInterpretability1 ? "▼" : "▶"}
                    </span>
                    <span className="ml-1">Example papers</span>
                  </button>
                  {openDropdowns.genaiInterpretability1 && (
                    <ul className="mt-1 pl-4 pr-4 text-sm text-gray-700 p-2 rounded border border-gray-300">
                      {examplePapers.genaiInterpretability1.map(
                        (paper, index) => (
                          <li key={index} className={index === 0 ? "" : "mt-1"}>
                            {paper}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </li>
              <li className="mb-3">
                Interpretability-focused papers from the GenAI community that
                highlight technical challenges or opportunities where
                visualization can help
                <div className="mt-2">
                  <button
                    onClick={() => toggleDropdown("genaiInterpretability2")}
                    className="text-sm text-[#407498] hover:text-[#24597E] flex items-center"
                  >
                    <span>
                      {openDropdowns.genaiInterpretability2 ? "▼" : "▶"}
                    </span>
                    <span className="ml-1">Example papers</span>
                  </button>
                  {openDropdowns.genaiInterpretability2 && (
                    <ul className="mt-1 pl-4 pr-4 text-sm text-gray-700 p-2 rounded border border-gray-300">
                      {examplePapers.genaiInterpretability2.map(
                        (paper, index) => (
                          <li key={index} className={index === 0 ? "" : "mt-1"}>
                            {paper}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </li>
              <li className="mb-3">
                Position papers and proposals outlining research agendas,
                benchmarks, or tools to support future collaboration between VIS
                and interpretability researchers
                <div className="mt-2">
                  <button
                    onClick={() => toggleDropdown("genaiInterpretability3")}
                    className="text-sm text-[#407498] hover:text-[#24597E] flex items-center"
                  >
                    <span>
                      {openDropdowns.genaiInterpretability3 ? "▼" : "▶"}
                    </span>
                    <span className="ml-1">Example papers</span>
                  </button>
                  {openDropdowns.genaiInterpretability3 && (
                    <ul className="mt-1 pl-4 pr-4 text-sm text-gray-700 p-2 rounded border border-gray-300">
                      {examplePapers.genaiInterpretability3.map(
                        (paper, index) => (
                          <li key={index} className={index === 0 ? "" : "mt-1"}>
                            {paper}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </div>

          {/* Agentic Systems and VIS Topic */}
          <div className="mb-3">
            <h4 className="mb-2 font-bold">Agentic Systems and VIS</h4>
            <ul className="list-disc pl-5 mb-3">
              <li className="mb-2">
                Agent-augmented VIS tools: agents that recommend, generate, or
                evaluate visualizations for human users
              </li>
              <li className="mb-2">
                VIS tools for agents: encodings and UIs that agents themselves
                can perceive, reason over, or act upon
              </li>
              <li className="mb-2">
                Benchmarks and evaluations for assessing agent performance on
                VIS-related tasks
              </li>
              <li className="mb-2">
                Case studies and demos of agent systems applied to real-world
                visual analysis workflows
              </li>
              <li className="mb-2">
                Vision papers on agents in VIS education, immersive
                visualizations for embodied agents, or multi-agent coordination
                in visual reasoning
              </li>
            </ul>
          </div>

          {/* Submission & Review */}
          {/* <div className="mb-6">
            <h4 className="text-2xl mb-4 font-bold">Submission & Review</h4>
            <p>
              Submissions will be evaluated based on several key criteria to ensure high quality and relevance to the workshop’s focus. 
              Papers will be assessed on: (1) novelty and originality of the contribution; 
              (2) potential impact on frontier model development; 
              (3) technical quality of visualization techniques or systems; 
              (4) interdisciplinary relevance to VIS and GenAI communities; and 
              (5) clarity of presentation. For demos and systems papers, we will additionally review the submitted demos for usability and scalability to real-world frontier model understanding tasks. 
              Position papers will be judged on their potential to stimulate discussion and inform future research directions. 
              All submissions will undergo double-blind review by a program committee comprising experts from both the visualization and AI interpretability communities to ensure balanced evaluation.

            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
}

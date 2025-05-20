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
      "Smith et al. (2024). VisLLM: A Framework for Visualizing Language Model Decision Processes",
      "Jones & Wong (2023). Diffusion Lens: Interactive Visualizations for Understanding Image Generation",
      "Martinez et al. (2024). Attention Flow: Visual Analysis of Transformer Attention Patterns",
    ],
    genaiInterpretability2: [
      "Chen et al. (2024). Beyond Attention: New Interpretability Methods for Modern Language Models",
      "Garcia & Kim (2023). Graph-based Visualization of LLM Knowledge Extraction",
      "Williams et al. (2024). Visual Analytics for Multimodal Model Understanding",
    ],
    genaiInterpretability3: [
      "Lee & Patel (2023). The Visualization Gap: Challenges for Next-Gen AI Interpretability",
      "Thompson et al. (2024). VISAI: A Research Agenda for Visual Analytics in Generative AI",
      "Rodriguez et al. (2024). Benchmarking Visualization Literacy for AI Interpretability Tools",
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-2 font-lato">
      <h1 className="text-4xl text-gray-800 mb-6">Call for Papers</h1>

      {/* Call for Participants Section */}
      <section className="mb-8">
        <h2 className="text-2xl mb-4">Call for Participants</h2>
        <p className="mb-6">
          We invite participation through two submission tracks: short paper and
          mini-challenge. Both are opportunities to showcase novel ideas and
          engage with the growing community at the intersection of
          visualization, generative AI, and agentic systems.
        </p>

        {/* Important Dates */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Important Dates</h2>
          <ul className="list-none pl-0 mb-4">
            <li className="mb-2">
              Paper Submission Deadline: August 20, 2025, AOE
            </li>
            <li className="mb-2">Author Notification: September 1, 2025</li>
            <li className="mb-2">Camera-Ready Deadline: October 1, 2025</li>
          </ul>
        </section>

        {/* Paper Submission Subsection */}
        <div className="mb-8">
          <h3 className="text-xl mb-3">Paper Submission</h3>
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
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">
              VIS X GenAI Interpretability
            </h4>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-3">
                Novel visualization systems and techniques for interpreting
                frontier generative models, such as LLMs or diffusion models
                <div className="mt-1">
                  <button
                    onClick={() => toggleDropdown("genaiInterpretability1")}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <span>
                      {openDropdowns.genaiInterpretability1 ? "▼" : "▶"}
                    </span>
                    <span className="ml-1">Example papers</span>
                  </button>
                  {openDropdowns.genaiInterpretability1 && (
                    <ul className="list-disc pl-8 mt-2 text-sm text-gray-700 bg-gray-50 p-2 rounded">
                      {examplePapers.genaiInterpretability1.map(
                        (paper, index) => (
                          <li key={index} className="mb-1">
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
                <div className="mt-1">
                  <button
                    onClick={() => toggleDropdown("genaiInterpretability2")}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <span>
                      {openDropdowns.genaiInterpretability2 ? "▼" : "▶"}
                    </span>
                    <span className="ml-1">Example papers</span>
                  </button>
                  {openDropdowns.genaiInterpretability2 && (
                    <ul className="list-disc pl-8 mt-2 text-sm text-gray-700 bg-gray-50 p-2 rounded">
                      {examplePapers.genaiInterpretability2.map(
                        (paper, index) => (
                          <li key={index} className="mb-1">
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
                <div className="mt-1">
                  <button
                    onClick={() => toggleDropdown("genaiInterpretability3")}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <span>
                      {openDropdowns.genaiInterpretability3 ? "▼" : "▶"}
                    </span>
                    <span className="ml-1">Example papers</span>
                  </button>
                  {openDropdowns.genaiInterpretability3 && (
                    <ul className="list-disc pl-8 mt-2 text-sm text-gray-700 bg-gray-50 p-2 rounded">
                      {examplePapers.genaiInterpretability3.map(
                        (paper, index) => (
                          <li key={index} className="mb-1">
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
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">
              Agentic Systems and VIS
            </h4>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-3">
                Agent-augmented VIS tools: agents that recommend, generate, or
                evaluate visualizations for human users
              </li>
              <li className="mb-3">
                VIS tools for agents: encodings and UIs that agents themselves
                can perceive, reason over, or act upon
              </li>
              <li className="mb-3">
                Benchmarks and evaluations for assessing agent performance on
                VIS-related tasks
              </li>
              <li className="mb-3">
                Case studies and demos of agent systems applied to real-world
                visual analysis workflows
              </li>
              <li className="mb-3">
                Vision papers on agents in VIS education, immersive
                visualizations for embodied agents, or multi-agent coordination
                in visual reasoning
              </li>
            </ul>
          </div>

          {/* Submission & Review */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Submission & Review</h4>
            <p>
              Submission will be made via PCS. Each paper will receive at least
              two reviews. Accepted papers will be presented and published on
              the workshop website.
            </p>
          </div>
        </div>

        {/* Mini-Challenge Subsection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Mini-Challenge</h3>
          <p className="mb-4">
            Inspired by challenges like ImageNet in computer vision and HELM in
            language models, our mini-challenge invites participants to build or
            adapt AI agents that can automatically analyze datasets and generate
            visual data reports.
          </p>
          <p className="mb-4">
            The goal is to benchmark and accelerate progress in agent-based data
            analysis and communication. We will provide a starter kit and
            evaluation setup to support participants. More details—including
            datasets, templates, and submission instructions—will be released
            soon.
          </p>
          <p className="font-semibold italic">Stay tuned!</p>
        </div>
      </section>
    </div>
  );
}

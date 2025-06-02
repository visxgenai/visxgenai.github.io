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
    genaiInterpretability1: ["Papers presenting novel visualization techniques or systems for interpretability \
      of frontier generative models, accompanied by interactive demos that showcase practical applications for GenAI researchers. Some example papers include: ",
      "* Lee et. al. (2024). LLM Attributor: Interactive Visual Attribution for LLM Generation",
      "* Lin (2023). Neuronpedia: Interactive Reference and Tooling for Analyzing Neural Networks.",
    ],
    genaiInterpretability2: [
      "Papers highlighting challenges and opportunities where visualization \
      expertise could contribute, presented as posters to facilitate in-depth discussions with visualization researchers. For example:",
      "* Viégas, and Wattenberg. (2023). The System Model and the User Model: Exploring AI Dashboard Design",

    ],
    genaiInterpretability3: [
      "Brief position papers outlining research agendas, proposing benchmarks, tooling infrastructure, \
      or suggesting collaborative projects between visualization and interpretability experts to enhance \
      our understanding of the frontier models.",
    ],
  };

  return (
    <section id="cfp" className="mb-6">
      {/* Paper Submission Subsection */}
      <div className="mb-5">
        {/* <h2 className="text-2xl mb-4 font-bold">TrackA: Paper Submission</h2> */}
        <p className="mb-4">
          We invite short paper submissions (2–4 pages excluding references) that explore
          topics across theory, systems, user studies, and applications for GenAI interpretability and safety, or agentic VIS.
          Submissions must follow the VGTC conference two-column format, consistent with the <a className="text-[#7a0019] hover:underline" href="https://tc.computer.org/vgtc/publications/conference/" target="_blank">IEEE VIS formatting guidelines</a>.
          Areas of interest include, but are not limited to, the following:
        </p>

        {/* VIS X GenAI Interpretability Topic */}
        <div className="mb-5">

          <ul className="list-disc pl-5 mb-4">
            <li className="mb-2">
              <em>VIS for interpreting GenAI systems</em>.
              <br />
              <span
                onClick={() => toggleDropdown("genaiInterpretability1")}
                className="text-sm text-[#407498] hover:text-[#24597E] items-center"
              >
                <span>
                  {openDropdowns.genaiInterpretability1 ? "▼" : "▶"}
                </span>
                <span className="ml-1">More information</span>
              </span>
              <div className="mt-2">

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
            <li className="mb-2">
              <em>GenAI interpretability and safety realted works </em> that
              highlights challenges or opportunities where VIS can fit. <br />
              <span
                onClick={() => toggleDropdown("genaiInterpretability2")}
                className="text-sm text-[#407498] hover:text-[#24597E] items-center"
              >
                <span>
                  {openDropdowns.genaiInterpretability2 ? "▼" : "▶"}
                </span>
                <span className="ml-1">More information</span>
              </span>
              <div className="mt-2">

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
            <li className="mb-2">
              <em>Position papers for VIS and GenAI researchers.</em>  <br />
              <span
                onClick={() => toggleDropdown("genaiInterpretability3")}
                className="text-sm text-[#407498] hover:text-[#24597E] items-center"
              >
                <span>
                  {openDropdowns.genaiInterpretability3 ? "▼" : "▶"}
                </span>
                <span className="ml-1">More information</span>
              </span>
              <div className="mt-2">

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

            <li className="mb-2">
              <em>Agent-augmented VIS tools</em>.
            </li>
            <li className="mb-2">
              <em>VIS tools for agents</em> that agents themselves
              can perceive, reason over, or act upon.
            </li>
            <li className="mb-2">
              <em>Methods and benchmarks</em> for assessing agent performance on VIS-related tasks.
            </li>
            <li className="mb-2">
              <em>Case studies and demos</em> of agent systems applied to real-world VIS problems.
            </li>
            <li className="mb-2">
              <em>Position papers on agents in VIS</em> education, immersive
              visualizations for embodied agents, or multi-agent coordination
              in visual reasoning.
            </li>
          </ul>


        </div>

        {/* Agentic Systems and VIS Topic */}
        {/* <div className="mb-3">
            <h4 className="mb-2">Agentic Systems and VIS</h4>
            <ul className="list-disc pl-5 mb-3">

            </ul>
          </div> */}

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
  );
}

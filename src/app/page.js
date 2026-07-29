import Home from "./sections/Home";

export default function AIVisualizationWorkshop() {
  const organizers = [
    { name: "Zhu-Tian Chen", affiliation: "University of Minnesota-Twin Cities" },
    { name: "Nam Wook Kim", affiliation: "Boston College" },
    { name: "Saeed Boorboor", affiliation: "University of Illinois Chicago" },
    { name: "Shivam Raval", affiliation: "Harvard University" },
    { name: "Pan Hao", affiliation: "University of Minnesota-Twin Cities" },
    { name: "Qianwen Wang", affiliation: "University of Minnesota-Twin Cities" },
    { name: "Vidya Setlur", affiliation: "Tableau Research" },
  ];

  return (
    <>
      <Home />
      <div className="max-w-6xl mx-auto px-4 py-2 font-lato">
        <section className="section" id="about">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            About the Workshop
          </h1>
          <p className="text-gray-700 mb-4">
            Recent advances in agents (i.e., autonomous, goal-driven AI systems
            that iteratively observe, act, and learn from their environments)
            offer a fundamentally different approach from traditional AI models
            that passively respond to input. These agentic AI systems are
            rapidly reshaping how we approach data-intensive tasks and providing
            new opportunities for the VIS community. Imagine an agent
            autonomously generating visualizations to analyze complex data,
            discovering patterns collaboratively, testing hypotheses, and
            communicating visual insights at a speed and scale beyond human
            capability.
          </p>
          <p className="text-gray-700 mb-4">
            Yet, the emergence of these powerful systems raises critical
            questions that the VIS community must address: Could autonomous
            agents eventually replace human data scientists, and if not, how
            might they best collaborate? Are current visualization techniques
            and interfaces, originally designed for human analysts, suitable
            for agent interactions? How can VIS designers effectively integrate
            agents into their workflows without compromising human agency? And
            to what extent should agents help shape and educate the next
            generation of visualization researchers?
          </p>
          <p className="text-gray-700 mb-4">
            Through a mix of keynote talks, paper presentations, and an agentic
            VIS challenge, this workshop invites researchers and practitioners
            to share innovative ideas, explore these questions, and discuss
            strategies to transform the impact of VIS for a future where human
            and AI agents co-exist.
          </p>
        </section>

        <section className="section" id="tracks">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Call for Participants
          </h2>
          <p className="text-gray-700 mb-5">
            We invite participation through two submission tracks:{" "}
            <span className="font-semibold">Short Paper</span> and{" "}
            <span className="font-semibold">AgenticVIS Challenge</span>. Both
            are opportunities to showcase novel ideas and engage with the
            growing community at the intersection of visualization, generative
            AI, and agentic systems.
          </p>
          <p className="text-gray-700 mb-5">
            For submissions to either track, use PCS and select{" "}
            <span className="font-semibold">TVCG</span> &rarr;{" "}
            <span className="font-semibold">VIS 2026</span> &rarr;{" "}
            <span className="font-semibold">VISxGenAI</span>.
          </p>

          <div className="grid items-start gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Track A: Short Paper
              </h3>
              <p className="text-gray-700 mb-4">
                We invite short paper submissions (2-4 pages excluding
                references) that explore topics across theory, systems, user
                studies, and applications for GenAI or agentic VIS. Submissions must follow the VGTC conference
                two-column format, consistent with the{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="https://tc.computer.org/vgtc/publications/conference/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IEEE VIS formatting guidelines
                </a>
                . Areas of interest include, but are not limited to, the
                following:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <em>VIS for interpreting GenAI systems.</em>
                  <details className="mt-1">
                    <summary className="cursor-pointer text-sm text-[#407498] hover:text-[#24597E]">
                      More information
                    </summary>
                    <div className="mt-2 rounded border border-gray-300 p-3 text-sm text-gray-700">
                      <p>
                        Papers presenting novel visualization techniques or
                        systems for interpretability of frontier generative
                        models, accompanied by interactive demos that showcase
                        practical applications for GenAI researchers. Some
                        example papers include:
                      </p>
                      <p className="mt-1">
                        * Lee et. al. (2024). LLM Attributor: Interactive
                        Visual Attribution for LLM Generation
                      </p>
                      <p className="mt-1">
                        * Lin (2023). Neuronpedia: Interactive Reference and
                        Tooling for Analyzing Neural Networks.
                      </p>
                    </div>
                  </details>
                </li>

                <li>
                  <em>Human-agent collaboration</em> in data analysis and
                  visualization.
                </li>
                <li>
                  <em>Agent-augmented VIS tools.</em>
                </li>
                <li>
                  <em>VIS tools for agents</em> that agents themselves can
                  perceive, reason over, or act upon.
                </li>
                <li>
                  <em>Methods and benchmarks</em> for assessing agent
                  performance and agent-generated visual artifacts.
                </li>
                <li>
                  <em>Case studies and demos</em> of agent systems applied to
                  real-world VIS problems.
                </li>

                                <li>
                  <em>Position papers for VIS and AI researchers, such as agents in VIS education, VIS for embodied agents, or multi-agent coordination in visual reasoning.</em>
                  <details className="mt-1">
                    <summary className="cursor-pointer text-sm text-[#407498] hover:text-[#24597E]">
                      More information
                    </summary>
                    <div className="mt-2 rounded border border-gray-300 p-3 text-sm text-gray-700">
                      Brief position papers outlining research agendas,
                      proposing benchmarks, tooling infrastructure, or
                      suggesting collaborative projects between visualization
                      and interpretability experts to enhance our understanding
                      of the frontier models.
                    </div>
                  </details>
                </li>
              </ul>

              <p className="text-gray-700 mt-4">
                Short papers should be double-blind submissions. Initial
                submissions must not include author names or institutions, and
                authors should take care to avoid revealing identifying
                information in the text.
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Track B: AgenticVIS Challenge
              </h3>
              <p className="text-gray-700 mb-4">
                Participants will develop agents that take datasets and guiding
                questions, adapted from past VAST Challenges, as input and
                generate visual data reports as output. More details are
                available on the{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="https://visagent.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  challenge website
                </a>
                .
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Development datasets will be released before the deadline;
                  hidden testing datasets will be used for final evaluation.
                </li>
                <li>
                  During development, submissions may receive automated
                  feedback, including benchmark metrics and agent-based peer
                  evaluation.
                </li>
                <li>
                  By the submission deadline, participants must submit their
                  best-performing agent through vis-arena.
                </li>
                <li>
                  Participants must also submit an anonymous technical report
                  through PCS. The report must follow the{" "}
                  <a
                    className="text-blue-600 hover:underline"
                    href="https://tc.computer.org/vgtc/publications/conference/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    VGTC short paper format
                  </a>
                  , be no more than two pages excluding references, describe
                  how the agent was developed, and include a link to its best
                  generated visual report.
                </li>
                <li>
                  Final judging will consider both the technical report and the
                  visual report generated by the agent on the testing dataset.
                </li>
              </ul>
              <p className="mt-4 font-semibold italic text-gray-800">
                See the{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="https://visagent.org/guides"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  challenge submission guide
                </a>{" "}
                for datasets, templates, and submission instructions.
              </p>
            </div>
          </div>

          <p className="text-gray-700 mt-6">
            Each submission will be evaluated by at least two reviewers based
            on quality and topical relevance. Accepted papers will be invited
            for presentation as posters, demos, or lightning talks during the
            workshop and will be published on the workshop website. Top-rated
            challenge participants will receive awards and be invited to
            present their solutions at the workshop.
          </p>
        </section>

        <section className="section" id="important-dates">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Important Dates
          </h2>
          <ul className="space-y-1">
            <li className="text-gray-700">
              <span className="font-medium">Call for Participation:</span> May 30, 2026
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Submission Deadline:</span> Aug 15, 2026
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Author Notification:</span> Sep 10, 2026
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Camera Ready Deadline:</span> Oct 1, 2026
            </li>
            <li className="text-gray-700">
              <span className="font-medium">November 9, 2026:</span> Workshop Day
            </li>
          </ul>
        </section>

        <section className="section" id="program">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Schedule and Keynote Speakers</h2>
          <p className="text-gray-700 mb-4">
            TBD.
          </p>
        </section>

        <section className="section" id="organizers">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Organizers
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            {organizers.map((org) => (
              <li
                key={org.name}
                className="flex flex-col sm:flex-row sm:space-x-4"
              >
                <span>{org.name}</span>
                <span className="text-gray-500">{org.affiliation}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="contact">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
          <p className="text-gray-700">
            For questions, contact{" "}
            <a
              className="font-medium text-blue-600 underline"
              href="mailto:visxgenai@ieeevis.org"
            >
              visxgenai@ieeevis.org
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}

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

        <section className="section" id="topics">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Topics of Interest
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Visual analytics for generative and foundation models</li>
            <li>Human-agent collaboration in data analysis and visualization</li>
            <li>Evaluation methods for agent-generated visual artifacts</li>
            <li>Interactive systems for explaining, steering, and debugging AI</li>
            <li>Visualization authoring workflows augmented by GenAI</li>
            <li>Responsible, transparent, and trustworthy AI-mediated analysis</li>
          </ul>
        </section>

        <section className="section" id="important-dates">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Important Dates
          </h2>
          <ul className="space-y-1">
            <li className="text-gray-700">
              <span className="font-medium">Call for Participation:</span> TBA
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Submission Deadline:</span> TBA
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Author Notification:</span> TBA
            </li>
            <li className="text-gray-700">
              <span className="font-medium">Camera Ready Deadline:</span> TBA
            </li>
            <li className="text-gray-700">
              <span className="font-medium">November 9, 2026:</span> Workshop Day
            </li>
          </ul>
        </section>

        <section className="section" id="program">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Program</h2>
          <p className="text-gray-700 mb-4">
            The 2026 program is under development. Expected formats include
            invited talks, paper or position presentations, demos, and
            discussion sessions around the role of agents in visualization
            research and practice.
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

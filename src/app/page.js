import Dates from "./sections/Dates";
import Intro from "./sections/Intro";
import CFP from "./sections/CFP";
import PC from "./sections/PC";
import Organizers from "./sections/Organizers";
import Vision from "./sections/Vision";
import Schedule from "./sections/Schedule";
export default function AIVisualizationWorkshop() {
  // Example visualization articles with their corresponding letters
  const exampleArticles = [
    {
      id: "a",
      title: "A Visual Exploration of Gaussian Processes",
      authors: "Görtler, Kehlbeck, and Deussen",
      year: "2018",
      link: "https://distill.pub/2019/visual-exploration-gaussian-processes/",
    },
    {
      id: "b",
      title: "What Makes Language Models Learned?",
      authors: "Adam Pearce",
      year: "2021",
      link: "#",
    },
    {
      id: "c",
      title: "What if we Reduce the Memory of an Artificial Doom Player?",
      authors: "Jaunet, Vuillemot, and Wolf",
      year: "2019",
      link: "#",
    },
    {
      id: "d",
      title: "K-Means Clustering: An Explorable Explainer",
      authors: "Yi Zhe Ang",
      year: "2022",
      link: "#",
    },
    {
      id: "e",
      title: "Comparing DNNs with UMAP Tour",
      authors: "Li and Scheidegger",
      year: "2020",
      link: "#",
    },
    {
      id: "f",
      title: "Can Large Language Models Explain Their Internal Mechanisms?",
      authors: "Hussein, Ghandeharioun, Mullins, Reif, Wilson, Thain, Dixon",
      year: "2024",
      link: "#",
    },
    {
      id: "g",
      title: "FormaFluens Data Experiment",
      authors: "Strobelt, Phibbs, and Martino",
      year: "",
      link: "#",
    },
    {
      id: "h",
      title: "The Beginner's Guide to Dimensionality Reduction",
      authors: "Conlen and Hohman",
      year: "2018",
      link: "#",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-2 font-lato">
      {/* Header with logo */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl text-gray-800">
          1<sup>st</sup> Workshop on
          <br />
          GenAI, Agents and the future of VIS
        </h1>
        <div className="text-purple-500">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path
              d="M15 10L45 50"
              stroke="#FF6B6B"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M45 10L15 50"
              stroke="#6B66FF"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </header>

      {/* Date and Location */}
      <div className="mb-6 text-gray-700">
        <p className="text-xl">
          November x, 2025 at IEEE VIS in Vienna, Austria
        </p>
      </div>

      {/* Introduction */}
      <Intro />
      {/* <section className="mb-8">
        <p className="text-gray-700 mb-4">
          The rapid evolution of generative AI and intelligent agents is
          transforming how we interact with, understand, and visualize data. As
          these technologies continue to advance, we stand at the frontier of
          new visualization paradigms that will shape the future of the VIS
          community.
        </p>
        <p className="text-gray-700 mb-4">
          VISxGenAI brings together researchers, practitioners, and innovators
          exploring the intersection of generative AI, autonomous agents, and
          visualization. Our workshop aims to address critical questions: How
          can visualization techniques evolve to collaborate with AI systems?
          What novel interfaces will emerge in agent-augmented analytics? How
          might generative AI reshape visualization authoring and consumption?
        </p>
      </section> */}

      {/* Example Articles */}
      <section className="mb-8">
        <p className="text-gray-700 mb-4">
          Example interactive visualization articles that explain general
          concepts and communicate experimental insights when playing with AI
          models:
        </p>
        <ul className="space-y-2">
          {exampleArticles.map((article) => (
            <li key={article.id} className="text-gray-700">
              ({article.id}){" "}
              <a href={article.link} className="text-green-600 hover:underline">
                {article.title}
              </a>{" "}
              by {article.authors}
              {article.year && <span> ({article.year})</span>}
            </li>
          ))}
        </ul>
      </section>

      {/* Important Dates */}
      <Dates />
      {/* <section className="mb-8" id="important-dates">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Important Dates
        </h2>
        <ul className="space-y-2">
          <li className="text-gray-700">
            July 30, 2025, anywhere: Submission Deadline
          </li>
          <li className="text-gray-700">
            September 1, 2025: Author Notification
          </li>
          <li className="text-gray-700">
            October 1, 2025: Camera Ready Deadline
          </li>
        </ul>
      </section> */}

      {/* <Vision /> */}
      <CFP />
      {/* Program Overview */}
      <PC />
      <Schedule />
      <Organizers />
      {/* <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Program Overview
        </h2>
        <p className="text-gray-700">Coming soon!</p>
      </section> */}
    </div>
  );
}

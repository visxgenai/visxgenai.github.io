import Dates from "./sections/Dates";
import Intro from "./sections/Intro";
import CFP from "./sections/CFP";
import PC from "./sections/PC";
import Organizers from "./sections/Organizers";
import Vision from "./sections/Vision";
import Schedule from "./sections/Schedule";
import Home from "./sections/Home";
import Challenge from "./sections/Challenge";
import CallForParticipants from "./sections/CallForParticipants";
import Contact from "./sections/Contact";
import Speakers from "./sections/Speakers";
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
    <div className="max-w-6xl mx-auto px-4 py-2 font-lato">
      <Intro />
      <CallForParticipants />
      <Dates />
      <Speakers />
      <Schedule />
      <Organizers />

      <section className="section" id="sponsor">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Sponsor</h2>
          Our workshop is sponsored by Amazon.
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
            alt="AWS"
            className="w-1/5 h-1/5 object-cover mt-8"
          />
      </section>

      <Contact />
    </div>
  );
}

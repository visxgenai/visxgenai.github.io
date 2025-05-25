export default function Intro() {
    return (
        <section className="section" id="about">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About the Workshop</h1>
        <p className="text-gray-700 mb-4">
          {/* The rapid evolution of generative AI and intelligent agents is
          transforming how we interact with, understand, and visualize data. As
          these technologies continue to advance, we stand at the frontier of
          new visualization paradigms that will shape the future of the VIS
          community. */}
          Generative AI (GenAI) is transforming the landscape of artificial intelligence, 
          not just in scale but in kind. Unlike traditional AI, GenAI introduces unique challenges 
          around interpretability, as its tens of billions of parameters and emergent behaviors demand new ways to understand, 
           debug, and visualize model internals. At the same time, GenAI enables agentic systems—goal-driven, 
           autonomous agents that can reason, act, and adapt across complex tasks, raising a critical question: 
           Will AI agents eventually replace human data scientists, and if not, how might they best collaborate?
        </p>
        <p className="text-gray-700 mb-4">
          VIS x GenAI Workshop brings together researchers, practitioners, and innovators
          exploring the intersection of generative AI, autonomous agents, and
          visualization. 
          We focus on new challenges and opportunities, 
          including <b>interpreting and visualizing large-scale foundation models</b>,  
          <b> designing visual tools both for and with agents</b>, and <b>rethinking evaluation, education, and 
          human–AI collaboration in the age of generative intelligence</b>. 
          Our workshop aims to address critical questions: How
          can visualization techniques evolve to collaborate with AI systems?
          What novel interfaces will emerge in agent-augmented analytics? How
          might generative AI reshape visualization authoring and consumption?
        </p>
      </section>
    );
}
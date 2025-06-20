export default function Challenge() {

  return (
    <section className="section" id="challenge">

      {/* <h2 className="text-2xl mb-4 font-bold">TrackB: Mini-Challenge</h2> */}
      <p className="mb-4">
        Inspired by challenges like ImageNet in computer vision and HELM in
        language models, our mini-challenge invites participants to build or
        adapt AI agents that can <b>automatically analyze datasets and generate
        visual data reports</b>.
      </p>

      <p className="mb-4">
        The goal is to benchmark and accelerate progress in agent-based data analysis and communication. We will provide a starter kit and an evaluation setup to support participants. During the testing period, you will be able to iteratively improve your agents by submitting them to the evaluation server. Afterward, you will submit the report generated by your best-performing agent and a technical report (up to 2 pages) describing how the agent was developed to the PCS system by the submission deadline.
      </p>
      
      <p className="mb-4">
        More details, including datasets, templates, and submission instructions, will be released in June!
      </p>
      <p className="font-semibold italic">Stay tuned!</p>
      <img src="/challenge-bg.png" alt="Challenge" className="w-full h-70 object-contain" />
    </section>
  );
}


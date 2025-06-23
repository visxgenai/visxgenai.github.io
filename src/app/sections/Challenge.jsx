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
        The goal is to benchmark and accelerate progress in agent-based data analysis and communication. We will provide a starter kit and an evaluation server to support participants. 
        During the testing period, you will be able to iteratively improve your agents by submitting them to the evaluation server. 
        By the submission deadline, you will submit a technical report (up to 2 pages via the PCS system) that 
        1) describes how your best-performing agent was developed and 2) includes a link to its best generated report.
      </p>
      
      <p className="mb-4">
        Winning teams will receive $ thousands in cloud credits (sponsor to be announced), award certificates, and an invitation to present at the workshop.
        More details, including datasets, templates, and submission instructions, can be found: <a href="https://www.visagent.org">visagent.org</a>
      </p>

      <img src="/challenge-bg.png" alt="Challenge" className="w-full h-70 object-contain" />
    </section>
  );
}


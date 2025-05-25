export default function Challenge() {
    return (
        <section className="section" id="challenge">
            
          <h2 className="text-2xl mb-4 font-bold">Mini-Challenge</h2>
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
          <img src="/challenge-bg.png" alt="Challenge" className="w-full h-96 object-contain" />
          <p className="font-semibold italic">Stay tuned!</p>
        </section>
    );
}
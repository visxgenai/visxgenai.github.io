export default function Submit() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-2 font-lato">
      <h1 className="text-4xl  text-gray-800 mb-6">Submit Your Work</h1>

      {/* Submission Guidelines Section */}
      <section className="mb-8">
        <h2 className="text-2xl mb-4">Submission Guidelines</h2>
        <p className="mb-6">
          We invite participation through two submission tracks: short paper and
          mini-challenge. Both are opportunities to showcase novel ideas and
          engage with the growing community at the intersection of
          visualization, generative AI, and agentic systems. an be up to four
          pages plus up to one page of references. Submissions will be in the
          VGTC conference two-column format, in line with the IEEE VIS
          formatting guidelines. Short Papers should eb double-blind
          (anonymized) submissions. Double-blind submissions must NOT include
          author names or institutions on the cover page of the initial
          submission, and authors should make an effort to ensure that there is
          no revealing information in the text, such as apparent citations to
          authors’ previous work, or making acknowledgments to colleagues of
          long standing.
        </p>

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

      {/* Download Button */}
      <div className="mt-6">
        <a
          href="https://tc.computer.org/vgtc/publications/conference/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Go to template
          </button>
        </a>
      </div>
    </div>
  );
}

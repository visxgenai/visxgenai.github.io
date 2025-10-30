export default function Challenge() {

  return (
    <section id="challenge">

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
        By the submission deadline, you will submit a technical report (<a href="https://tc.computer.org/vgtc/publications/conference/" target="_blank" className="hover:underline" style={{color: 'steelblue'}}>VGTC short paper format</a>, up to 2 pages via the PCS system) that 
        1) describes how your best-performing agent was developed and 2) includes a link to its best generated report.
      </p>
      
      <p className="mb-4">
        Winning teams will receive cloud credits (sponsored by Amazon), 
        award certificates, and an invitation to present at the workshop:
      </p>

{/* <div className="grid gap-4 sm:grid-cols-3 mb-6 text-center text-gray-700">
  <div className="flex flex-col items-center p-4 rounded-md border border-gray-300">
    <span className="text-2xl" role="img" aria-label="gold medal">🥇</span>
    <h3 className="mt-1 font-semibold">1&nbsp;st&nbsp;Place</h3>
    <p className="text-xl font-medium mt-1">$3,000</p>
    <p className="text-sm">in AWS cloud credits</p>
  </div>

  <div className="flex flex-col items-center p-4 rounded-md border border-gray-300">
    <span className="text-2xl" role="img" aria-label="silver medal">🥈</span>
    <h3 className="mt-1 font-semibold">Runner-up</h3>
    <p className="text-xl font-medium mt-1">$1,500</p>
    <p className="text-sm">in AWS cloud credits</p>
  </div>

  <div className="flex flex-col items-center p-4 rounded-md border border-gray-300">
    <span className="text-2xl" role="img" aria-label="bronze medal">🏅</span>
    <h3 className="mt-1 font-semibold text-center">Honorable&nbsp;Mention<br />
      <span className="text-xs font-normal">(3 teams)</span>
    </h3>
    <p className="text-xl font-medium mt-1">$500&nbsp;each</p>
    <p className="text-sm">in AWS cloud credits</p>
  </div>
</div> */}

{/* ---- Prize info (compact style) ---- */}

<div className="grid gap-3 sm:grid-cols-3 mb-5 text-center text-gray-700">
  {/* 1 st Place */}
  <div className="flex flex-col items-center p-3 rounded-md border border-gray-300">
    
    <h3 className="mt-1 text-sm font-semibold"><span className="text-xl" role="img" aria-label="gold medal">🥇</span> 1&nbsp;st&nbsp;Place <br /> <span className="text-[10px] font-normal">(x1 team)</span></h3>
    <p className="text-lg font-medium mt-1">$3,000</p>
    <p className="text-xs">in AWS cloud credits</p>
  </div>

  {/* Runner-up */}
  {/* <div className="flex flex-col items-center p-3 rounded-md border border-gray-300"> */}
  <div className="flex-shrink-0 basis-56 flex flex-col items-center p-3 rounded-md border border-gray-300">
    
    <h3 className="mt-1 text-sm font-semibold"><span className="text-xl" role="img" aria-label="silver medal">🥈</span> Runner-up <br /> <span className="text-[10px] font-normal">(x1 team)</span> </h3>
    <p className="text-lg font-medium mt-1">$1,500</p>
    <p className="text-xs">in AWS cloud credits</p>
  </div>


  {/* Honorable Mentions */}
  <div className="flex flex-col items-center p-3 rounded-md border border-gray-300">
    <h3 className="mt-1 text-sm font-semibold text-center">
      <span className="text-xl" role="img" aria-label="bronze medal">🎖</span> Honorable Mention <span className="text-[10px] font-normal">(x3 teams)</span>
    </h3>
    <p className="text-lg font-medium mt-1">$500&nbsp;<span className="text-[12px] font-normal">each</span></p>
    <p className="text-xs">in AWS cloud credits</p>
  </div>
</div>
{/* ---- /Prize info ---- */}

      <p >
        More details, including datasets, templates, and submission instructions, can be found: <a className="font-semibold italic" style={{color: 'steelblue'}} 
        // href="https://www.visagent.org" 
        href="https://amplify.dvsuyr25l38y1.amplifyapp.com"
        target="_blank">visagent.org
        </a>

      <img src="/challenge-bg.png" alt="Challenge" className="w-full object-contain" style={{paddingTop: '20px'}} />
      </p>

    </section>
  );
}


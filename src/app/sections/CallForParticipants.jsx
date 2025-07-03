import Challenge from "./Challenge";
import CFP from "./CFP";
export default function CallForParticipants() {
   return (
      <section className="section" id="cfp">
         <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Call for Participants
         </h1>

         <p className="mb-2">
            We invite participation through two submission tracks:{" "}
            <span className="font-semibold">Short Paper</span> and{" "}
            <span className="font-semibold">Mini-Challenge</span>. Both are
            opportunities to showcase novel ideas and engage with the growing
            community at the intersection of visualization, generative AI, and
            agentic systems.
         </p>
         <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="w-full md:w-1/2">
               <div className="group bg-white rounded-2xl shadow-lg p-6 
                              hover:shadow-xl hover:bg-slate-50 
                              transition duration-100">
                  <h2 className="text-2xl mb-4 font-bold 
                                 group-hover:text-slate-600 
                                 transition-colors duration-100">
                     Track A: Short Paper
                  </h2>
                  <CFP />
               </div>
            </div>
            <div className="w-full md:w-1/2">
               <div className="group bg-white rounded-2xl shadow-lg p-6 
                              hover:shadow-xl hover:bg-slate-50 
                              transition duration-100">
                  <h2 className="text-2xl mb-4 font-bold 
                                 group-hover:text-slate-600 
                                 transition-colors duration-100">
                     Track B: Mini-Challenge
                  </h2>
                  <Challenge />
               </div>
            </div>
         </div>

         <p>
            Submissions—including both papers and challenge reports—must be anonymous and submitted through the PCS system. 
            Each submission will be evaluated by at least two reviewers based on quality and topical relevance. 
            Accepted papers will be invited to present as posters, demos, or lightning talks during the workshop, and will be published on the workshop website. 
            Top-rated challenge participants will receive awards and be invited to present their solutions at the workshop.
            Please join the{" "}
              <a
                href="https://discord.gg/MqVn2df5Us"
                className= "bg-purple-100 py-1 px-2 rounded-sm hover:bg-purple-200 text-sm text-purple-500 hover:text-purple-700"
              >
               Discord
              </a>{" "}
              for any questions and discussions.
         </p>
      </section>
   );
}

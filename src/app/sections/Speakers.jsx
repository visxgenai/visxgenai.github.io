import React from 'react';

const speakers = [
    
    {
        name: 'Taimur Rashid',
        image: '/Rashid.png',
        href: 'https://www.linkedin.com/in/taimurrashid/',
        bio: `Taimur is an accomplished product and business executive with 20+ years at the intersection of technology, product, and go-to-market strategy. He currently serves as Managing Director of AWS's Generative AI Innovation & Delivery organization, a multi disciplinary team of AI scientists, strategists, and engineers that help organizations worldwide build and adopt end-to-end generative AI and agentic AI solutions. 

Prior to re-joining AWS, Taimur served as Executive Vice President of AI at Redis, where he built the AI/ML business from the ground up, leading product strategy, product development, and market introduction, while also contributing to Redis IPO readiness through strategic projects. He also founded Recursion Venture Capital, a boutique venture capital and management consulting firm, wherein he formalized 5+ of angel investing into being a micro-VC, and over a decade worth of GTM experience into a management consulting practice. At Microsoft, as GM and Head of Customer Success and Customer Engineering for Azure Data and AI, he built a top-tier organization focused on helping enterprise organizations with cloud migration, data modernization, and digital transformation for Azure Data & AI.

Taimur is a University of Texas at Austin alumnus with a focus on automata theory and knowledge-based systems. He lives in Bellevue, WA, stays active, paints, coaches youth basketball, and supports local nonprofits.
`,
    },
    {
        name: 'Andreas Holzinger',
        image: '/Holzinger.png',
        href: 'https://www.aholzinger.at/',
        bio: `Andreas Holzinger pioneered in interactive machine learning with the human-in-the-loop promoting robustness and explainability to foster trustworthy AI. He advocates a synergistic approach of Human-Centered AI (HCAI) to put the human in-control of AI, aligning artificial intelligence with human intelligence, social values, ethical principles, and legal requirements to ensure secure, safe and controllable AI.
                
        Andreas was elected a member of Academia Europaea in 2019, the European Academy of Science, of the European Laboratory for Learning and Intelligent Systems (ELLIS) in 2020, and Fellow of the international federation of information processing (ifip) in 2021.  
        He obtained his Ph.D. from Graz University in 1998, and his Habilitation from Graz University of Technology in 2003. 
        Andreas was Visiting Professor in Verona (Italy), RWTH Aachen (Germany), the UCL (UK), and the University of Alberta (Canada). Since 2021 he is endowed chair for digital transformation in smart farm and forest operations at the Department of Ecosystem Management, Climate and Biodiversity at BOKU University Vienna, and is head of the HCAI Lab Vienna. Andreas serves as consultant for the Canadian, US, UK, Swiss, French, Italian and Dutch governments, the German Excellence Initiative, and as national expert in the European Commission. He is also on the advisory board of the German  Government's AI strategy, AI made in Germany 2030.
        
        Outside the lab, Andreas keeps fit by practicing Shotokan Karate (1st Dan).`
    }
];

export default function Speakers() {
    return (
      <section id="speakers" className="section">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Keynote Speakers</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="flex min-w-0 flex-col items-center">
              <figure className="flex w-full max-w-[28rem] flex-col items-center justify-start text-center mx-auto">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full max-w-xs aspect-square object-cover rounded-lg mb-4"
                />
                <figcaption className="w-full">
                  <h3 className="text-lg font-semibold text-center">
                    {speaker.href ? (
                      <a
                        href={speaker.href}
                        className="hover:underline"
                        style={{ color: '#407498', textDecoration: 'underline' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {speaker.name}
                      </a>
                    ) : (
                      speaker.name
                    )}
                  </h3>
                </figcaption>
              </figure>
  
              <div className="w-full max-w-[32rem] mt-2 min-w-0">
                {speaker.bio
                  .split(/\n\s*\n/)
                  .map((para, pIdx) => (
                    <p key={pIdx} className="text-sm text-gray-600 text-justify mb-2">
                      {para.split('**').map((part, idx) =>
                        idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part
                      )}
                    </p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
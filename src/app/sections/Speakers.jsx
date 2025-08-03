import React from 'react';

const speakers = [
    {
        name: 'Prof. Andreas Holzinger',
        image: '/Holzinger.png',
        href: 'https://www.aholzinger.at/',
        bio: `Prof. Holzinger is **Endowed Chair for Digital Transformation in Smart Farm & Forest Operations at BOKU University Vienna** and **Head of the Human-Centered AI Lab**. He pioneered interactive machine learning with the human-in-the-loop, advancing robustness and explainability in AI systems. For these contributions he became **member of Academia Europaea** (2019), **ELLIS fellow** (2020), and **IFIP Fellow** (2021). 
        
        Holzinger previously served as Visiting Professor for explainable AI at the University of Alberta's xAI Lab and held posts at Verona, RWTH Aachen, and UCL. He consults the Canadian, U.S., U.K., Swiss, French, Italian, and Dutch governments and advises the EU and Germany's "AI made in Germany 2030" strategy. 
        He co-leads EU flagship projects on trustworthy, sustainable AI,
        and his current research pushes multi-objective counterfactual explanations to accelerate Forestry 5.0, climate resilience, and health applications.
        
        Outside the lab, Holzinger is an avid soccer enthusiast, enjoys ballroom dancing, and keeps fit practicing Shotokan karate (7 th Kyu).
        `
    },
    {
        name: 'Mr. Taimur Rashid',
        image: '/Rashid.png',
        href: 'https://www.linkedin.com/in/taimurrashid/',
        bio: `Taimur is an accomplished product and business executive with 20+ years at the intersection of technology, product, and go-to-market strategy. He currently is **the head of  AWS's Generative AI Innovation & Delivery organization**, helping global enterprises build end-to-end GenAI solutions.

        Previously, he was **Executive Vice President of AI at Redis**, where he built the company's AI/ML business and advanced IPO-readiness. He also became **Founding Partner of Recursion Venture Capital**, extending a decade of angel investing into a formal micro-VC.
        Earlier, as GM & Head of Worldwide Customer Success for Microsoft Azure Data & AI, he led global teams that migrated and modernized Fortune-500.
        During his first tenure at AWS he led product-marketing and GTM specialist units, helping push AWS past a $25 billion run rate and winning customers like Adobe and Netflix.

        Taimur is a University of Texas at Austin alumnus with a focus on automata theory and knowledge-based systems. He lives in Bellevue, WA, stays active, paints, coaches youth basketball, and supports local nonprofits.`,
    },
];

export default function Speakers() {
    return (
        <section id="speakers" className="section">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Keynote Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {speakers.map((speaker) => (
                    <div key={speaker.name} className="flex flex-col items-center">
                        <figure className="flex flex-col items-center justify-start text-center mx-auto">
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="w-64 h-64 object-cover rounded-lg mb-4"
                                style={{ aspectRatio: '1/1' }}
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
                        <div className="w-128 mt-2">
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
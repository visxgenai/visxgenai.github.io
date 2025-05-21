export default function Home() {
    return (
      <section id="home" className="mb-5">
        {/* container must be relative so its children can overlap */}
        <div className="relative rounded-lg overflow-hidden h-[500px]">
          {/* Background image layer */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/visxgenai.png')",
              backgroundBlendMode: 'overlay',
              backgroundColor: 'rgb(255, 255, 255)',
            }}
          >
            <div className="absolute inset-0 bg-black/2" />
          </div>
  
          {/* Text layer */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-black">
            <header className="flex justify-center items-center w-full mb-10">
              <h1
                className="font-bold text-gray-800"
                style={{ fontSize: `clamp(1.25rem, 4vw, 3rem)` }}
              >
                1<sup>st</sup> Workshop on
                <br />
                GenAI, Agents and the Future of VIS
              </h1>
              <div className="text-purple-300 ml-4">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path
                    d="M15 10L45 50"
                    stroke="#FF6B6B"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M45 10L15 50"
                    stroke="#6B66FF"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </header>
            <p
              className="text-xl text-center"
              style={{ fontSize: `clamp(0.5rem, 5vw, 1.2rem)` }}
            >
              IEEE VIS'2025 | November, 2025 | Vienna, Austria
            </p>
          </div>
        </div>
      </section>
    )
  }
  
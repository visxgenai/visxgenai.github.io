export default function Home() {
    return (
      <section id="home" className="mb-5">
        {/* Relative container for background and foreground layers */}
        <div className="relative rounded-lg overflow-hidden h-[500px]">
          {/* Background image layer (absolute, fills entire container) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/bg.png"
              alt="Challenge"
              className="w-full h-full object-cover"
            />
            {/* Optional dark overlay */}
            <div className="absolute inset-0 bg-white/65" />
          </div>
  
        {/* Content layer above image */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-black">
          <header className="flex flex-col items-center mb-10">
            {/* Title row */}
            <div className="flex items-center mb-4">
              <h1
                className="font-bold text-gray-800"
                style={{ fontSize: `clamp(1.25rem, 4vw, 3rem)` }}
              >
                <div className="flex items-center justify-between">
                  <p>
                    1<sup>st</sup> Workshop on
                  </p>
                  <img
                    src="/new_icon.png"
                    alt="Logo"
                    className="ml-4 mb-1"
                    style={{
                      width: `clamp(1.5rem, 5.5vw, 4.5rem)`,
                      height: `clamp(1.5rem, 5.5vw, 4.5rem)`,
                    }}
                  />
                </div>
                GenAI, Agents and the Future of VIS
              </h1>
              {/* <div className="text-purple-300 ml-4">
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
            </div> */}
            </div>

            {/* Subtitle with date and location */}
            <p
              className="text-xl"
              style={{ fontSize: `clamp(0.8rem, 2vw, 1.2rem)` }}
            >
                IEEE VIS 2025 <span className="ml-2 mr-2">|</span> November 2025
                <span className="ml-2 mr-2">|</span> Vienna, Austria
              </p>
          </header>
        </div>
      </div>
    </section>
  );
}

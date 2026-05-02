export default function Home() {
  return (
    <section id="home" className="mb-5">
      {/* Relative container for background and foreground layers */}
      <div className="relative rounded-lg overflow-hidden h-[500px]">
        {/* Background image layer (absolute, fills entire container) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/bg-v-2.png"
            alt="Workshop background"
            className="w-full h-full object-cover"
          />
          {/* Optional white overlay */}
          <div className="absolute inset-0 bg-white/50" />
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
                    2<sup>nd</sup> Workshop on
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
                GenAI, Agents, and the Future of VIS
              </h1>
            </div>

            {/* Subtitle with date and location */}
            <p
              className="text-xl"
              style={{ fontSize: `clamp(0.8rem, 2vw, 1.2rem)` }}
            >
              IEEE VIS 2026 <span className="ml-2 mr-2">|</span> November 9, 2026
              <span className="ml-2 mr-2">|</span> Boston, MA
            </p>
          </header>
        </div>
      </div>
    </section>
  );
}

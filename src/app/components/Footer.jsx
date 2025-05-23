import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#DAEAF5]">
      <div className="container mx-auto p-8 text-center">
        <p className="text-gray-800">
          © 2025-2026{" "}
          <b>IEEE VIS GenAI, Agents and the Future of VIS Workshop</b>. All
          Rights Reserved.
        </p>
      </div>

      {/* <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-16">
            <span className="text-gray-800 text-xl">Logo1</span>
            <span className="text-gray-800 text-xl">Logo2</span>
          </div>
          <div className="flex space-x-16">
            <span className="text-gray-800 text-xl">Logo3</span>
            <span className="text-gray-800 text-xl">Logo4</span>
            <span className="text-gray-800 text-xl">Logo5</span>
          </div>
        </div>
      </div> */}
    </footer>
  );
}

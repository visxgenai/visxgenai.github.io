import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#e0e8f5] border-t border-[#c1d1ea] py-4">
      <div className="container mx-auto px-4">
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
      </div>
    </footer>
  );
}
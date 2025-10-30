import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "1st VISxGenAI Workshop at IEEE VIS 2025",
  description:
    "Workshop on GenAI, Agents, and the Future of VIS",
  icons: {
    icon: "/fav.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="flex flex-col min-h-screen bg-[#fff]">
          <div className="fixed top-0 left-0 right-0 z-50 bg-white">
            <ResponsiveNavbar />
          </div>
          <Home />
          <main className="flex-grow container mx-auto px-4 py-2 mt-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

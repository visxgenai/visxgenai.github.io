import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VISxGenAI Workshop at IEEE VIS 2026",
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
          <ResponsiveNavbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

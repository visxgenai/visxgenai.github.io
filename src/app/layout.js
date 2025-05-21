import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VISxGenAI",
  description:
    "Workshop on Explainable Visualizations focusing on AI techniques",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <ResponsiveNavbar />
          <main className="flex-grow container mx-auto px-4 py-2 mt-1">
            {children}
          </main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}

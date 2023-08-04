import Navbar from "@/components/Navbar";
import "../css/globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: 'Anangs | %s',
    default: 'Anangs'
  },
  description: "Anangs Porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} overflow-x-hidden`}>
        <Navbar />
        <div className="dark:bg-[#000000] dark:text-white ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

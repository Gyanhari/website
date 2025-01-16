import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Commerce App",
  description: "E-commerce app made using nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <div className="flex flex-col w-screen h-screen">
          <div className="flex-shrink-0">
            <Header />
          </div>
          <div className="flex-grow">{children}</div>
          <ToastContainer />
          <div className="flex-shrink-0">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

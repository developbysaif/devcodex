import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatBot from "@/components/AIChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevCodex | Transforming Ideas Into Powerful Digital Solutions",
  description: "DevCodex is a leading digital agency specializing in modern websites, scalable applications, and cloud solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-white`}>
        <Header />
        {children}
        <Footer />
        <AIChatBot />
      </body>
    </html>
  );
}

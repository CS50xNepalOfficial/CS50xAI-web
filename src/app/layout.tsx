import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/app/navbar";
import Footer from "./footer/page";
const poppins = Poppins({ weight: "300", subsets: [] });


export const metadata: Metadata = {
  title: "CS50xNepal",
  description: "CS50xNepal is a community of students who are passionate about computer science and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

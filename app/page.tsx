"use client";

import { About } from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

import { SocialNavbar } from "@/components/SocialNavbar";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen overflow-hidden bg-black">
      <Hero />
      <SocialNavbar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

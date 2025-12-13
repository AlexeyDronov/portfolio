"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import RecentWork from "./components/RecentWork";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <Hero />
      <About />
      <RecentWork />
      <Contact />
    </main>
  );
}

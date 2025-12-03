import Pattern from "./components/UI/Background";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";

export default function Home() {
  return (
    /* This is the main "canvas" */
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center font-sans">
      <Pattern />
      {/* Child inside the main wrapper */}
      <main className="flex w-full max-w-3xl flex-col px-6 md:px-12 py-12 gap-24">
        <Hero />
        <About />
      </main>
    </div>
  );
}
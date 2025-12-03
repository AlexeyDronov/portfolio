import Pattern from "./components/UI/Background";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";

export default function Home() {
  return (
    /* This is the main "canvas" */
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center font-sans"> 
      <Pattern />
      {/* Child inside the main wrapper */}
      <main className="flex w-full max-w-3xl items-center flex-col px-42 pb-5">
        <section>
          <Hero />
          <About />
        </section>

        <section>
          
        </section>
      </main>
    </div>
  );
}
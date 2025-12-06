import React from "react";
import { ArrowDown } from "lucide-react";

// Hero section component
// Displays the main greeting/title
export default function Hero() {
    return (
        <section className="flex w-full flex-col items-center justify-center gap-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 text-center py-8">
            <h1 className="text-4xl md:text-6xl font-mono text-white tracking-tight">
                Hi, I'm Alexey.
            </h1>
            <h3 className="text-2xl md:text-4xl font-mono text-gray-500 tracking-tight">
                Tempor Lorem aute ad. Elit exercitation ex esse fugiat reprehenderit aute id culpa excepteur quis. Consectetur veniam nulla cillum in culpa magna ea sit esse.
            </h3>
            {/* Scroll Down Button - Designed to be replaceable */}
            <button
                onClick={() => {
                    const nextSection = document.getElementById("projects"); // or whatever is next
                    if (nextSection) {
                        nextSection.scrollIntoView({ behavior: "smooth" });
                    } else {
                        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
                    }
                }}
                className="mt-12 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all animate-bounce cursor-pointer group"
                aria-label="Scroll Down"
            >
                <ArrowDown className="text-white/60 group-hover:text-white transition-colors" size={24} />
            </button>
        </section>
    );
}
import React from "react";

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
        </section>
    );
}
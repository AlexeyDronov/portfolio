import React from "react";

// Hero section component
// Displays the main greeting/title
export default function Hero() {
    return (
        <section className="flex w-full flex-col items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 text-center py-8">
            <h1 className="text-3xl md:text-5xl font-mono text-white tracking-tight">
                Hi, I'm Alexey.
            </h1>
        </section>
    );
}
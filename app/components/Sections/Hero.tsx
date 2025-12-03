import React from "react";

export default function Hero() {
    return (
        <section className="flex w-full flex-col items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
                Alexey Dronov
            </h1>
            <h3 className="text-3xl md:text-4xl text-white/80 font-light">
                Graduate Data Scientist
            </h3>
        </section>
    );
}
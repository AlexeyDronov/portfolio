import React from "react";

export default function Hero() {
    return (
        <section className="flex flex-col items-center sm:items-start gap-4">
            <h1 className="text-6xl font-bold text-center text-black sm:text-left">
                Alexey Dronov
            </h1>
            <h3 className="text-4xl text-black">
                Graduate Data Scientist
            </h3>
        </section>
    );
}
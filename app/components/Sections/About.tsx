import React from "react";

export default function About() {
    return (
        <section className="flex w-full flex-col items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 text-left py-8">
            <p className="text-lg md:text-l text-gray-400 font-light">
                I'm an MSc Data Science graduate from the University of Edinburgh with a background in Mathematics. I'm looking for a Software Engineering or Data Science position
                and I bring Python, Scala, SQL, and Spark skills to the table. Have a look at my portfolio to learn more about my work.
            </p>
        </section>
    );
}
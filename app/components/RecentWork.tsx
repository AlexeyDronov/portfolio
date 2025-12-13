"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const PROJECTS = [
    {
        id: 1,
        title: "Neon Nexus",
        summary: "A cyberpunk-themed dashboard for managing decentralized identity nodes. Features real-time data visualization and cryptographic signing.",
        image: "bg-gradient-to-tr from-purple-900 to-slate-900", // Placeholder gradient
        link: "/projects/neon-nexus"
    },
    {
        id: 2,
        title: "Quantum Ledger",
        summary: "High-performance financial ledger system built with Rust and WebAssembly. Handles millions of transactions with sub-millisecond latency.",
        image: "bg-gradient-to-tr from-cyan-900 to-slate-900", // Placeholder gradient
        link: "/projects/quantum-ledger"
    },
    {
        id: 3,
        title: "Void Runner",
        summary: "Browser-based 3D runner game using Three.js and React Three Fiber. Implements procedural generation and post-processing effects.",
        image: "bg-gradient-to-tr from-pink-900 to-slate-900", // Placeholder gradient
        link: "/projects/void-runner"
    }
];

const BLOGS = [
    {
        id: 1,
        title: "The Future of Web Rendering",
        date: "Dec 12, 2024",
        summary: "Exploring the shift from hydration to resumability and what it means for the next generation of frameworks.",
        link: "/blog/future-of-web-rendering"
    },
    {
        id: 2,
        title: "Mastering Tailwind v4",
        date: "Nov 28, 2024",
        summary: "A deep dive into the new engine, CSS variables, and how to migrate your existing projects effectively.",
        link: "/blog/mastering-tailwind-v4"
    },
    {
        id: 3,
        title: "Building for the Edge",
        date: "Nov 15, 2024",
        summary: "Strategies for deploying globally distributed applications with minimal cold starts.",
        link: "/blog/building-for-edge"
    }
];

export default function RecentWork() {
    return (
        <section className="w-full max-w-[1200px] mx-auto min-h-screen py-24 px-4 flex flex-col gap-24">

            {/* SECTION HEADER */}
            <div>
                <h2 className="text-4xl font-bold mb-4 text-white">Recent Work</h2>
                <div className="w-24 h-1 bg-primary"></div>
            </div>

            {/* HIGHLIGHTED PROJECTS */}
            <div className="flex flex-col gap-24">
                {PROJECTS.map((project, index) => {
                    const isEven = index % 2 === 1; // 0=Odd(Left), 1=Even(Right) visually if 1-indexed. Here 0 is First.
                    // Request: "Alternating: Project 1 (image left, text right), Project 2 (text left, image right)"
                    // So Index 0: Image Left. Index 1: Image Right.

                    return (
                        <div key={project.id} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                            {/* IMAGE COLUMN */}
                            <div
                                className={`
                   w-full h-[200px] lg:h-[300px] rounded-[4px] overflow-hidden border border-slate-700 relative group cursor-pointer
                   ${isEven ? 'lg:order-2' : 'lg:order-1'}
                `}
                            >
                                {/* Gradient Placeholder for Image */}
                                <div className={`w-full h-full ${project.image} group-hover:scale-105 transition-transform duration-700`}></div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>

                                <Link href={project.link} className="absolute inset-0 z-10" />
                            </div>

                            {/* TEXT COLUMN (Spans 2 cols) */}
                            <div
                                className={`
                  lg:col-span-2 flex flex-col gap-4 
                  ${isEven ? 'lg:order-1 lg:text-right lg:items-end' : 'lg:order-2 lg:text-left lg:items-start'}
                `}
                            >
                                <h3 className="text-3xl font-bold text-primary group-hover:text-secondary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                                    {project.summary}
                                </p>
                                <Link
                                    href={project.link}
                                    className="inline-flex items-center gap-2 text-white border-b border-primary pb-1 hover:text-primary transition-colors mt-4"
                                >
                                    View Project <ArrowRight size={16} />
                                </Link>
                            </div>

                        </div>
                    );
                })}
            </div>

            {/* SEPARATOR */}
            <div className="w-full h-px bg-slate-800 my-8"></div>

            {/* BLOG CARDS */}
            <div>
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-white">Latest from the Blog</h3>
                    <Link href="/blog" className="text-text-dim hover:text-primary transition-colors flex items-center gap-2">
                        View All <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BLOGS.map((blog) => (
                        <Link
                            key={blog.id}
                            href={blog.link}
                            className="group border border-slate-700 bg-slate-900/30 p-6 rounded-[4px] hover:border-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 flex flex-col min-h-[200px] justify-between"
                        >
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {blog.title}
                                </h4>
                                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                    {blog.summary}
                                </p>
                            </div>
                            <span className="text-xs font-mono text-text-dim uppercase tracking-wider">
                                {blog.date}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

        </section>
    );
}

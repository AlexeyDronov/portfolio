import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllProjects, getAllBlogs } from "@/app/lib/dataUtils";

// Configuration: Adjust how many recent projects to display on home page
const MAX_RECENT_PROJECTS = 3;

export default function RecentWork() {
    const featuredProjects = getAllProjects().filter(p => p.featured);
    const recentProjects = featuredProjects.slice(0, MAX_RECENT_PROJECTS);

    const allBlogs = getAllBlogs();
    const recentBlogs = allBlogs.slice(0, 3);
    const missingBlogCount = Math.max(0, 3 - recentBlogs.length);

    return (
        <section className="w-full max-w-[1200px] mx-auto min-h-screen py-24 px-4 flex flex-col gap-24">

            {/* SECTION HEADER */}
            <div className="inline-flex flex-col gap-2">
                <h2 className="text-4xl font-bold text-white underline decoration-primary underline-offset-8">Recent Work</h2>
            </div>

            {/* HIGHLIGHTED PROJECTS */}
            <div className="flex flex-col gap-24">
                {recentProjects.map((project, index) => {
                    const isEven = index % 2 === 1; // 0=Odd(Left), 1=Even(Right) visually if 1-indexed. Here 0 is First.
                    // Request: "Alternating: Project 1 (image left, text right), Project 2 (text left, image right)"
                    // So Index 0: Image Left. Index 1: Image Right.

                    return (
                        <div key={project.slug} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                            {/* IMAGE COLUMN */}
                            <div
                                className={`
                   w-full h-[200px] lg:h-[300px] rounded-(--border-radius-sm) overflow-hidden border border-slate-700 relative group cursor-pointer
                   ${isEven ? 'lg:order-2' : 'lg:order-1'}
                `}
                            >
                                {/* Placeholder for actual image or fallbacks */}
                                <div className="w-full h-full bg-slate-800 flex items-center justify-center text-text-dim">
                                    {project.image ? (
                                        <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${project.image})` }} />
                                    ) : (
                                        <span>No Image</span>
                                    )}
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>

                                <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" />
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
                                    href={`/projects/${project.slug}`}
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
                    {recentBlogs.map((blog) => (
                        <Link
                            key={blog.slug}
                            href={`/blog/${blog.slug}`}
                            className="group border border-slate-700 bg-slate-900/30 p-6 rounded-(--border-radius-sm) hover:border-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 flex flex-col min-h-[200px] justify-between"
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

                    {/* Coming Soon Cards */}
                    {Array.from({ length: missingBlogCount }).map((_, i) => (
                        <div
                            key={`missing-${i}`}
                            className="border border-slate-800 bg-slate-900/30 backdrop-blur-md p-6 rounded-(--border-radius-sm) flex items-center justify-center min-h-[200px]"
                        >
                            <span className="text-text-dim italic">More content coming soon...</span>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

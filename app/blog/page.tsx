import React from "react";
import Link from "next/link";
import { getAllBlogs } from "@/app/lib/dataUtils";

export default function BlogPage() {
    const blogs = getAllBlogs();

    return (
        <main className="min-h-screen w-full max-w-[800px] mx-auto pt-32 pb-24 px-4">
            <header className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
                <p className="text-xl text-text-secondary">
                    Writing about technology, design, and the decentralized web.
                </p>
            </header>

            <div className="flex flex-col gap-8">
                {blogs.map((blog) => (
                    <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group">
                        <article className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8 p-4 -mx-4 rounded-(--border-radius-sm) transition-colors hover:bg-slate-900/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.05)]">
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {blog.title}
                                </h2>
                                <p className="text-text-secondary leading-relaxed">
                                    {blog.summary}
                                </p>
                            </div>
                            <div className="md:text-right shrink-0">
                                <span className="font-mono text-sm text-text-dim group-hover:text-text-secondary transition-colors block">
                                    {blog.date}
                                </span>
                                <span className="font-mono text-xs text-primary mt-1 inline-block border border-primary/20 px-2 py-0.5 rounded-(--border-radius-sm) bg-primary/5">
                                    {blog.topic}
                                </span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </main>
    );
}

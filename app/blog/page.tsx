import React from "react";
import { getAllPosts } from "../lib/blogUtils";
import BlogList from "../components/BlogList";
import Pattern from "../components/UI/Background";
import Link from "next/link";

export const metadata = {
    title: "Blog | Portfolio",
    description: "Thoughts, tutorials, and insights on web development and design.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="relative flex min-h-screen w-full flex-col font-sans text-white items-center">
            <Pattern />

            <main className="flex w-full max-w-4xl flex-col items-center px-6 md:px-12 py-12 z-10">
                <div className="w-full flex justify-between items-center mb-12">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors hover:underline underline-offset-4"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                            <path d="M19 12H5" />
                            <path d="M12 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                </div>

                <div className="w-full mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6 pb-2">
                        Blog
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl">
                        Thoughts, tutorials, and insights on web development, design, and technology.
                    </p>
                </div>

                <BlogList posts={posts} />
            </main>
        </div>
    );
}

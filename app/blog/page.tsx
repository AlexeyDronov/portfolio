import React, { Suspense } from "react";
import { getAllPosts } from "../lib/blogUtils";
import FilteredBlog from "../components/FilteredBlog";
import Pattern from "../components/UI/Background";
import Link from "next/link";
import BackButton from "../components/UI/BackButton";

// Metadata for the Blog page
export const metadata = {
    title: "Blog | Portfolio",
    description: "Thoughts, tutorials, and insights on web development and design.",
};

// This page displays the list of all blog posts.
export default function BlogPage() {
    // Fetch all blog posts
    const posts = getAllPosts();

    return (
        <div className="relative flex min-h-screen w-full flex-col font-sans text-white items-center">
            {/* Background pattern */}
            <Pattern />

            <main className="flex w-full max-w-4xl flex-col items-center px-6 md:px-12 py-12 z-10">
                {/* Navigation header with Back to Home link */}
                <div className="w-full flex justify-between items-center mb-12">
                    <BackButton fallbackRoute="/" label="Back to Home" />
                </div>

                {/* Page Title and Description */}
                <div className="w-full mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6 pb-2">
                        Blog
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl">
                        Thoughts, tutorials, and insights on web development, design, and technology.
                    </p>
                </div>

                {/* List of blog posts with filtering and sorting */}
                <Suspense fallback={<div className="text-white/40">Loading posts...</div>}>
                    <FilteredBlog posts={posts} />
                </Suspense>
            </main>
        </div>
    );
}

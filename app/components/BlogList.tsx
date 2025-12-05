"use client";

import React from "react";
import BlogCard from "./UI/BlogCard";
import { BlogPost } from "../lib/blogUtils";
import { motion } from "framer-motion";

interface BlogListProps {
    posts: BlogPost[]; // List of all blog posts
}

// BlogList component
// Displays a list of blog posts
export default function BlogList({ posts }: BlogListProps) {
    // Sort posts by date (newest first)
    const sortedPosts = [...posts].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
    });

    return (
        <div className="flex flex-col w-full gap-8">
            {/* List of Posts */}
            <div className="grid grid-cols-1 gap-6">
                {sortedPosts.length > 0 ? (
                    sortedPosts.map((post, index) => (
                        // Animated entry for each post
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <BlogCard
                                title={post.title}
                                description={post.description}
                                date={post.date}
                                slug={post.slug}
                            />
                        </motion.div>
                    ))
                ) : (
                    <div className="text-center py-12 text-white/40 italic text-lg">
                        No posts found.
                    </div>
                )}
            </div>
        </div>
    );
}

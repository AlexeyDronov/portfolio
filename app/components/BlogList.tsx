"use client";

import React, { useState, useMemo } from "react";
import BlogCard from "./UI/BlogCard";
import { BlogPost } from "../lib/blogUtils";
import { motion } from "framer-motion";

interface BlogListProps {
    posts: BlogPost[];
}

type SortOption = "newest" | "oldest";

export default function BlogList({ posts }: BlogListProps) {
    const [sortBy, setSortBy] = useState<SortOption>("newest");
    const [selectedTopic, setSelectedTopic] = useState<string | "all">("all");

    // Extract all unique tags for the filter dropdown
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        posts.forEach(post => {
            post.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, [posts]);

    const filteredAndSortedPosts = useMemo(() => {
        let result = [...posts];

        // Filter by topic
        if (selectedTopic !== "all") {
            result = result.filter(post => post.tags.includes(selectedTopic));
        }

        // Sort
        result.sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();

            if (sortBy === "newest") {
                return dateB - dateA;
            } else {
                return dateA - dateB;
            }
        });

        return result;
    }, [posts, sortBy, selectedTopic]);

    return (
        <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                    <label className="text-white/70 font-medium">Sort by:</label>
                    <div className="flex bg-black/20 rounded-lg p-1">
                        <button
                            onClick={() => setSortBy("newest")}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${sortBy === "newest"
                                ? "bg-purple-600 text-white shadow-lg"
                                : "text-white/60 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            Newest
                        </button>
                        <button
                            onClick={() => setSortBy("oldest")}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${sortBy === "oldest"
                                ? "bg-purple-600 text-white shadow-lg"
                                : "text-white/60 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            Oldest
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <label className="text-white/70 font-medium">Filter by Topic:</label>
                    <select
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                        className="bg-black/20 border border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 transition-colors"
                    >
                        <option value="all">All Topics</option>
                        {allTags.map(tag => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {filteredAndSortedPosts.length > 0 ? (
                    filteredAndSortedPosts.map((post, index) => (
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
                        No posts found matching your criteria.
                    </div>
                )}
            </div>
        </div>
    );
}

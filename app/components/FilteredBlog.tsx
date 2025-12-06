"use client";
import React, { useState } from "react";
import { BlogPost } from "../lib/blogUtils";
import BlogCard from "./UI/BlogCard";
import FilterDashboard from "./UI/FilterDashboard";
import { ArrowDownUp } from "lucide-react";

interface FilteredBlogProps {
    posts: BlogPost[];
}

export default function FilteredBlog({ posts }: FilteredBlogProps) {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

    // Extract unique tags
    const allTags = Array.from(new Set(posts.flatMap((post) => post.tags).filter(Boolean)));

    // Filter posts
    let displayPosts = selectedTags.length === 0
        ? posts
        : posts.filter((post) => post.tags.some((tag) => selectedTags.includes(tag)));

    // Sort posts
    displayPosts = [...displayPosts].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    const toggleSort = () => {
        setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    };

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8 w-full border-b border-white/10 pb-8">
                <div className="flex-1 w-full">
                    <FilterDashboard
                        title="Filter by Tags"
                        options={allTags}
                        selected={selectedTags}
                        onChange={setSelectedTags}
                    />
                </div>

                <button
                    onClick={toggleSort}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-white/80 whitespace-nowrap"
                >
                    <ArrowDownUp size={16} />
                    {sortOrder === "desc" ? "Newest First" : "Oldest First"}
                </button>
            </div>

            <div className="flex flex-col gap-6 w-full">
                {displayPosts.map((post) => (
                    <BlogCard
                        key={post.slug}
                        title={post.title}
                        description={post.description}
                        date={post.date}
                        slug={post.slug}
                    />
                ))}
            </div>

            {displayPosts.length === 0 && (
                <div className="text-center py-20 text-white/40">
                    No posts found for the selected tags.
                </div>
            )}
        </div>
    );
}

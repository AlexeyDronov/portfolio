import React from "react";
import BlogCard from "../UI/BlogCard";
import { BlogPost } from "../../lib/blogUtils";
import SectionHeader from "../UI/SectionHeader";

interface BlogProps {
    posts: BlogPost[]; // List of blog posts to display
}

// Blog section component
// Displays a list of latest blog posts (limited to 3)
export default function Blog({ posts }: BlogProps) {
    // Get the first 3 posts
    const latestPosts = posts.slice(0, 3);

    return (
        <div className="flex flex-col w-full gap-12">
            {/* Header with Title and View All link */}
            <SectionHeader
                title="Latest Posts"
                href="/blog"
                linkText="View All Posts"
            />

            {/* List of Blog Cards */}
            <div className="flex flex-col gap-4">
                {latestPosts.length > 0 ? (
                    latestPosts.map((post) => (
                        <BlogCard
                            key={post.slug}
                            title={post.title}
                            description={post.description}
                            date={post.date}
                            slug={post.slug}
                            source="home"
                        />
                    ))
                ) : (
                    <div className="text-white/40 italic">No posts found.</div>
                )}
            </div>
        </div>
    );
}

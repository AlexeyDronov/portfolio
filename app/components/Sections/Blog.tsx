import React from "react";
import BlogCard from "../UI/BlogCard";
import { BlogPost } from "../../lib/blogUtils";

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
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Latest Posts</h2>
                </div>
                <a
                    href="/blog"
                    className="text-white/60 hover:text-white border-b border-transparent hover:border-white transition-all pb-1"
                >
                    View All Posts &rarr;
                </a>
            </div>

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

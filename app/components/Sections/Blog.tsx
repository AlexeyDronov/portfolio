import React from "react";
import BlogCard from "../UI/BlogCard";
import { BlogPost } from "../../lib/blogUtils";

interface BlogProps {
    posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
    return (
        <div className="flex flex-col w-full gap-12">
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Latest Posts</h2>
            </div>

            <div className="flex flex-col gap-4">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <BlogCard
                            key={post.slug}
                            title={post.title}
                            description={post.description}
                            date={post.date}
                            slug={post.slug}
                        />
                    ))
                ) : (
                    <div className="text-white/40 italic">No posts found.</div>
                )}
            </div>
        </div>
    );
}

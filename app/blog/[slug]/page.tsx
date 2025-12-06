import React from "react";
import { getPostBySlug } from "../../lib/blogUtils";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Pattern from "../../components/UI/Background";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Generate metadata for the blog post page dynamically based on the post content
export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Blog`,
        description: post.description,
    };
}

// This page displays a single blog post based on the slug in the URL.
export default async function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
    const { slug } = await params;
    const { from } = await searchParams;
    // Fetch the post data
    const post = getPostBySlug(slug);

    // If post not found, show 404 page
    if (!post) {
        notFound();
    }

    const backLink = from === "home" ? "/" : "/blog";
    const backLabel = from === "home" ? "Back to Home" : "Back to Blog";

    return (
        <div className="relative flex min-h-screen w-full flex-col font-sans text-white items-center">
            {/* Background pattern */}
            <Pattern />

            <main className="flex w-full max-w-3xl flex-col px-6 md:px-12 py-12 z-10">
                {/* Back to Blog link */}
                <div className="w-full mb-8">
                    <Link
                        href={backLink}
                        className="group flex items-center gap-2 text-white/60 hover:text-white border-b border-transparent hover:border-white transition-all pb-1 w-fit"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                            <path d="M19 12H5" />
                            <path d="M12 19l-7-7 7-7" />
                        </svg>
                        {backLabel}
                    </Link>
                </div>

                {/* Blog Post Content */}
                <article className="prose prose-invert prose-lg max-w-none">
                    {/* Header: Tags, Title, Date */}
                    <div className="mb-8 border-b border-white/10 pb-8">
                        <div className="flex gap-2 mb-4">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-blue-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4">
                            {post.title}
                        </h1>
                        <p className="text-white/60 font-mono text-sm">
                            {post.date}
                        </p>
                    </div>

                    {/* Markdown Content Renderer with custom styling for elements */}
                    <ReactMarkdown
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-white mt-8 mb-4" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-white mt-8 mb-4" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-white mt-6 mb-3" {...props} />,
                            p: ({ node, ...props }) => <p className="text-white/80 leading-relaxed mb-4" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc list-inside text-white/80 mb-4 space-y-2" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal list-inside text-white/80 mb-4 space-y-2" {...props} />,
                            li: ({ node, ...props }) => <li className="ml-4" {...props} />,
                            a: ({ node, ...props }) => <a className="text-blue-400 hover:text-blue-300 underline" {...props} />,
                            blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-purple-500 pl-4 italic text-white/70 my-4" {...props} />,
                            code: ({ node, ...props }) => <code className="bg-white/10 rounded px-1 py-0.5 font-mono text-sm text-pink-300" {...props} />,
                            pre: ({ node, ...props }) => <pre className="bg-black/30 rounded-lg p-4 overflow-x-auto mb-4 border border-white/10" {...props} />,
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </article>
            </main>
        </div>
    );
}

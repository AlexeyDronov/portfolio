import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/app/lib/dataUtils";
import ReactMarkdown from "react-markdown";
import { ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
    params: { slug: string };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
    const { slug } = await props.params;
    const blog = getBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    return (
        <main className="min-h-screen w-full max-w-[800px] mx-auto pt-32 pb-24 px-4 font-mono">

            {/* Back Button */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-12 transition-colors">
                <ArrowLeft size={16} /> Back to Blog
            </Link>

            <article>
                {/* Header */}
                <header className="mb-12 pb-12 border-b border-slate-800">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {blog.tags.map(tag => (
                            <span key={tag} className="text-xs text-primary border border-primary/30 px-2 py-1 rounded-[4px] bg-primary/5 uppercase tracking-wide">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {blog.title}
                    </h1>

                    <div className="flex items-center gap-4 text-text-dim text-sm">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.topic}</span>
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-slate max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-text-secondary prose-a:text-primary prose-code:text-secondary prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800">
                    <ReactMarkdown>{blog.content}</ReactMarkdown>
                </div>
            </article>

        </main>
    );
}

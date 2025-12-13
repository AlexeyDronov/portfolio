import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/app/lib/dataUtils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
                            <span key={tag} className="text-xs text-primary border border-primary/30 px-2 py-1 rounded-(--border-radius-sm) bg-primary/5 uppercase tracking-wide">
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
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-white mb-6 mt-10" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-white mb-4 mt-8" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-white mb-3 mt-6" {...props} />,
                            p: ({ node, ...props }) => <p className="mb-4 text-text-secondary leading-relaxed" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 pl-4 text-text-secondary" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 pl-4 text-text-secondary" {...props} />,
                            li: ({ node, ...props }) => <li className="mb-2" {...props} />,
                            a: ({ node, ...props }) => <a className="text-primary hover:underline underline-offset-4" {...props} />,
                            code: ({ node, inline, ...props }: any) =>
                                inline
                                    ? <code className="bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono text-primary" {...props} />
                                    : <code className="block bg-slate-900 p-4 rounded-lg text-sm font-mono overflow-x-auto text-text-secondary my-4 border border-slate-800" {...props} />,
                            blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-primary pl-4 italic text-text-dim my-6" {...props} />,
                        }}
                    >
                        {blog.content}
                    </ReactMarkdown>
                </div>
            </article>

        </main>
    );
}

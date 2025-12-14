"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

interface MarkdownViewProps {
    content: string;
    className?: string; // Allow minimal styling overrides
    variant?: "card" | "page"; // To toggle between different styles if needed
}

export default function MarkdownView({ content, className = "", variant = "page" }: MarkdownViewProps) {
    return (
        <div className={className}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ node, ...props }) => (
                        <h1 className={`${variant === "card" ? "text-xl mb-2" : "text-2xl md:text-3xl mb-6 mt-10"} font-bold text-white`} {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                        <h2 className={`${variant === "card" ? "text-lg mb-2" : "text-xl md:text-2xl mb-4 mt-8"} font-bold text-white`} {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                        <h3 className={`${variant === "card" ? "text-base mb-1" : "text-lg md:text-xl mb-3 mt-6"} font-bold text-white`} {...props} />
                    ),
                    p: ({ node, ...props }) => (
                        <p className={`mb-4 text-text-secondary leading-relaxed ${variant === "card" ? "mb-2" : ""}`} {...props} />
                    ),
                    strong: ({ node, ...props }) => (
                        <strong className="font-bold text-secondary" {...props} />
                    ),
                    em: ({ node, ...props }) => (
                        <em className="italic text-secondary" {...props} />
                    ),
                    a: ({ node, href, ...props }) => (
                        <Link
                            href={href as string || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${variant === "card" ? "text-white hover:underline" : "text-primary hover:underline underline-offset-4"}`}
                            {...props}
                        />
                    ),
                    ul: ({ node, ...props }) => (
                        <ul className={`list-disc list-inside mb-4 pl-4 text-text-secondary ${variant === "card" ? "mb-2" : ""}`} {...props} />
                    ),
                    ol: ({ node, ...props }) => (
                        <ol className={`list-decimal list-inside mb-4 pl-4 text-text-secondary ${variant === "card" ? "mb-2" : ""}`} {...props} />
                    ),
                    li: ({ node, ...props }) => (
                        <li className={`${variant === "card" ? "mb-1" : "mb-2"}`} {...props} />
                    ),
                    code: ({ node, inline, ...props }: any) =>
                        inline
                            ? <code className="bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono text-primary" {...props} />
                            : <code className="block bg-slate-800/50 p-4 rounded text-sm font-mono overflow-x-auto text-text-secondary my-4 border border-slate-700" {...props} />,
                    blockquote: ({ node, ...props }) => (
                        <blockquote className="border-l-4 border-primary pl-4 italic text-text-dim my-6" {...props} />
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}

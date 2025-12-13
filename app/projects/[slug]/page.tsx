import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/app/lib/dataUtils";
import ReactMarkdown from "react-markdown";
import { X, Github, ExternalLink } from "lucide-react";

interface ProjectModalPageProps {
    params: { slug: string };
}

export default async function ProjectModalPage(props: ProjectModalPageProps) {
    const { slug } = await props.params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop - Clicking it acts as closing (Link back to projects) */}
            <Link href="/projects" className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-default" aria-label="Close modal" />

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900  border-slate-700 outline-2 outline-primary/30 shadow-2xl rounded-none overflow-hidden flex flex-col z-[101]">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900 sticky top-0 z-10">
                    <h1 className="text-2xl md:text-3xl font-bold text-text-primary">{project.title}</h1>
                    <Link href="/projects" className="p-2 hover:bg-slate-800 rounded-full transition-colors text-text-secondary hover:text-white">
                        <X size={24} />
                    </Link>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto p-6 md:p-12 custom-scrollbar">

                    {/* Image */}
                    {project.image && (
                        <div className="w-full aspect-video bg-slate-800 mb-8 rounded-[var(--border-radius-sm)] overflow-hidden">
                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
                        </div>
                    )}

                    {/* Tags & Metadata */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-mono px-2 py-1 border border-secondary/30 text-secondary bg-secondary/5 rounded-[var(--border-radius-sm)]">{tag}</span>
                        ))}
                    </div>

                    {/* Markdown Body */}
                    <div className="prose prose-invert prose-slate max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-text-secondary prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-primary prose-pre:bg-slate-950 prose-pre:border prose-pre:border-slate-800">
                        <ReactMarkdown>{project.content}</ReactMarkdown>
                    </div>

                </div>
            </div>
        </div>
    );
}

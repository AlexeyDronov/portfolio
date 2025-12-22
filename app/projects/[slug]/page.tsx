import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/app/lib/dataUtils";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from "@/app/components/mdx-components";
import ContextualBackButton from "@/app/components/ContextualBackButton";

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
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop - Clicking it acts as closing */}
            <ContextualBackButton
                defaultHref="/projects"
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-default"
                ariaLabel="Close modal"
                icon="none"
            />
            {/* Note: We rely on the button rendering as a Link/div that handles click. 
               However, ContextualBackButton renders a Link/a tag. 
               Ideally, we want the backdrop to be clickable. A link covering screen works well. */}

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900  border-slate-700 outline-2 outline-primary/30 shadow-2xl rounded-none overflow-hidden flex flex-col z-101 pointer-events-auto">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900 sticky top-0 z-10">
                    <h1 className="text-2xl md:text-3xl font-bold font-mono text-text-primary">{project.title}</h1>
                    <ContextualBackButton
                        defaultHref="/projects"
                        className="p-2 hover:bg-slate-800 rounded-none transition-colors text-text-secondary hover:text-white"
                        icon="close"
                    />
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto p-6 md:p-12 custom-scrollbar">

                    {/* Image */}
                    {project.image && (
                        <div className="w-full aspect-video bg-slate-800 mb-8 rounded-(--border-radius-sm) overflow-hidden">
                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
                        </div>
                    )}

                    {/* Tags & Metadata */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-mono px-2 py-1 border border-secondary/30 text-secondary bg-secondary/5 rounded-(--border-radius-sm)">{tag}</span>
                        ))}
                    </div>

                    {/* Markdown Body */}
                    <div className="prose prose-invert prose-slate max-w-none">
                        <MDXRemote source={project.content} components={mdxComponents} />
                    </div>

                </div>
            </div>
        </div>
    );
}

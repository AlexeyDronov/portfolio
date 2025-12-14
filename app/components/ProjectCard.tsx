"use client";

import React from "react";
import Link from "next/link";
import { ProjectData } from "@/app/lib/dataUtils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ProjectCardProps {
    project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link href={`/projects/${project.slug}`} className="group block">
            <div className="border border-slate-700 bg-slate-900/40 rounded-(--border-radius-sm) overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] flex flex-col h-full">
                {/* Image Section */}
                <div className="w-full aspect-video bg-slate-800 relative overflow-hidden">
                    {/* Placeholder for actual image or fallbacks */}
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-text-dim">
                        {project.image ? (
                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
                        ) : (
                            <span>No Image</span>
                        )}
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col grow">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h2>

                    {/* Replaced p tag with ReactMarkdown */}
                    <div className="text-text-secondary text-base leading-relaxed mb-4 grow line-clamp-3">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            disallowedElements={["p"]}
                            unwrapDisallowed
                            components={{
                                // Headings
                                h1: ({ node, ...props }) => <h1 className="text-xl font-bold text-white mb-2" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="text-lg font-bold text-white mb-2" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="text-base font-bold text-white mb-1" {...props} />,

                                // Regular text
                                p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                                strong: ({ node, ...props }) => <strong className="font-bold text-primary" {...props} />,
                                em: ({ node, ...props }) => <em className="italic" {...props} />,
                                a: ({ node, ...props }) => <a className="text-white hover:underline" {...props} />,

                                // Styling for lists
                                ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-2" {...props} />,
                                ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-2" {...props} />,
                                li: ({ node, ...props }) => <li className="mb-1" {...props} />,

                                // code rendering
                                code: ({ node, inline, ...props }: any) =>
                                    inline
                                        ? <code className="bg-slate-800 px-1 py-0.5 rounded text-sm font-mono text-primary" {...props} />
                                        : <code className="block bg-slate-800 p-2 rounded text-sm font-mono overflow-x-auto text-text-secondary my-2" {...props} />,
                            }}
                        >
                            {project.summary}
                        </ReactMarkdown>
                    </div>

                    <div className="w-full h-px bg-slate-700 my-4"></div>

                    <div className="flex flex-wrap gap-2">
                        {project.skills.map(skill => (
                            <span key={skill} className="px-2 py-1 text-xs font-mono text-text-secondary border border-primary/30 rounded-(--border-radius-sm) bg-primary/5">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

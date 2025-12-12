"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { X } from "lucide-react";
import { Project } from "../../lib/projectUtils";
import Image from "next/image";

interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    // Handle open/close animations
    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(true);
            document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Wait for animation
            document.body.style.overflow = "unset";
            return () => clearTimeout(timer);
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                onClick={onClose}
                aria-label="Close modal"
            />

            {/* Modal Content */}
            <div
                className={`relative w-full max-w-4xl max-h-[90vh] bg-background-dark border border-surface-light/20 rounded-[4px] shadow-2xl overflow-hidden flex flex-col transition-all duration-300 transform ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 text-fg-secondary hover:text-fg-primary bg-background-dark/20 hover:bg-background-dark/40 rounded-full transition-all cursor-pointer backdrop-blur-md"
                    aria-label="Close"
                >
                    <X size={20} />
                </button>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {/* Hero Image */}
                    {project.image && (
                        <div className="relative w-full h-64 md:h-80 shrink-0">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-background-dark to-transparent" />
                        </div>
                    )}

                    <div className="p-6 md:p-10 space-y-8">
                        {/* Header */}
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-fg-primary">
                                {project.title}
                            </h2>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm font-medium text-primary-light/90 bg-primary/10 border border-primary/20 rounded-[4px]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Markdown Content */}
                        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-fg-primary prose-p:text-fg-secondary prose-a:text-primary-light prose-a:no-underline hover:prose-a:underline prose-strong:text-fg-primary prose-code:text-primary-light prose-pre:bg-surface/50 prose-pre:border prose-pre:border-surface-light/20">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {project.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

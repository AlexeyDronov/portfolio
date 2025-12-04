import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ReactMarkdown from "react-markdown";
import { Project } from "../../lib/projectUtils";
import { X } from "lucide-react";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (project) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [project, onClose]);

    const handleClickOutside = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!project || !mounted) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleClickOutside}
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-white/60 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-colors z-10 cursor-pointer"
                >
                    <X size={24} />
                </button>

                <div className="p-8 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-2 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-md border border-blue-500/20"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <ReactMarkdown>{project.content}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="w-full flex flex-col gap-12 py-24 scroll-mt-20">
            <div className="flex flex-col gap-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fg-primary tracking-tight">
                    Get in Touch
                </h2>
                <div className="flex items-center gap-3" aria-hidden="true">
                    <div className="h-1 w-12 bg-primary rounded-full" />
                    <div className="h-1 w-3 bg-primary/30 rounded-full" />
                </div>
                <p className="text-fg-secondary max-w-2xl leading-relaxed">
                    I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    Feel free to connect with me through any of the platforms below.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                    href="https://github.com/alexeydronov"
                    target="_blank"
                    className="flex items-center gap-4 p-4 rounded-[4px] bg-surface/30 border border-surface-light/20 hover:bg-surface/50 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all group"
                >
                    <div className="p-2 rounded-[4px] bg-surface-light/10 group-hover:bg-surface-light/20 transition-colors">
                        <Github className="text-fg-primary" size={24} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-fg-primary">GitHub</span>
                        <span className="text-xs text-fg-secondary group-hover:text-primary-light transition-colors">Check out my code</span>
                    </div>
                </Link>

                <Link
                    href="https://linkedin.com/in/alexey-dronov"
                    target="_blank"
                    className="flex items-center gap-4 p-4 rounded-[4px] bg-surface/30 border border-surface-light/20 hover:bg-surface/50 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all group"
                >
                    <div className="p-2 rounded-[4px] bg-surface-light/10 group-hover:bg-surface-light/20 transition-colors">
                        <Linkedin className="text-fg-primary" size={24} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-fg-primary">LinkedIn</span>
                        <span className="text-xs text-fg-secondary group-hover:text-primary-light transition-colors">Let&apos;s connect</span>
                    </div>
                </Link>

                <Link
                    href="mailto:alexey.dronov@outlook.com"
                    className="flex items-center gap-4 p-4 rounded-[4px] bg-surface/30 border border-surface-light/20 hover:bg-surface/50 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all group"
                >
                    <div className="p-2 rounded-[4px] bg-surface-light/10 group-hover:bg-surface-light/20 transition-colors">
                        <Mail className="text-fg-primary" size={24} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-fg-primary">Email</span>
                        <span className="text-xs text-fg-secondary group-hover:text-primary-light transition-colors">Send me a message</span>
                    </div>
                </Link>
            </div>
        </section>
    );
}

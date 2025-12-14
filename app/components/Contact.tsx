"use client";

import React from "react";
import { LogoGitHub, LogoLinkedin, LogoMail } from "./Logos";

const SOCIALS = [
    { icon: LogoGitHub, href: "https://github.com/alexeydronov", key: 1 },
    { icon: LogoLinkedin, href: "https://linkedin.com/in/alexey-dronov", key: 2 },
    { icon: LogoMail, href: "mailto:alexey.dronov@outlook.com", key: 3 },
];


export default function Contact() {
    return (
        <section className="w-full border-t border-slate-800 bg-slate-950 py-16">
            <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center gap-8">

                <p className="text-xl text-text-secondary max-w-lg">
                    Let's connect! Find me on social media or drop me an email if you want to build something cool together.
                </p>

                <div className="flex items-center gap-8">
                    {SOCIALS.map((social) => (
                        <a
                            key={social.key}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 p-3 rounded-(--border-radius-sm)"
                        >
                            <social.icon size={32} />
                        </a>
                    ))}
                </div>

                <p className="text-text-dim text-sm font-mono mt-8">
                    © {new Date().getFullYear()} Alexey. All systems operational.
                </p>

            </div>
        </section>
    );
}

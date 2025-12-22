"use client";

import React from "react";
import { LogoGitHub, LogoLinkedin, IconMail } from "./Icons";

const SOCIALS = [
    { icon: LogoGitHub, href: "https://github.com/alexeydronov", key: 1 },
    { icon: LogoLinkedin, href: "https://linkedin.com/in/alexey-dronov", key: 2 },
    { icon: IconMail, href: "mailto:alexey.dronov@outlook.com", key: 3 },
];


export default function Contact() {
    return (
        <section className="w-full border-t border-slate-800 bg-slate-950 py-16">
            <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center gap-8">

                <p className="text-xl text-text-secondary max-w-lg font-mono">
                    Thanks for checking out my website! If you'd like to build something cool together, feel free to reach out.
                </p>

                <div className="flex items-center gap-8">
                    {SOCIALS.map((social) => (
                        <a
                            key={social.key}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 p-2 rounded-(--border-radius-sm)"
                        >
                            <social.icon size={32} />
                        </a>
                    ))}
                </div>

                <p className="text-text-dim text-sm font-mono mt-8">
                    © {new Date().getFullYear()} Alexey. Rights reserved. Vibes present.
                </p>

            </div>
        </section>
    );
}

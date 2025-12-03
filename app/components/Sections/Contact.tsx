"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setEmail("");
        setMessage("");
    };

    return (
        <div className="flex flex-col w-full gap-12">
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Get in Touch</h2>
                <p className="text-white/60 max-w-2xl">
                    Interested in collaborating or just want to say hi? Feel free to reach out.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="flex flex-col gap-6 p-8 rounded-3xl bg-white/5 border border-white/10">
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
                            <div className="p-4 rounded-full bg-green-500/20 text-green-400">
                                <Send size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                            <p className="text-white/60">Thanks for reaching out. I'll get back to you soon.</p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-4 text-sm text-white/40 hover:text-white transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-white/70">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-white/70">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
                                    placeholder="What's on your mind?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>

                {/* Social Links & Info */}
                <div className="flex flex-col justify-center gap-8">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold text-white">Connect</h3>
                        <div className="flex flex-col gap-4">
                            <a
                                href="mailto:alexey@example.com"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="p-3 rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-all">
                                    <Mail size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-white/40">Email</span>
                                    <span className="text-white font-medium">alexey@example.com</span>
                                </div>
                            </a>

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="p-3 rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-all">
                                    <Github size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-white/40">GitHub</span>
                                    <span className="text-white font-medium">@alexeydronov</span>
                                </div>
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="p-3 rounded-full bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-all">
                                    <Linkedin size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-white/40">LinkedIn</span>
                                    <span className="text-white font-medium">Alexey Dronov</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

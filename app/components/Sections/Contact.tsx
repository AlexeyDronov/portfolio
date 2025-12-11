"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        console.log("Form submitted:", formData);
        await new Promise(resolve => setTimeout(resolve, 1000));

        alert("Thanks for your message! (This is a demo)");
        setIsSubmitting(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="flex flex-col w-full gap-10">
            {/* Section Header */}
            <div className="flex flex-col gap-3">
                {/* Title - FUNCTIONAL hierarchy */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/95 tracking-tight">
                    Get in Touch
                </h2>
                {/* Description - SUPPLEMENTARY hierarchy */}
                <p className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed">
                    Have a project in mind or just want to say hi? Feel free to send me a message or connect on social media.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                {/* Contact Form (Left) */}
                <div className="w-full lg:w-2/3">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                                               text-white placeholder:text-white/25 
                                               focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 
                                               transition-all duration-300"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                                               text-white placeholder:text-white/25 
                                               focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 
                                               transition-all duration-300"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="subject" className="text-sm font-medium text-white/80">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                                           text-white placeholder:text-white/25 
                                           focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 
                                           transition-all duration-300"
                                placeholder="What is this about?"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 
                                           text-white placeholder:text-white/25 
                                           focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 
                                           transition-all duration-300 resize-none"
                                placeholder="Your message here..."
                            />
                        </div>

                        {/* Submit Button - Primary action with emerald accent */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 
                                       bg-emerald-500 text-white font-bold rounded-lg 
                                       hover:bg-emerald-400 
                                       disabled:opacity-50 disabled:cursor-not-allowed 
                                       transition-all duration-300 
                                       w-full md:w-auto self-start"
                        >
                            {isSubmitting ? (
                                "Sending..."
                            ) : (
                                <>
                                    Send Message
                                    <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Social Links (Right) */}
                <div className="w-full lg:w-1/3 flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-white">Connect</h3>
                        <div className="flex flex-col gap-4">
                            <Link
                                href="https://github.com/alexeydronov" // Replace with actual
                                target="_blank"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                                    <Github className="text-white" size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-white">GitHub</span>
                                    <span className="text-sm text-white/50">Follow my open source work</span>
                                </div>
                            </Link>

                            <Link
                                href="https://linkedin.com/in/alexey-dronov" // Replace with actual
                                target="_blank"
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                                    <Linkedin className="text-blue-400" size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-white">LinkedIn</span>
                                    <span className="text-sm text-white/50">Let's connect professionally</span>
                                </div>
                            </Link>

                            <Link
                                href="mailto:alexey.dronov@outlook.com" // Replace with actual
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="p-2 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors">
                                    <Mail className="text-red-400" size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-white">Email</span>
                                    <span className="text-sm text-white/50">alexey.dronov@outlook.com</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

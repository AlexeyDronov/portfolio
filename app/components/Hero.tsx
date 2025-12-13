"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [animationComplete, setAnimationComplete] = useState(false);
    const [hasRunBefore, setHasRunBefore] = useState(false);

    const fullText = "> Hi, I'm Alexey";
    const nameStartIndex = "> Hi, I'm ".length; // 10

    useEffect(() => {
        // Check session storage
        const sessionKey = "heroTypingComplete";
        const isDone = sessionStorage.getItem(sessionKey);

        if (isDone) {
            // If already run, show final state immediately
            setDisplayedText(fullText);
            setShowCursor(false);
            setAnimationComplete(true);
            setHasRunBefore(true);
            return;
        }

        // Start typing animation
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                handleTypingComplete();
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    const handleTypingComplete = () => {
        // Fade out cursor over 500ms
        setTimeout(() => {
            setShowCursor(false);
            // Fade in H3 over 500ms (handled by framer motion variants triggered by animationComplete)
            setAnimationComplete(true);
            sessionStorage.setItem("heroTypingComplete", "true");
        }, 500);
    };

    // Parsing the display text for coloring
    const renderText = () => {
        // We always render the full structure but slice the content
        // This part is white: "> Hi, I'm "
        // This part is purple: "Alexey"

        const firstPartLimit = Math.min(displayedText.length, nameStartIndex);
        const firstPart = displayedText.slice(0, firstPartLimit);

        const secondPart = displayedText.length > nameStartIndex
            ? displayedText.slice(nameStartIndex)
            : "";

        return (
            <>
                <span className="text-white">{firstPart}</span>
                <span className="text-[#a855f7]">{secondPart}</span>
            </>
        );
    };

    return (
        <section className="min-h-screen w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center px-4 text-center">
            <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-mono">
                    {renderText()}
                    <AnimatePresence>
                        {showCursor && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                                transition={{ repeat: Infinity, duration: 0.5 }}
                                className="inline-block w-3 h-10 md:h-16 ml-2 bg-[#a855f7] align-middle"
                            />
                        )}
                    </AnimatePresence>
                </h1>
            </div>

            <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={animationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-xl md:text-2xl text-text-secondary font-mono max-w-2xl"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.h3>
        </section>
    );
}

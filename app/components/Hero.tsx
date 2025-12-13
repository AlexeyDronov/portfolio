"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
    // ===== ANIMATION CONFIGURATION =====
    // Adjust typing speed per word below:
    const TYPING_SPEED_MS = 100; // Milliseconds per character
    const CURSOR_BLINK_SPEED_MS = 500; // Cursor blink interval

    // To change typing speed for specific words:
    // 1. Split the text into an array of words
    // 2. Add delays between words using setTimeout
    // Example: type "Hi," fast (50ms), then "I'm Alexey" slower (150ms)

    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [animationComplete, setAnimationComplete] = useState(false);

    const fullText = "> Hi, I'm Alexey";
    const nameStartIndex = "> Hi, I'm ".length; // 10

    useEffect(() => {
        // Check session storage
        const sessionKey = "heroTypingComplete";
        const isDone = sessionStorage.getItem(sessionKey);

        if (isDone) {
            // If already run, show final state immediately
            setDisplayedText(fullText);
            setShowCursor(true); // Keep cursor visible
            setAnimationComplete(true);
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
        }, TYPING_SPEED_MS);

        return () => clearInterval(typingInterval);
    }, []);

    const handleTypingComplete = () => {
        // Don't hide cursor, just trigger next animations
        setAnimationComplete(true);
        sessionStorage.setItem("heroTypingComplete", "true");
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
                <span className="text-white whitespace-pre">{firstPart}</span>
                <motion.span
                    className="text-[#a855f7]"
                    initial={{ textShadow: "0 0 0px rgba(168, 85, 247, 0)" }}
                    animate={animationComplete ? { textShadow: "0 0 20px rgba(168, 85, 247, 0.5)" } : {}}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    {secondPart}
                </motion.span>
            </>
        );
    };

    return (
        <section className="min-h-screen w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center px-4 text-center">
            <div className="relative">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-mono flex items-center justify-center">
                    {renderText()}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: CURSOR_BLINK_SPEED_MS / 1000, ease: "linear" }} // ease: "linear" for consistent blinking
                        className="inline-block w-[2px] h-10 md:h-16 ml-3 bg-[#a855f7] align-middle" // ml-3 for space, w-[2px] for thinner cursor
                    />
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

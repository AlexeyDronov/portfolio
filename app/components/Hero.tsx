"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SUBTITLE = 'Graduate Data Scientist and a nerd who loves tech and computers.'

export default function Hero() {
    // ===== ANIMATION CONFIGURATION =====
    const CURSOR_BLINK_SPEED_MS = 1000;

    // ===== STATE =====
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [animationComplete, setAnimationComplete] = useState(false);

    // NEW: Track whether typing is still in progress (for cursor behavior)
    const [isTyping, setIsTyping] = useState(true);

    const fullText = "> Hi, I'm Alexey";
    const nameStartIndex = "> Hi, I'm ".length;

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let currentText = ""; // Local variable to string build without race conditions

        // Define sections with base typing speeds
        const sections = [
            { text: "> Hi, ", speed: 60 },
            { text: "I'm ", speed: 80 },
            { text: "Alexey", speed: 120 }
        ];

        let sectionIndex = 0;
        let charInSection = 0;

        // NEW: Humanized delay logic (micro-pauses + jitter)
        const getDelay = (char: string, baseSpeed: number) => {
            let delay = baseSpeed;

            // Micro-pauses at natural boundaries
            if (char === "," || char === "'") delay += 100;
            if (char === " ") delay += 40;

            // Slight randomness to avoid robotic timing
            const jitter = Math.random() * 20 - 10;
            delay += jitter;

            return Math.max(30, delay);
        };

        const typeNextChar = () => {
            if (sectionIndex >= sections.length) {
                handleTypingComplete();
                return;
            }

            const section = sections[sectionIndex];
            const char = section.text[charInSection];

            // Append to local variable and set state directly
            currentText += char;
            setDisplayedText(currentText);

            charInSection++;

            // Move to next section when done
            if (charInSection >= section.text.length) {

                sectionIndex++;
                charInSection = 0;
            }

            timeoutId = setTimeout(
                typeNextChar,
                getDelay(char, section.speed)
            );
        };

        // Start typing
        typeNextChar();

        // Cleanup on unmount
        return () => clearTimeout(timeoutId);
    }, []);

    const handleTypingComplete = () => {
        setIsTyping(false); // NEW: Stop typing state
        setAnimationComplete(true);
    };

    // Parsing the display text for coloring
    const renderText = () => {
        const firstPartLimit = Math.min(displayedText.length, nameStartIndex);
        const firstPart = displayedText.slice(0, firstPartLimit);
        const secondPart =
            displayedText.length > nameStartIndex
                ? displayedText.slice(nameStartIndex)
                : "";

        return (
            <>
                <span className="text-white whitespace-pre">{firstPart}</span>

                <motion.span
                    className="inline-block text-[#a855f7]" // NEW: inline-block to avoid clipping artifacts
                    initial={{ textShadow: "0 0 0px rgba(168, 85, 247, 0)" }}
                    animate={
                        animationComplete
                            ? {
                                // NEW: Breathing glow after typing completes
                                textShadow: [
                                    "0 0 20px rgba(168, 85, 247, 0.4)",
                                    "0 0 30px rgba(168, 85, 247, 0.6)",
                                    "0 0 20px rgba(168, 85, 247, 0.4)",
                                ],
                            }
                            : {}
                    }
                    transition={{
                        duration: animationComplete ? 3 : 1,
                        ease: "easeInOut",
                        repeat: animationComplete ? Infinity : 0,
                    }}
                >
                    {secondPart}
                </motion.span>
            </>
        );
    };

    return (
        <section className="min-h-screen w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center px-4 text-center">
            <div className="relative p-2">
                <motion.h1
                    // NEW: Subtle entrance motion after typing completes
                    initial={{ opacity: 0.95, scale: 0.98 }}
                    animate={
                        animationComplete
                            ? { opacity: 1, scale: 1 }
                            : {}
                    }
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 font-mono flex flex-wrap items-center justify-center wrap-break-word leading-[1.1]"
                >
                    {renderText()}

                    <motion.span
                        // NEW: Cursor is solid while typing, blinks only when idle
                        animate={
                            isTyping
                                ? { opacity: 1 }
                                : { opacity: [0, 1, 0] }
                        }
                        transition={
                            isTyping
                                ? {}
                                : {
                                    repeat: Infinity,
                                    duration: CURSOR_BLINK_SPEED_MS / 1000,
                                    ease: "linear",
                                }
                        }
                        className="inline-block w-[5px] h-10 md:h-16 ml-2 bg-[#ffffff] align-middle"
                    />
                </motion.h1>
            </div>

            <motion.h3
                initial={{ opacity: 0, y: 8 }}
                animate={
                    animationComplete
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 8 }
                }
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.2, // NEW: Slight delay to de-emphasize subtitle
                }}
                className="text-xl md:text-2xl text-slate-400 font-mono max-w-xl"
            >
                {SUBTITLE}
            </motion.h3>
        </section>
    );
}

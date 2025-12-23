"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SUBTITLE = 'Graduate Data Scientist and a nerd who loves tech and computers.'
const HERO_ANIMATION_KEY = 'hero-animation-played';

export default function Hero() {
    // ===== ANIMATION CONFIGURATION =====
    const CURSOR_BLINK_SPEED_MS = 1000;

    const fullText = "> Hi, I'm Alexey";
    const nameStartIndex = "> Hi, I'm ".length;

    // ===== STATE =====
    const [displayedText, setDisplayedText] = useState("");
    const [animationComplete, setAnimationComplete] = useState(false);
    const [isTyping, setIsTyping] = useState(true);
    const hasInitialized = useRef(false);

    useEffect(() => {
        // Prevent double initialization in strict mode
        if (hasInitialized.current) return;
        hasInitialized.current = true;

        // Check session storage synchronously before starting animation
        const played = sessionStorage.getItem(HERO_ANIMATION_KEY);
        if (played === 'true') {
            // Skip animation - show completed state immediately
            setDisplayedText(fullText);
            setIsTyping(false);
            setAnimationComplete(true);
            return;
        }

        // Start typing animation
        let timeoutId: NodeJS.Timeout;
        let currentText = "";

        const sections = [
            { text: "> Hi, ", speed: 60 },
            { text: "I'm ", speed: 80 },
            { text: "Alexey", speed: 120 }
        ];

        let sectionIndex = 0;
        let charInSection = 0;

        const getDelay = (char: string, baseSpeed: number) => {
            let delay = baseSpeed;
            if (char === "," || char === "'") delay += 100;
            if (char === " ") delay += 40;
            const jitter = Math.random() * 20 - 10;
            delay += jitter;
            return Math.max(30, delay);
        };

        const typeNextChar = () => {
            if (sectionIndex >= sections.length) {
                // Animation complete
                setIsTyping(false);
                setAnimationComplete(true);
                sessionStorage.setItem(HERO_ANIMATION_KEY, 'true');
                return;
            }

            const section = sections[sectionIndex];
            const char = section.text[charInSection];

            currentText += char;
            setDisplayedText(currentText);

            charInSection++;

            if (charInSection >= section.text.length) {
                sectionIndex++;
                charInSection = 0;
            }

            timeoutId = setTimeout(
                typeNextChar,
                getDelay(char, section.speed)
            );
        };

        typeNextChar();

        return () => clearTimeout(timeoutId);
    }, [fullText]);

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

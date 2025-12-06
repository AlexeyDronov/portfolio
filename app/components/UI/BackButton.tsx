"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface BackButtonProps {
    fallbackRoute: string;
    label: string;
    className?: string;
}

export default function BackButton({ fallbackRoute, label, className = "" }: BackButtonProps) {
    const router = useRouter();

    const handleBack = (e: React.MouseEvent) => {
        e.preventDefault();
        // We try to go back in history. 
        // If the user opened this page directly (no history), router.back() might do nothing or exit site.
        // However, in a SPA/Next.js app, we rely on the router.
        router.back();
    };

    return (
        <Link
            href={fallbackRoute}
            onClick={handleBack}
            className={`group flex items-center gap-2 text-white/60 hover:text-white border-b border-transparent hover:border-white transition-all pb-1 w-fit cursor-pointer ${className}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:-translate-x-1 transition-transform"
            >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
            </svg>
            {label}
        </Link>
    );
}

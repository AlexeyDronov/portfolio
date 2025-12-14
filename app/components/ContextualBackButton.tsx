"use client";

import React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { IconLeftArrow, IconX } from "./Icons";

interface ContextualBackButtonProps {
    defaultHref: string;
    label?: string;
    homeLabel?: string;
    icon?: "arrow" | "close" | "none";
    className?: string;
    ariaLabel?: string;
}

export default function ContextualBackButton({ defaultHref, label, homeLabel, icon = "arrow", className = "", ariaLabel }: ContextualBackButtonProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const fromHome = searchParams.get("from") === "home";

    const handleClick = (e: React.MouseEvent) => {
        if (fromHome) {
            e.preventDefault();
            router.back();
        }
    };

    const fallbackHref = fromHome ? "/" : defaultHref;
    const currentLabel = fromHome && homeLabel ? homeLabel : label;
    const finalAriaLabel = ariaLabel || currentLabel || "Go back";

    return (
        <Link
            href={fallbackHref}
            onClick={handleClick}
            className={className}
            aria-label={finalAriaLabel}
        >
            {icon === "arrow" && <IconLeftArrow size={16} />}
            {icon === "close" && <IconX size={24} />}
            {currentLabel && <span>{currentLabel}</span>}
        </Link>
    );
}

import React from "react";

/**
 * Background Pattern Component
 * 
 * Creates a visually striking, multi-layered background with:
 * - Base gradient from slate to near-black
 * - Animated emerald accent blobs for visual interest
 * - Subtle noise texture overlay for depth
 * - All layers are fixed position and behind content (-z-10)
 */
export default function Pattern() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
      {/* Base Layer: Dark slate gradient for the 60% background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
        aria-hidden="true"
      />

      {/* Accent Layer: Animated emerald glow blobs (10% accent color) */}
      {/* Top-right blob - larger, more diffuse */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '8s' }}
        aria-hidden="true"
      />

      {/* Bottom-left blob - smaller, slightly brighter */}
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-600/8 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: '10s', animationDelay: '2s' }}
        aria-hidden="true"
      />

      {/* Center blob - very subtle, creates depth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      {/* Noise Texture Overlay: Adds subtle grain for premium feel */}
      {/* Using CSS noise pattern via SVG data URI for performance */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Radial Gradient Spotlight: Subtle vignette effect */}
      <div
        className="absolute inset-0 bg-radial-[at_50%_30%] from-transparent via-transparent to-black/40"
        aria-hidden="true"
      />
    </div>
  );
}


import React from 'react';
import { CustomIconProps } from '../lib/iconUtils';

// ALl icons from https://phosphoricons.com/
export const LogoLinkedin = ({ size = 24, ...props }: CustomIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 256 256'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <rect width="256" height="256" fill="none" />

        <rect
            x="32"
            y="32"
            width="192"
            height="192"
            // rx="28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            // strokeLinejoin="round"
            strokeWidth="16" />

        <line
            x1="120" y1="112"
            x2="120" y2="176"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16" />

        <line
            x1="88" y1="112"
            x2="88" y2="176"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16" />

        <path
            d="M120,140a28,28,0,0,1,56,0v36"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16" />
        <circle cx="88" cy="84" r="12" />
    </svg>
)

export const LogoGitHub = ({ size = 24, ...props }: CustomIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 256 256"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width="256" height="256" fill="none" />
        <path
            d="M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16" />
        <path d="M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16" />
        <path
            d="M104,208H72a32,32,0,0,1-32-32A32,32,0,0,0,8,144"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16" />
    </svg>
)
export const LogoMail = ({ size = 24, ...props }: CustomIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 256 256"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect
            width="256"
            height="256"
            fill="none" />
        <path
            d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16" />
        <polyline
            points="224 56 128 144 32 56"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16" />
    </svg>
)

export const LogoEducation = ({ size = 24, ...props }: CustomIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 256 256'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <rect width="256" height="256" fill="none" />
        <line x1="32" y1="64" x2="32" y2="144" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <path d="M56,216c15.7-24.08,41.11-40,72-40s56.3,15.92,72,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <polygon points="224 64 128 96 32 64 128 32 224 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <path d="M169.34,82.22a56,56,0,1,1-82.68,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    </svg>
)

export const LogoExperience = ({ size = 24, ...props }: CustomIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 256 256'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >

    </svg>
)
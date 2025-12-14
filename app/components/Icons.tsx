import React from 'react';
import { CustomIconProps } from '../lib/iconUtils';

// All icons are from https://phosphoricons.com/

//////////////////////////////////////////////////////////////////////////
// Logos for social media
//////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////
// Icons
//////////////////////////////////////////////////////////////////////////

export const IconMail = ({ size = 24, ...props }: CustomIconProps) => (
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

export const IconExperience = ({ size = 24, ...props }: CustomIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 256 256'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <rect width="256" height="256" fill="none" />
        <rect x="32" y="64" width="192" height="144" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <path d="M168,208V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    </svg>
)


export const IconEducation = ({ size = 24, ...props }: CustomIconProps) => (
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


export const IconHome = ({ size = 24, ...props }: CustomIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 256 256'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <rect width="256" height="256" fill="none" />
        <path d="M104,216V152h48v64h64V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120v96Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16" />
    </svg>
)

export const IconProjects = ({ size = 24, ...props }: CustomIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 256 256'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <rect width="256" height="256" fill="none" />
        <circle cx="168" cy="104" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <circle cx="88" cy="168" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <polyline points="152 216 152 160 88 96 88 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <line x1="88" y1="152" x2="88" y2="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <polyline points="136 40 136 72 156.69 92.69" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    </svg>
)


export const IconBlog = ({ size = 24, ...props }: CustomIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 256 256'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <rect width="256" height="256" fill="none" />
        <circle cx="124" cy="132" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <line x1="40.01" y1="216" x2="109.86" y2="146.14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <path d="M40,216l139.45-23.24a8,8,0,0,0,6.17-5.08L208,128,128,48,68.32,70.38a8,8,0,0,0-5.08,6.17Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <path d="M208,128l29.66-29.66a8,8,0,0,0,0-11.31L169,18.34a8,8,0,0,0-11.31,0L128,48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    </svg>
)

export const IconRightArrow = ({ size = 24, ...props }: CustomIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 256 256'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <rect width="256" height="256" fill="none" />
        <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    </svg>
)

export const IconRightUpArrow = ({ size = 24, ...props }: CustomIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 256 256'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <rect width="256" height="256" fill="none" />
        <line x1="64" y1="192" x2="192" y2="64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <polyline points="88 64 192 64 192 168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    </svg>
)


export const IconLeftArrow = ({ size = 24, ...props }: CustomIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 256 256'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <rect width="256" height="256" fill="none" />
        <line x1="216" y1="128" x2="40" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <polyline points="112 56 40 128 112 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    </svg>
)


export const IconX = ({ size = 24, ...props }: CustomIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox='0 0 256 256'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <rect width="256" height="256" fill="none" />
        <line x1="200" y1="56" x2="56" y2="200" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        <line x1="200" y1="200" x2="56" y2="56" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    </svg>
)
import React from 'react';

interface JavaLogoProps {
  className?: string;
  steamColor?: string;
  cupColor?: string;
  saucerColor?: string;
}

export default function JavaLogo({
  className = "w-12 h-12",
  steamColor = "#FF0800",
  cupColor = "currentColor",
  saucerColor = "currentColor"
}: JavaLogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 1. Tapered Filled Red Steam Lines (Highly detailed, organic bezier curves mimicking the official Java identity) */}
      {/* Left Steam Line */}
      <path
        d="M45.5 39.5c-1.8-3-2.1-7.5-1.4-11.5c.9-5.2 3.5-9.8 5.6-14.4c1.2-2.9 2.1-5.8 1.8-8.6c-.2-1.7-.9-3.5-2.1-4.8c-.5-.6-.9-.9-1.4-.6c-.5.3-.2 1.4.1 2.1c1.4 2.9 1.2 6.3 0 9.4c-1.2 3.2-3 6.3-4.4 9.8c-1.7 4.4-2.3 9.2-1.4 13.8c.6 2.9 2.1 5.8 4 7.8c.9.9 1.7 1.4 2.1.9c.4-.4.2-2.6-.6-4.1z"
        fill={steamColor}
      />
      {/* Middle Steam Line */}
      <path
        d="M60.5 39.5c-1.2-3.5-1.2-8.1 0-12.1c1.7-5.8 5.2-10.9 8.1-16.7c1.7-3.5 2.9-6.9 2.3-10.6c-.2-2.1-1.2-4-2.5-5.8c-.6-.7-1-.1-1.4.6s-.1 1.7.3 2.5c2.1 3.5 2.1 7.5.7 11.3c-1.4 3.7-3.7 7.1-5.5 10.9c-2.3 4.8-3.5 10.3-2.5 15.5c.6 3.5 2.5 6.9 4.8 9.4c1.2 1 2.1 1.4 2.3.9c.5-.5.1-2.9-1-4.9z"
        fill={steamColor}
      />
      {/* Right Steam Line */}
      <path
        d="M72.5 41.5c-.9-2.3-.6-5.8.2-8.6c1.2-4 3.5-7.8 5.5-11.7c1.2-2.1 2.1-4.4 1.7-6.7c-.2-1.4-.9-2.9-1.7-4c-.3-.5-.7-.7-.9-.3s-.1 1.2.2 1.7c1.4 2.3 1.4 5.2.6 7.8c-.9 2.5-2.3 5.2-3.7 7.8c-1.7 3.5-2.3 7.1-1.7 10.9c.3 2.3 1.7 4.6 3.5 6.3.9.9 1.7 1.1 2.1.7c.3-.3.1-2.1-.8-3.6z"
        fill={steamColor}
      />

      {/* 2. Recognizable Java Cup and Saucer Silhouette */}
      <g stroke={cupColor} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Tilted Cup Main Body (Dynamic organic curve) */}
        <path
          d="M32 54c0 0-4 28 26 36c30 8 41-10 41-22c0-12-4-10-67-14z"
          fill={cupColor}
          fillOpacity="0.08"
        />

        {/* Tilted Cup Handle (Proper scale and spacing) */}
        <path
          d="M93 59c11 0 17 5 17 12c0 9-11 12-17 12"
          strokeWidth="4"
        />

        {/* Dynamic horizontal bands/highlights on the cup (A staple detail of the official identity) */}
        <path
          d="M40 68c15 1.5 35 1.5 50 0"
          strokeWidth="3"
          strokeOpacity="0.4"
        />
        <path
          d="M45 78c12 1.2 28 1.2 40 0"
          strokeWidth="3"
          strokeOpacity="0.4"
        />

        {/* Double Saucer Silhouette (Dynamic concentric curves) */}
        {/* Inner/Upper Saucer Ring */}
        <path
          d="M26 95c18 6 52 6 76 0"
          stroke={saucerColor}
          strokeWidth="4.5"
        />
        {/* Outer/Lower Saucer Base */}
        <path
          d="M16 104c24 9 72 9 96 0"
          stroke={saucerColor}
          strokeWidth="5.5"
        />
      </g>
    </svg>
  );
}

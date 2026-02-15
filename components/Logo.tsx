import React from 'react';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 200 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Neon Cyberpunk Gradient */}
        <linearGradient id="yzGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan 500 */}
          <stop offset="100%" stopColor="#2563eb" /> {/* Blue 600 */}
        </linearGradient>

        {/* Glow Filter */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g filter="url(#glow)" stroke="url(#yzGradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        {/* Left Code Bracket < */}
        <path d="M 35 30 L 15 50 L 35 70" />
        
        {/* Right Code Bracket > */}
        <path d="M 165 30 L 185 50 L 165 70" />

        {/* The Letter Y */}
        <path d="M 55 25 L 75 50 L 75 80" />
        <path d="M 95 25 L 75 50" />

        {/* The Letter Z */}
        <path d="M 105 25 L 145 25 L 105 80 L 145 80" />

        {/* Circuit Board Nodes / Dots */}
        <circle cx="55" cy="25" r="4" fill="#050505" stroke="url(#yzGradient)" strokeWidth="3" />
        <circle cx="95" cy="25" r="4" fill="#050505" stroke="url(#yzGradient)" strokeWidth="3" />
        <circle cx="75" cy="80" r="4" fill="#050505" stroke="url(#yzGradient)" strokeWidth="3" />
        
        <circle cx="105" cy="25" r="4" fill="#050505" stroke="url(#yzGradient)" strokeWidth="3" />
        <circle cx="145" cy="80" r="4" fill="#050505" stroke="url(#yzGradient)" strokeWidth="3" />
        
        {/* Extra Circuit Trace details */}
        <path d="M 125 52 L 145 52" strokeWidth="3" />
        <circle cx="145" cy="52" r="2.5" fill="url(#yzGradient)" />
      </g>
    </svg>
  );
};
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10 w-auto" }) => {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
      </defs>
      
      {/* Logo Icon */}
      <g transform="translate(5, 5)">
        {/* Outer ring */}
        <circle
          cx="25"
          cy="25"
          r="23"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          opacity="0.3"
        />
        
        {/* Inner elements */}
        <circle cx="25" cy="25" r="18" fill="url(#logoGradient)" opacity="0.1" />
        
        {/* Code brackets */}
        <path
          d="M15 18 L10 25 L15 32"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 18 L40 25 L35 32"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Center star/asterisk */}
        <g transform="translate(25, 25)">
          <path
            d="M0 -6 L0 6 M-6 0 L6 0 M-4 -4 L4 4 M-4 4 L4 -4"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </g>
      
      {/* Company Text */}
      <text
        x="65"
        y="25"
        fontFamily="Inter, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill="url(#textGradient)"
      >
        CodeAstra
      </text>
      <text
        x="65"
        y="42"
        fontFamily="Inter, sans-serif"
        fontSize="12"
        fontWeight="500"
        fill="url(#textGradient)"
        opacity="0.8"
      >
        LABS
      </text>
    </svg>
  );
};

export default Logo;
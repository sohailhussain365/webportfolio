import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10 w-auto" }) => {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
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
        
        {/* Dark mode gradients */}
        <linearGradient id="logoGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="50%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
        <linearGradient id="textGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      
      {/* Logo Icon - completely transparent background */}
      <g transform="translate(5, 5)">        
        {/* Code brackets */}
        <path
          d="M15 18 L10 25 L15 32"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dark:stroke-[url(#logoGradientDark)]"
        />
        <path
          d="M35 18 L40 25 L35 32"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dark:stroke-[url(#logoGradientDark)]"
        />
        
        {/* Center star/asterisk */}
        <g transform="translate(25, 25)">
          <path
            d="M0 -6 L0 6 M-6 0 L6 0 M-4 -4 L4 4 M-4 4 L4 -4"
            stroke="url(#logoGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            className="dark:stroke-[url(#logoGradientDark)]"
          />
        </g>
        
        {/* Subtle outer glow effect */}
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="1"
          opacity="0.2"
          className="dark:stroke-[url(#logoGradientDark)]"
        />
      </g>
      
      {/* Company Text */}
      <text
        x="65"
        y="25"
        fontFamily="Inter, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill="url(#textGradient)"
        className="dark:fill-[url(#textGradientDark)]"
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
        className="dark:fill-[url(#textGradientDark)]"
      >
        LABS
      </text>
    </svg>
  );
};

export default Logo;
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className="relative">
      <img
        src="/ChatGPT Image Aug 7, 2025, 11_59_55 AM.png"
        alt="CodeAstra Labs Logo"
        className={`${className} drop-shadow-lg dark:drop-shadow-none`}
        style={{
          filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 1px rgba(0, 0, 0, 0.5))'
        }}
      />
      <style jsx>{`
        @media (prefers-color-scheme: light) {
          img {
            filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 2px rgba(0, 0, 0, 0.6)) !important;
          }
        }
        @media (prefers-color-scheme: dark) {
          img {
            filter: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;
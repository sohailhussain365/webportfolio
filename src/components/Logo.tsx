import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className="relative">
      <img
        src="/ChatGPT Image Aug 7, 2025, 11_59_55 AM.png"
        alt="CodeAstra Labs Logo"
        className={`${className} logo-adaptive`}
      />
      <style jsx>{`
        .logo-adaptive {
          /* Keep original logo colors in both modes */
          filter: brightness(1) contrast(1) saturate(1);
          transition: all 0.3s ease;
          
          /* Add text shadow for light mode visibility */
          drop-shadow: 0 0 3px rgba(0, 0, 0, 0.8);
        }
        
        /* Dark mode - use light shadow for text visibility */
        .dark .logo-adaptive {
          filter: brightness(1) contrast(1) saturate(1);
          drop-shadow: 0 0 3px rgba(255, 255, 255, 0.8);
        }
        
        /* Hover effects */
        .logo-adaptive:hover {
          transform: scale(1.05);
          drop-shadow: 0 0 5px rgba(0, 0, 0, 1);
        }
        
        .dark .logo-adaptive:hover {
          transform: scale(1.05);
          drop-shadow: 0 0 5px rgba(255, 255, 255, 1);
        }
      `}</style>
    </div>
  );
};

export default Logo;
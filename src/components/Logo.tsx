import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className="relative">
      <img
        src="/ChatGPT Image Aug 7, 2025, 11_59_55 AM.png"
        alt="CodeAstra Labs Logo"
        className={`${className} logo-filter`}
      />
      <style jsx>{`
        .logo-filter {
          /* Light mode - darken the text for better visibility */
          filter: brightness(0.7) contrast(1.2) saturate(1.1);
          transition: filter 0.3s ease;
        }
        
        /* Dark mode - keep original colors */
        .dark .logo-filter {
          filter: brightness(1) contrast(1) saturate(1);
        }
        
        /* Hover effects */
        .logo-filter:hover {
          filter: brightness(0.6) contrast(1.3) saturate(1.2);
        }
        
        .dark .logo-filter:hover {
          filter: brightness(1.1) contrast(1.1) saturate(1.1);
        }
      `}</style>
    </div>
  );
};

export default Logo;
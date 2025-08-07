import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10 sm:h-12 md:h-16 lg:h-20 w-auto" }) => {
  return (
    <div className="relative">
      <img
        src="ChatGPT Image Aug 8, 2025, 03_03_00 AM.png"
        alt="CodeAstra Labs Logo"
        className={`${className} logo-filter`}
      />
      <style>{`
        .logo-filter {
          filter: brightness(1) contrast(1.1) saturate(1.2);
          transition: filter 0.3s ease;
        }
        
        .dark .logo-filter {
          filter: brightness(1) contrast(1) saturate(1);
        }

        .logo-filter:hover {
          filter: brightness(0.9) contrast(1.2) saturate(1.2);
        }

        .dark .logo-filter:hover {
          filter: brightness(1.1) contrast(1.1) saturate(1.1);
        }
      `}</style>
    </div>
  );
};

export default Logo;
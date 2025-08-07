import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10 w-auto" }) => {
  return (
    <img
      src="/ChatGPT Image Aug 7, 2025, 11_59_55 AM.png"
      alt="CodeAstra Labs Logo"
      className={className}
    />
  );
};

export default Logo;
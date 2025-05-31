
import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-32 h-16',
    md: 'w-40 h-20', 
    lg: 'w-48 h-24'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 200 100" className="w-full h-full">
        {/* Background gradient */}
        <defs>
          <linearGradient id="saffronGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
          <linearGradient id="earthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a16207" />
            <stop offset="100%" stopColor="#713f12" />
          </linearGradient>
        </defs>
        
        {/* Decorative saffron elements */}
        <circle cx="20" cy="25" r="3" fill="#f59e0b" opacity="0.6" />
        <circle cx="180" cy="75" r="2.5" fill="#dc2626" opacity="0.6" />
        <circle cx="25" cy="75" r="2" fill="#eab308" opacity="0.5" />
        
        {/* Main text - Bahar Al Zafran */}
        <text 
          x="100" 
          y="35" 
          textAnchor="middle" 
          className="font-playfair font-bold" 
          fontSize="18" 
          fill="url(#saffronGradient)"
        >
          Bahar Al Zafran
        </text>
        
        {/* Arabic text */}
        <text 
          x="100" 
          y="55" 
          textAnchor="middle" 
          className="font-noto-kufi" 
          fontSize="12" 
          fill="url(#earthGradient)"
        >
          مطحنة و اعشاب بحرالزعفران
        </text>
        
        {/* Subtitle */}
        <text 
          x="100" 
          y="70" 
          textAnchor="middle" 
          fontSize="8" 
          fill="#846358"
        >
          Traditional Supermarket & Grinding Mill
        </text>
        
        {/* Decorative spice elements */}
        <path 
          d="M 30 45 Q 35 40 40 45 Q 35 50 30 45" 
          fill="#f59e0b" 
          opacity="0.3"
        />
        <path 
          d="M 160 45 Q 165 40 170 45 Q 165 50 160 45" 
          fill="#dc2626" 
          opacity="0.3"
        />
        
        {/* Small grinding mill icon */}
        <circle cx="15" cy="50" r="8" fill="none" stroke="#a16207" strokeWidth="1" opacity="0.4" />
        <circle cx="15" cy="50" r="4" fill="#a16207" opacity="0.3" />
        
        {/* Saffron threads */}
        <path 
          d="M 185 50 Q 190 45 195 50 Q 190 55 185 50" 
          fill="none" 
          stroke="#f59e0b" 
          strokeWidth="1" 
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default Logo;

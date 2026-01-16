import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 'md' }) => {
  const { t, language } = useLanguage();
  
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-20 w-20",
    lg: "h-32 w-32"
  };

  const fontSize = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl"
  };

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Laurel Wreath SVG Representation */}
      <svg 
        viewBox="0 0 100 100" 
        className={`${sizeClasses[size]} text-hotel-gold fill-current mb-1`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 85 C20 85 5 50 5 35 C5 30 10 30 10 35 C10 45 20 75 45 78 L 45 85 Z" opacity="0.9" />
        <path d="M50 85 C80 85 95 50 95 35 C95 30 90 30 90 35 C90 45 80 75 55 78 L 55 85 Z" opacity="0.9" />
        {/* Abstract JB Lettering Center */}
        <text x="50" y="55" textAnchor="middle" fill="currentColor" fontFamily="Playfair Display" fontWeight="bold" fontSize="35">JB</text>
        {/* Stars */}
        <path d="M25 65 L27 70 L23 70 Z" />
        <path d="M37 70 L39 75 L35 75 Z" />
        <path d="M50 72 L52 77 L48 77 Z" />
        <path d="M63 70 L65 75 L61 75 Z" />
        <path d="M75 65 L77 70 L73 70 Z" />
      </svg>
      <div className={`font-serif tracking-[0.2em] text-hotel-gold font-bold ${fontSize[size]} ${language === 'ar' ? 'font-sans tracking-normal' : ''}`}>
        {t.footer.logoText}
      </div>
      <div className="flex gap-1 mt-1 text-hotel-gold text-[10px] sm:text-xs">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
      </div>
    </div>
  );
};
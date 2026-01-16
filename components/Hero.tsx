import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { t, isRTL } = useLanguage();

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Use h-[100dvh] for dynamic viewport height which handles mobile browser bars better than h-screen
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden flex flex-col justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
       style={{
  backgroundImage:
    "linear-gradient(rgba(20,15,10,0.7), rgba(5,5,5,0.85)), url('https://raw.githubusercontent.com/saifedelloul/jb-hotel-backgrounde/8b77c542de3dc121c54e4639042a915f7bcc971f/jb-hotel-exterior.jpg')",}}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-hotel-dark"></div>
      </div>

      {/* Content - improved padding for mobile */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-6 z-10 w-full max-w-7xl mx-auto">
        
        <div className="mb-6 md:mb-8 animate-fade-in-up">
            <Logo size="lg" className="drop-shadow-2xl scale-75 md:scale-100" />
        </div>

        {/* Responsive Text Sizing: text-3xl for mobile, 5xl for tablet, 7xl for desktop */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-hotel-ivory mb-4 md:mb-6 leading-tight drop-shadow-lg max-w-5xl mx-auto rtl:font-sans rtl:leading-tight animate-fade-in-up [animation-delay:200ms] opacity-0 fill-mode-forwards">
          {t.hero.titleLine1} <br/>
          <span className="text-gradient-gold italic rtl:not-italic">{t.hero.titleLine2}</span>
        </h1>

        <p className="font-sans text-hotel-ivory/80 text-xs sm:text-sm md:text-lg tracking-[0.15em] md:tracking-[0.2em] uppercase mb-8 md:mb-12 max-w-xs md:max-w-2xl mx-auto rtl:tracking-normal rtl:text-base md:rtl:text-xl animate-fade-in-up [animation-delay:400ms] opacity-0 fill-mode-forwards">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto animate-fade-in-up [animation-delay:600ms] opacity-0 fill-mode-forwards px-8 sm:px-0">
          <button 
            onClick={onOpenBooking}
            className="bg-hotel-gold text-hotel-dark px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto min-w-[180px] uppercase tracking-widest font-bold hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(201,162,77,0.3)] text-sm md:text-base rtl:tracking-normal rtl:font-sans rtl:text-lg rounded-sm"
          >
            {t.hero.cta1}
          </button>
          <button 
            onClick={handleScrollToAbout}
            className="border border-hotel-ivory text-hotel-ivory px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto min-w-[180px] uppercase tracking-widest font-bold hover:bg-hotel-ivory hover:text-hotel-dark transition-all duration-300 text-sm md:text-base rtl:tracking-normal rtl:font-sans rtl:text-lg rounded-sm"
          >
            {t.hero.cta2}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-hotel-gold/70 cursor-pointer p-2" onClick={handleScrollToAbout}>
        <ChevronDown size={28} className="md:w-8 md:h-8" />
      </div>
    </section>
  );
};
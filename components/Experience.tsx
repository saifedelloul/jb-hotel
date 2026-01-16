import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/id/191/1920/1080')" }}>
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="font-serif text-4xl md:text-6xl text-hotel-ivory mb-8 drop-shadow-lg rtl:font-sans">
          {t.experience.title} <span className="text-hotel-gold italic rtl:not-italic">{t.experience.titleHighlight}</span>
        </h2>
        <p className="text-lg md:text-xl text-hotel-ivory/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed rtl:text-2xl">
          {t.experience.text}
        </p>
        
        <div className="inline-flex flex-col items-center">
          <div className="w-px h-16 bg-hotel-gold mb-4"></div>
          <button className="text-hotel-gold uppercase tracking-[0.3em] text-sm font-bold hover:text-white transition-colors rtl:tracking-normal rtl:font-sans rtl:text-lg">
            {t.experience.cta}
          </button>
        </div>
      </div>
    </section>
  );
};
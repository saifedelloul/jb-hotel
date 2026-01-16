import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-hotel-dark relative overflow-hidden scroll-mt-20">
        {/* Background Decorative Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-hotel-gold/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          
          <div className="w-full lg:w-1/2 relative group reveal">
            <div className="relative z-10 overflow-hidden shadow-2xl border-b-4 border-r-4 border-hotel-gold/30 rtl:border-r-0 rtl:border-l-4 rounded-sm">
              <img 
                src="https://raw.githubusercontent.com/saifedelloul/jb-hotel-backgrounde/c2f9c89f91d9b272a70db888e6a2ed17e892313e/resiption.jpg" 
                alt="Luxury Lobby" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110 aspect-[4/3] lg:aspect-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 rtl:-left-auto rtl:-right-4 rtl:md:-right-6 w-full h-full border border-hotel-gold/20 z-0 rounded-sm"></div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left rtl:lg:text-right reveal [transition-delay:200ms]">
            <h4 className="text-hotel-gold tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-3 md:mb-4 rtl:tracking-normal">{t.about.story}</h4>
            <h2 className="font-serif text-3xl md:text-5xl text-hotel-ivory mb-6 md:mb-8 leading-tight rtl:font-sans">
              {t.about.title} <span className="italic text-hotel-gold rtl:not-italic">{t.about.titleHighlight}</span> {t.about.titleEnd}
            </h2>
            <p className="text-hotel-ivory/70 font-sans leading-relaxed mb-4 md:mb-6 text-sm md:text-base rtl:text-base md:rtl:text-lg">
              {t.about.p1}
            </p>
            <p className="text-hotel-ivory/70 font-sans leading-relaxed mb-8 md:mb-10 text-sm md:text-base rtl:text-base md:rtl:text-lg">
              {t.about.p2}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start rtl:lg:justify-start gap-8 md:gap-12 border-t border-hotel-surface pt-8">
                <div className="text-center lg:text-left rtl:text-right">
                    <span className="block text-3xl md:text-4xl font-serif text-hotel-gold mb-1 rtl:font-sans">50+</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-hotel-ivory/60 rtl:tracking-normal">{t.about.stat1}</span>
                </div>
                <div className="text-center lg:text-left rtl:text-right">
                    <span className="block text-3xl md:text-4xl font-serif text-hotel-gold mb-1 rtl:font-sans">5★</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-hotel-ivory/60 rtl:tracking-normal">{t.about.stat2}</span>
                </div>
                <div className="text-center lg:text-left rtl:text-right">
                    <span className="block text-3xl md:text-4xl font-serif text-hotel-gold mb-1 rtl:font-sans">24/7</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-hotel-ivory/60 rtl:tracking-normal">{t.about.stat3}</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
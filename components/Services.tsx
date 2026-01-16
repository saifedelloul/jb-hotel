import React from 'react';
import { Utensils, Users, Flower2, Clock, ShieldCheck, Car } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap = [Utensils, Flower2, Users, Clock, Car, ShieldCheck];

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 md:py-24 bg-hotel-dark relative scroll-mt-20">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C9A24D 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-4 md:gap-6 reveal">
            <div className="max-w-xl text-left rtl:text-right w-full">
                <h4 className="text-hotel-gold tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-2 md:mb-3 rtl:tracking-normal">{t.services.subtitle}</h4>
                <h2 className="font-serif text-3xl md:text-5xl text-hotel-ivory rtl:font-sans">{t.services.title} <span className="text-gradient-gold">{t.services.titleHighlight}</span></h2>
            </div>
            <button className="hidden md:block px-8 py-3 border border-hotel-gold text-hotel-gold hover:bg-hotel-gold hover:text-hotel-dark transition-all duration-300 uppercase text-xs tracking-[0.2em] font-bold rtl:tracking-normal rtl:font-sans rtl:text-sm whitespace-nowrap rounded-sm">
                {t.services.viewAll}
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-px bg-transparent md:bg-hotel-gold/20 md:border border-hotel-gold/20">
          {t.services.list.map((service, index) => {
            const Icon = iconMap[index];
            return (
                <div key={index} className="reveal bg-hotel-dark p-8 md:p-10 hover:bg-hotel-surface transition-colors group relative overflow-hidden rounded-sm md:rounded-none border md:border-0 border-hotel-gold/10" style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="absolute top-0 right-0 rtl:left-0 rtl:right-auto p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                    <Icon size={100} className="text-hotel-gold" />
                </div>
                
                <Icon size={32} className="md:w-10 md:h-10 text-hotel-gold mb-4 md:mb-6" />
                <h3 className="font-serif text-xl md:text-2xl text-hotel-ivory mb-2 md:mb-3 rtl:font-sans">{service.title}</h3>
                <p className="text-hotel-ivory/60 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mt-4 md:mt-6 w-8 h-px bg-hotel-gold group-hover:w-full transition-all duration-500"></div>
                </div>
            );
          })}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
            <button className="px-8 py-3 border border-hotel-gold text-hotel-gold hover:bg-hotel-gold hover:text-hotel-dark transition-all duration-300 uppercase text-xs tracking-[0.2em] font-bold rtl:tracking-normal rtl:font-sans rounded-sm">
                {t.services.viewAll}
            </button>
        </div>
      </div>
    </section>
  );
};
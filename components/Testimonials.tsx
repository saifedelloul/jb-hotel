import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-hotel-dark border-t border-hotel-gold/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
                <Quote className="text-hotel-gold/30 invert-in-rtl" size={48} />
            </div>
          <h2 className="font-serif text-3xl md:text-4xl text-hotel-ivory rtl:font-sans">{t.testimonials.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.reviews.map((review, idx) => (
            <div key={idx} className="bg-hotel-surface p-8 border border-hotel-ivory/5 relative">
              <div className="flex gap-1 mb-6 text-hotel-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-hotel-ivory/80 font-serif italic text-lg mb-6 rtl:font-sans rtl:not-italic">"{review.content}"</p>
              <div>
                <h5 className="text-hotel-ivory font-bold uppercase text-sm tracking-widest rtl:tracking-normal rtl:text-base">{review.name}</h5>
                <span className="text-hotel-gold text-xs uppercase tracking-wider rtl:tracking-normal">{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
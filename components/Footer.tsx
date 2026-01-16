import React, { useState } from 'react';
import { Logo } from './Logo';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LegalModal } from './LegalModals';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'cookies' | null>(null);

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-black text-hotel-ivory pt-20 pb-10 border-t border-hotel-gold/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
            
            <div className="text-center md:text-left rtl:md:text-right">
              <Logo size="sm" className="mb-6 md:items-start rtl:md:items-end" />
              <p className="text-hotel-ivory/50 text-sm max-w-xs leading-relaxed rtl:text-base">
                {t.footer.tagline}
              </p>
            </div>

            <div className="flex gap-16 text-center md:text-left rtl:md:text-right">
              <div>
                <h5 className="text-hotel-gold uppercase tracking-widest text-xs font-bold mb-6 rtl:tracking-normal rtl:font-sans rtl:text-sm">{t.footer.links}</h5>
                <ul className="space-y-4 text-sm text-hotel-ivory/70 rtl:font-sans">
                  <li>
                    <a href="#" onClick={handleScrollToTop} className="hover:text-hotel-gold transition-colors">
                      {t.nav.home}
                    </a>
                  </li>
                  <li><a href="#rooms" className="hover:text-hotel-gold transition-colors">{t.nav.rooms}</a></li>
                  <li><a href="#services" className="hover:text-hotel-gold transition-colors">{t.nav.services}</a></li>
                  <li><a href="#events" className="hover:text-hotel-gold transition-colors">{t.nav.events}</a></li>
                  <li><a href="#contact" className="hover:text-hotel-gold transition-colors">{t.nav.contact}</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-hotel-gold uppercase tracking-widest text-xs font-bold mb-6 rtl:tracking-normal rtl:font-sans rtl:text-sm">{t.footer.legal}</h5>
                <ul className="space-y-4 text-sm text-hotel-ivory/70 rtl:font-sans">
                  <li>
                    <button onClick={() => setLegalModalType('privacy')} className="hover:text-hotel-gold transition-colors text-left rtl:text-right">
                      {t.footer.privacy}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setLegalModalType('terms')} className="hover:text-hotel-gold transition-colors text-left rtl:text-right">
                      {t.footer.terms}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setLegalModalType('cookies')} className="hover:text-hotel-gold transition-colors text-left rtl:text-right">
                      {t.footer.cookies}
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center md:text-right rtl:md:text-left">
               <h5 className="text-hotel-gold uppercase tracking-widest text-xs font-bold mb-6 rtl:tracking-normal rtl:font-sans rtl:text-sm">{t.footer.follow}</h5>
               <div className="flex gap-4 justify-center md:justify-end rtl:justify-start">
                  <a 
                    href="https://www.facebook.com/p/JB-Hotel-Biskra-100083381254974/?locale=ar_AR" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-hotel-ivory/20 flex items-center justify-center hover:bg-hotel-gold hover:text-hotel-dark hover:border-hotel-gold transition-all duration-300"
                    aria-label="Facebook"
                  >
                      <Facebook size={18} />
                  </a>
                  <a 
                    href="https://www.instagram.com/jbhotel.biskra/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-hotel-ivory/20 flex items-center justify-center hover:bg-hotel-gold hover:text-hotel-dark hover:border-hotel-gold transition-all duration-300"
                    aria-label="Instagram"
                  >
                      <Instagram size={18} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-hotel-ivory/20 flex items-center justify-center hover:bg-hotel-gold hover:text-hotel-dark hover:border-hotel-gold transition-all duration-300"
                    aria-label="Twitter"
                  >
                      <Twitter size={18} />
                  </a>
               </div>
            </div>
          </div>

          <div className="border-t border-hotel-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-hotel-ivory/40 uppercase tracking-wider rtl:tracking-normal">
              <p>{t.footer.rights}</p>
              <p className="mt-2 md:mt-0 rtl:font-sans">{t.footer.designed}</p>
          </div>
        </div>
      </footer>
      
      <LegalModal 
        type={legalModalType} 
        onClose={() => setLegalModalType(null)} 
      />
    </>
  );
};
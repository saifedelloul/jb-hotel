import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.rooms, href: '#rooms' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.events, href: '#events' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const scrollPosition = window.scrollY + 150; // Offset for navbar
      
      // Default to home if at top
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.substring(1);
    
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-hotel-dark/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center gap-2 z-50 relative">
           <div className={`transition-transform duration-300 ${isScrolled ? 'scale-75 origin-left' : 'scale-90 md:scale-100'}`}>
             <Logo size="sm" />
           </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors font-sans text-sm tracking-widest uppercase rtl:font-medium relative group cursor-pointer ${
                  isActive ? 'text-hotel-gold' : 'text-hotel-ivory hover:text-hotel-gold'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-hotel-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            );
          })}
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-r border-hotel-ivory/20 px-4 mx-2">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`text-xs font-bold transition-colors ${language === lang.code ? 'text-hotel-gold' : 'text-hotel-ivory/60 hover:text-hotel-ivory'}`}
                >
                    {lang.label}
                </button>
            ))}
          </div>

          <button 
            onClick={onOpenBooking}
            className="bg-hotel-gold hover:bg-white hover:text-hotel-dark text-hotel-dark px-6 py-2 rounded-sm transition-all duration-300 font-serif font-bold uppercase tracking-wider text-sm rtl:font-sans"
          >
            {t.nav.bookBtn}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4 z-50">
            <div className="flex items-center gap-2 bg-hotel-dark/50 p-1 rounded-full backdrop-blur-sm">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`text-[10px] font-bold px-2 py-1 rounded-full transition-colors ${language === lang.code ? 'bg-hotel-gold text-hotel-dark' : 'text-hotel-ivory/80'}`}
                    >
                        {lang.label}
                    </button>
                ))}
            </div>
            <button
            className="text-hotel-gold w-10 h-10 flex items-center justify-center bg-hotel-dark/80 backdrop-blur-sm rounded-full border border-hotel-gold/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-hotel-dark/98 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center space-y-6 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className={`transition-all duration-700 delay-100 flex flex-col items-center space-y-6 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Logo size="lg" />
            <div className="w-12 h-px bg-hotel-gold/30"></div>
            
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-2xl font-serif rtl:font-sans transition-colors py-2 cursor-pointer ${
                      isActive ? 'text-hotel-gold' : 'text-hotel-ivory hover:text-hotel-gold'
                    }`}
                >
                    {link.name}
                </a>
              );
            })}
            
            <button 
            onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
            }}
            className="border border-hotel-gold text-hotel-gold px-10 py-3 uppercase tracking-widest hover:bg-hotel-gold hover:text-hotel-dark transition-colors mt-8 rtl:font-sans rounded-sm font-bold shadow-lg shadow-hotel-gold/10"
            >
            {t.nav.bookStay}
            </button>
        </div>
      </div>
    </nav>
  );
};
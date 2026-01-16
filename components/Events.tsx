import React, { useState } from 'react';
import { Calendar, Music, Wine, ArrowRight, X, Clock, Info } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const eventImages = [
  'https://raw.githubusercontent.com/saifedelloul/jb-hotel-backgrounde/main/chez.jpg', // Gala/Traditional
  'https://raw.githubusercontent.com/saifedelloul/jb-hotel-backgrounde/main/reveilon.jpg', // Jazz/Lounge
  'https://raw.githubusercontent.com/saifedelloul/jb-hotel-backgrounde/main/showtime.jpg', // DJ/Nightlife
];

export const Events: React.FC = () => {
  const { t } = useLanguage();
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedEventIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedEventIndex(null);
    document.body.style.overflow = 'unset';
  };

  const handleBookEvent = () => {
    if (selectedEventIndex === null) return;
    
    const event = t.events.list[selectedEventIndex];
    const eventInfo = {
        title: event.title,
        date: event.date,
        time: event.time
    };

    // Close modal first
    closeModal();

    // Dispatch custom event with event details
    const customEvent = new CustomEvent('prefill-booking', { detail: eventInfo });
    window.dispatchEvent(customEvent);

    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-16 md:py-24 bg-hotel-dark relative overflow-hidden scroll-mt-20">
      {/* Abstract Background Element */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-32 h-32 border border-hotel-gold/10 rounded-full animate-pulse pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-4 md:gap-6 reveal">
            <div className="max-w-xl text-left rtl:text-right w-full">
                <h4 className="text-hotel-gold tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-2 md:mb-3 rtl:tracking-normal">{t.events.subtitle}</h4>
                <h2 className="font-serif text-3xl md:text-5xl text-hotel-ivory rtl:font-sans">
                  {t.events.title} <span className="text-gradient-gold italic rtl:not-italic">{t.events.titleHighlight}</span>
                </h2>
            </div>
            <button className="hidden md:flex items-center gap-2 px-8 py-3 bg-hotel-surface hover:bg-hotel-gold hover:text-hotel-dark text-hotel-ivory border border-hotel-gold/30 transition-all duration-300 uppercase text-xs tracking-[0.2em] font-bold rtl:tracking-normal rtl:font-sans rtl:text-sm rounded-sm">
                {t.events.viewAll} <ArrowRight size={16} className="rtl:rotate-180" />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.events.list.map((event, index) => (
            <div key={index} className="reveal group relative bg-hotel-surface/50 border border-hotel-ivory/5 hover:border-hotel-gold/40 transition-all duration-500 overflow-hidden hover:-translate-y-2 flex flex-col h-full rounded-sm" style={{ transitionDelay: `${index * 100}ms` }}>
              
              {/* Image Container */}
              <div className="relative h-56 md:h-64 overflow-hidden flex-shrink-0">
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 z-10 transition-opacity duration-500 group-hover:bg-black/20"></div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-hotel-dark/90 via-transparent to-transparent z-10"></div>
                
                <img 
                  src={eventImages[index]} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                
                {/* Tag Badge */}
                <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 bg-hotel-gold text-hotel-dark px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider rtl:tracking-normal shadow-lg rounded-sm">
                  {event.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 relative flex flex-col flex-grow">
                 <div className="flex items-center gap-2 text-hotel-gold/80 mb-4 text-xs md:text-sm font-medium">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                 </div>
                 
                 <h3 className="font-serif text-xl md:text-2xl text-hotel-ivory mb-3 group-hover:text-hotel-gold transition-colors rtl:font-sans">{event.title}</h3>
                 <p className="text-hotel-ivory/60 text-sm leading-relaxed mb-6 border-b border-hotel-ivory/10 pb-6 flex-grow">
                   {event.description}
                 </p>

                 <div className="flex items-center justify-between gap-4 mt-auto">
                    <button 
                        onClick={() => { setSelectedEventIndex(index); handleBookEvent(); }}
                        className="flex items-center gap-2 text-hotel-ivory text-xs uppercase tracking-widest font-bold group-hover:text-hotel-gold transition-colors rtl:tracking-normal rtl:font-sans py-2"
                    >
                        {t.events.reserve} 
                    </button>
                    
                    <button 
                        onClick={() => openModal(index)}
                        className="flex items-center gap-2 px-3 py-2 border border-hotel-ivory/20 hover:bg-hotel-ivory hover:text-hotel-dark text-hotel-ivory text-[10px] md:text-xs uppercase tracking-wider font-bold transition-all duration-300 rounded-sm rtl:tracking-normal rtl:font-sans"
                    >
                        {t.events.learnMore}
                        <Info size={14} />
                    </button>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
            <button className="px-8 py-3 bg-hotel-surface hover:bg-hotel-gold hover:text-hotel-dark text-hotel-ivory border border-hotel-gold/30 transition-all duration-300 uppercase text-xs tracking-[0.2em] font-bold rtl:tracking-normal rtl:font-sans rounded-sm">
                {t.events.viewAll}
            </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedEventIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" onClick={closeModal}></div>
            
            <div className="relative bg-hotel-dark w-full max-w-4xl max-h-[90vh] overflow-y-auto border-t md:border border-hotel-gold/30 shadow-2xl shadow-hotel-gold/10 animate-fade-in-up md:animate-fade-in-down rounded-t-2xl md:rounded-sm">
                
                {/* Close Button */}
                <button 
                    onClick={closeModal}
                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-hotel-gold hover:text-hotel-dark rounded-full text-hotel-ivory transition-all duration-300 rtl:right-auto rtl:left-4"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Modal Image */}
                    <div className="w-full md:w-1/2 h-56 md:h-auto relative min-h-[250px] md:min-h-[300px]">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-hotel-dark/50 z-10 hidden md:block rtl:bg-gradient-to-l"></div>
                        <img 
                            src={eventImages[selectedEventIndex]} 
                            alt={t.events.list[selectedEventIndex].title} 
                            className="w-full h-full object-cover"
                        />
                         <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 rtl:left-auto rtl:right-4 rtl:md:right-6">
                            <span className="bg-hotel-gold text-hotel-dark px-3 py-1 text-xs md:text-sm font-bold uppercase tracking-wider rtl:tracking-normal shadow-lg rounded-sm">
                                {t.events.list[selectedEventIndex].tag}
                            </span>
                        </div>
                    </div>

                    {/* Modal Content */}
                    <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                        <div className="space-y-4 mb-8">
                             <div className="flex items-center gap-6 text-hotel-gold/80 text-sm font-medium border-b border-hotel-ivory/10 pb-4">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} />
                                    <span>{t.events.list[selectedEventIndex].date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={18} />
                                    <span>{t.events.list[selectedEventIndex].time}</span>
                                </div>
                             </div>

                             <h3 className="font-serif text-2xl md:text-4xl text-hotel-ivory rtl:font-sans">
                                {t.events.list[selectedEventIndex].title}
                             </h3>

                             <p className="text-hotel-ivory/80 leading-relaxed text-sm md:text-base rtl:text-lg">
                                {t.events.list[selectedEventIndex].longDescription}
                             </p>
                        </div>

                        <div className="mt-auto">
                            <button 
                                onClick={handleBookEvent}
                                className="w-full bg-hotel-gold text-hotel-dark py-3 md:py-4 uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-300 rtl:tracking-normal rtl:font-sans text-sm md:text-lg shadow-[0_0_20px_rgba(201,162,77,0.2)] rounded-sm"
                            >
                                {t.events.bookEvent}
                            </button>
                            <p className="text-center text-hotel-ivory/40 text-[10px] md:text-xs mt-4 uppercase tracking-wider rtl:tracking-normal rtl:font-sans">
                                Limited availability • Reservation recommended
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};
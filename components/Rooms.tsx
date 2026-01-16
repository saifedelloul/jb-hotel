import React from 'react';
import { Wifi, Tv, Coffee, Wind, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface RoomsProps {
  onOpenBooking: (roomId: string) => void;
}

const roomImages = {
    deluxe: 'https://raw.githubusercontent.com/saifedelloul/jb-hotel-backgrounde/main/room1.jpg',
    executive: 'https://raw.githubusercontent.com/saifedelloul/jb-hotel-backgrounde/main/room2.jpg',
    suite: 'https://raw.githubusercontent.com/saifedelloul/jb-hotel-backgrounde/main/birou.jpg',
}

const roomPrices = {
    deluxe: '8000da',
    executive: '10000da',
    suite: '15000da'
}

export const Rooms: React.FC<RoomsProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  return (
    <section id="rooms" className="py-16 md:py-24 bg-hotel-surface relative scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 reveal">
          <h4 className="text-hotel-gold tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-2 md:mb-3 rtl:tracking-normal">{t.rooms.subtitle}</h4>
          <h2 className="font-serif text-3xl md:text-5xl text-hotel-ivory rtl:font-sans">{t.rooms.title} <span className="italic rtl:not-italic">{t.rooms.titleHighlight}</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.rooms.list.map((room, index) => (
            <div key={room.id} className="reveal group bg-hotel-dark border border-hotel-gold/10 hover:border-hotel-gold/50 transition-all duration-500 flex flex-col h-full overflow-hidden rounded-sm" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden h-56 md:h-64">
                <img 
                  src={roomImages[room.id as keyof typeof roomImages]} 
                  alt={room.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 bg-hotel-gold text-hotel-dark px-3 py-1 text-xs md:text-sm font-bold rtl:font-sans shadow-lg">
                    {roomPrices[room.id as keyof typeof roomPrices]} {t.rooms.night}
                </div>
              </div>

              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-xl md:text-2xl text-hotel-ivory group-hover:text-hotel-gold transition-colors rtl:font-sans">{room.title}</h3>
                </div>
                
                <p className="text-hotel-ivory/60 text-sm mb-6 flex-grow border-b border-hotel-ivory/10 pb-6">{room.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                    {room.features.map(f => (
                        <span key={f} className="text-[10px] uppercase tracking-wider border border-hotel-ivory/20 px-2 py-1 text-hotel-ivory/80 rtl:tracking-normal">{f}</span>
                    ))}
                </div>

                {/* Icons & Actions */}
                <div className="pt-2">
                   <div className="flex gap-4 text-hotel-gold/70 mb-6">
                        <div title="High Speed Wifi"><Wifi size={16} /></div>
                        <div title="Air Conditioning"><Wind size={16} /></div>
                        <div title="Smart TV"><Tv size={16} /></div>
                        <div title="Coffee Machine"><Coffee size={16} /></div>
                   </div>
                   
                   <div className="flex gap-3">
                       <button 
                           onClick={() => onOpenBooking(room.id)}
                           className="flex-1 bg-hotel-ivory text-hotel-dark py-3 text-xs uppercase tracking-widest font-bold hover:bg-hotel-gold transition-colors rtl:tracking-normal rtl:font-sans rounded-sm"
                       >
                           {t.nav.bookBtn}
                       </button>
                       <button className="px-4 border border-hotel-ivory/20 text-hotel-ivory hover:border-hotel-gold hover:text-hotel-gold transition-colors rounded-sm">
                           <ArrowRight size={18} className="rtl:rotate-180"/>
                       </button>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
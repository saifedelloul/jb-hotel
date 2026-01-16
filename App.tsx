import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Services } from './components/Services';
import { Events } from './components/Events';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string | undefined>(undefined);

  const openBooking = (roomId?: string) => {
    setSelectedRoom(roomId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-hotel-dark text-hotel-ivory font-sans overflow-x-hidden">
      <Navbar onOpenBooking={() => openBooking()} />
      <Hero onOpenBooking={() => openBooking()} />
      <About />
      <Rooms onOpenBooking={openBooking} />
      <Services />
      <Events />
      <Contact />
      <Footer />
      
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preSelectedRoom={selectedRoom}
      />
    </div>
  );
}

export default App;
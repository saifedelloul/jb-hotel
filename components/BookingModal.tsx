import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedRoom?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preSelectedRoom }) => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: preSelectedRoom || 'deluxe',
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (preSelectedRoom) {
      setFormData(prev => ({ ...prev, roomType: preSelectedRoom }));
    }
  }, [preSelectedRoom]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const { error } = await supabase
        .from('bookings')
        .insert({
          check_in: formData.checkIn,
          check_out: formData.checkOut,
          room_type: formData.roomType,
          guests: parseInt(formData.guests),
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone
        });

      if (error) throw error;

      setSuccess(true);
    } catch (err: any) {
      console.error('Error submitting booking:', err);
      setErrorMsg('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-hotel-dark w-full max-w-2xl border border-hotel-gold/30 shadow-2xl animate-fade-in-down max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-hotel-ivory/60 hover:text-hotel-gold z-10">
          <X size={24} />
        </button>

        {!success ? (
          <div className="p-8 md:p-12">
            <h3 className="font-serif text-3xl text-hotel-ivory mb-2 text-center">
              {t.nav.bookStay}
            </h3>
            <p className="text-hotel-ivory/60 text-center mb-8 text-sm uppercase tracking-widest">
              Best Rates Guaranteed
            </p>

            {errorMsg && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-2 rounded mb-6 text-sm text-center">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-hotel-gold text-xs uppercase tracking-wider mb-2">Check In</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      required
                      min={today}
                      value={formData.checkIn}
                      onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                      className="w-full bg-hotel-surface border border-hotel-ivory/20 px-4 py-3 text-hotel-ivory focus:border-hotel-gold focus:outline-none invert-calendar-icon"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-hotel-gold text-xs uppercase tracking-wider mb-2">Check Out</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      required
                      min={formData.checkIn || today}
                      value={formData.checkOut}
                      onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                      className="w-full bg-hotel-surface border border-hotel-ivory/20 px-4 py-3 text-hotel-ivory focus:border-hotel-gold focus:outline-none invert-calendar-icon"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-hotel-gold text-xs uppercase tracking-wider mb-2">Room Type</label>
                    <select 
                      value={formData.roomType}
                      onChange={(e) => setFormData({...formData, roomType: e.target.value})}
                      className="w-full bg-hotel-surface border border-hotel-ivory/20 px-4 py-3 text-hotel-ivory focus:border-hotel-gold focus:outline-none appearance-none"
                    >
                      <option value="deluxe">Deluxe Room</option>
                      <option value="executive">Executive Room</option>
                      <option value="suite">Luxury Suite</option>
                    </select>
                 </div>
                 <div>
                    <label className="block text-hotel-gold text-xs uppercase tracking-wider mb-2">Guests</label>
                    <select 
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      className="w-full bg-hotel-surface border border-hotel-ivory/20 px-4 py-3 text-hotel-ivory focus:border-hotel-gold focus:outline-none appearance-none"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                    </select>
                 </div>
              </div>

              <div className="border-t border-hotel-ivory/10 pt-6 mt-6">
                <div className="grid grid-cols-1 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-hotel-ivory/30 py-2 text-hotel-ivory placeholder-hotel-ivory/40 focus:outline-none focus:border-hotel-gold"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-hotel-ivory/30 py-2 text-hotel-ivory placeholder-hotel-ivory/40 focus:outline-none focus:border-hotel-gold"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-transparent border-b border-hotel-ivory/30 py-2 text-hotel-ivory placeholder-hotel-ivory/40 focus:outline-none focus:border-hotel-gold"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-hotel-gold text-hotel-dark py-4 uppercase tracking-widest font-bold hover:bg-white transition-all duration-300 mt-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? 'Processing...' : t.nav.bookBtn}
              </button>
            </form>
          </div>
        ) : (
          <div className="p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
            <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
              <Check size={40} />
            </div>
            <h3 className="font-serif text-3xl text-hotel-ivory mb-4">Reservation Received</h3>
            <p className="text-hotel-ivory/70 mb-8 max-w-sm">
              Thank you, {formData.name}. We have received your booking request for {formData.roomType}. Our concierge will contact you shortly at {formData.email} to confirm details.
            </p>
            <button 
              onClick={onClose}
              className="px-8 py-3 border border-hotel-gold text-hotel-gold hover:bg-hotel-gold hover:text-hotel-dark transition-colors uppercase tracking-widest text-sm font-bold"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
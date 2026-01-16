import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'cookies' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      text: (
        <div className="space-y-4 text-hotel-ivory/80 font-light">
          <p>Last updated: January 2026</p>
          <p>At JB HOTEL, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          <h4 className="text-hotel-gold font-bold uppercase text-sm mt-4">1. Information We Collect</h4>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data, Contact Data, Financial Data, and Transaction Data.</p>
          <h4 className="text-hotel-gold font-bold uppercase text-sm mt-4">2. How We Use Your Data</h4>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you (e.g., your room reservation).</p>
        </div>
      )
    },
    terms: {
      title: "Terms of Service",
      text: (
        <div className="space-y-4 text-hotel-ivory/80 font-light">
          <p>Welcome to JB HOTEL. These terms and conditions outline the rules and regulations for the use of JB HOTEL's Website.</p>
          <h4 className="text-hotel-gold font-bold uppercase text-sm mt-4">1. Booking Conditions</h4>
          <p>By making a reservation, you agree to the terms of the rate booked. Standard check-in time is 14:00 and check-out time is 12:00.</p>
          <h4 className="text-hotel-gold font-bold uppercase text-sm mt-4">2. Cancellation Policy</h4>
          <p>Cancellation policies vary depending on the rate plan selected. Please review the specific rate details provided at the time of booking.</p>
          <h4 className="text-hotel-gold font-bold uppercase text-sm mt-4">3. Hotel Rules</h4>
          <p>Smoking is strictly prohibited in all indoor areas. Pets are not allowed unless specifically arranged in designated pet-friendly suites.</p>
        </div>
      )
    },
    cookies: {
      title: "Cookie Policy",
      text: (
        <div className="space-y-4 text-hotel-ivory/80 font-light">
          <p>JB HOTEL uses cookies to improve your experience on our website.</p>
          <h4 className="text-hotel-gold font-bold uppercase text-sm mt-4">1. What are cookies?</h4>
          <p>Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
          <h4 className="text-hotel-gold font-bold uppercase text-sm mt-4">2. How we use cookies</h4>
          <p>We use cookies to understand how you use our site and to improve your experience. This includes personalizing content and ads, providing social media features and analyzing our traffic.</p>
        </div>
      )
    }
  };

  const currentContent = content[type];

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-hotel-dark w-full max-w-2xl border border-hotel-gold/30 shadow-2xl animate-fade-in-down max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-hotel-ivory/10 flex justify-between items-center bg-hotel-surface">
            <h3 className="font-serif text-2xl text-hotel-ivory">{currentContent.title}</h3>
            <button onClick={onClose} className="text-hotel-ivory/60 hover:text-hotel-gold transition-colors">
                <X size={24} />
            </button>
        </div>
        
        {/* Scrollable Content */}
        <div className="p-8 overflow-y-auto custom-scrollbar">
            {currentContent.text}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-hotel-ivory/10 bg-hotel-surface text-right">
            <button onClick={onClose} className="bg-hotel-gold text-hotel-dark px-6 py-2 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors">
                Close
            </button>
        </div>
      </div>
    </div>
  );
};
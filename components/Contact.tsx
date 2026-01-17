import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../lib/supabase';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    special: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        const { title, date, time } = customEvent.detail;
        setFormData(prev => ({
          ...prev,
          special: `RESERVATION REQUEST FOR EVENT:\nEvent: ${title}\nDate: ${date}\nTime: ${time}\n\n` + (prev.special || '')
        }));
      }
    };

    window.addEventListener('prefill-booking', handlePrefill);
    return () => window.removeEventListener('prefill-booking', handlePrefill);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s()]*$/;

    if (!formData.fname.trim()) newErrors.fname = t.contact.validation.required;
    if (!formData.lname.trim()) newErrors.lname = t.contact.validation.required;
    
    if (!formData.email.trim()) {
      newErrors.email = t.contact.validation.required;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t.contact.validation.email;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.contact.validation.required;
    } else if (!phoneRegex.test(formData.phone) || formData.phone.length < 8) {
       newErrors.phone = t.contact.validation.phone;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (!formData.checkin) {
      newErrors.checkin = t.contact.validation.required;
    } else {
      const checkinDate = new Date(formData.checkin);
      if (checkinDate < today) {
        newErrors.checkin = t.contact.validation.datePast;
      }
    }

    if (!formData.checkout) {
      newErrors.checkout = t.contact.validation.required;
    } else if (formData.checkin) {
      const checkinDate = new Date(formData.checkin);
      const checkoutDate = new Date(formData.checkout);
      if (checkoutDate <= checkinDate) {
        newErrors.checkout = t.contact.validation.dateOrder;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
       setLoading(true);
       try {
         const { error } = await supabase
           .from('contact_requests')
           .insert({
             first_name: formData.fname,
             last_name: formData.lname,
             email: formData.email,
             phone: formData.phone,
             check_in: formData.checkin,
             check_out: formData.checkout,
             message: formData.special
           });
         
         if (error) throw error;
         
         alert("Booking Request Sent Successfully!");
         setFormData({
            fname: '',
            lname: '',
            email: '',
            phone: '',
            checkin: '',
            checkout: '',
            special: ''
         });
       } catch (error) {
         console.error('Error submitting contact form:', error);
         alert("There was an error submitting your request. Please try again.");
       } finally {
         setLoading(false);
       }
    }
  };

  const getInputClass = (fieldName: string) => {
    return `w-full bg-transparent border-b ${errors[fieldName] ? 'border-red-400' : 'border-hotel-ivory/30'} py-4 text-hotel-ivory placeholder-hotel-ivory/40 focus:outline-none focus:border-hotel-gold transition-colors rtl:text-right text-base`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-hotel-surface relative scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Contact Info & Form */}
          <div className="w-full lg:w-1/2 reveal">
            <h4 className="text-hotel-gold tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-3 rtl:tracking-normal">{t.contact.subtitle}</h4>
            <h2 className="font-serif text-3xl md:text-4xl text-hotel-ivory mb-8 rtl:font-sans">{t.contact.title}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                        <input type="text" name="fname" value={formData.fname} onChange={handleChange} placeholder={t.contact.placeholders.fname} className={getInputClass('fname')} />
                        {errors.fname && <span className="text-red-400 text-xs absolute left-0 rtl:right-0 -bottom-5">{errors.fname}</span>}
                    </div>
                    <div className="relative">
                        <input type="text" name="lname" value={formData.lname} onChange={handleChange} placeholder={t.contact.placeholders.lname} className={getInputClass('lname')} />
                        {errors.lname && <span className="text-red-400 text-xs absolute left-0 rtl:right-0 -bottom-5">{errors.lname}</span>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.contact.placeholders.email} className={getInputClass('email')} />
                        {errors.email && <span className="text-red-400 text-xs absolute left-0 rtl:right-0 -bottom-5">{errors.email}</span>}
                    </div>
                    <div className="relative">
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t.contact.placeholders.phone} className={getInputClass('phone')} />
                        {errors.phone && <span className="text-red-400 text-xs absolute left-0 rtl:right-0 -bottom-5">{errors.phone}</span>}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                        <label className="text-xs text-hotel-gold uppercase tracking-wider mb-1 block rtl:tracking-normal">{t.contact.placeholders.checkin}</label>
                        <input type="date" name="checkin" value={formData.checkin} onChange={handleChange} className={`${getInputClass('checkin')} py-3 invert-calendar-icon`} />
                        {errors.checkin && <span className="text-red-400 text-xs absolute left-0 rtl:right-0 -bottom-5">{errors.checkin}</span>}
                    </div>
                    <div className="relative">
                        <label className="text-xs text-hotel-gold uppercase tracking-wider mb-1 block rtl:tracking-normal">{t.contact.placeholders.checkout}</label>
                        <input type="date" name="checkout" value={formData.checkout} onChange={handleChange} className={`${getInputClass('checkout')} py-3`} />
                        {errors.checkout && <span className="text-red-400 text-xs absolute left-0 rtl:right-0 -bottom-5">{errors.checkout}</span>}
                    </div>
                </div>
                <textarea 
                  name="special"
                  value={formData.special}
                  onChange={handleChange}
                  placeholder={t.contact.placeholders.special} 
                  rows={4} 
                  className="w-full bg-transparent border-b border-hotel-ivory/30 py-4 text-hotel-ivory placeholder-hotel-ivory/40 focus:outline-none focus:border-hotel-gold transition-colors rtl:text-right text-base"
                ></textarea>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-hotel-gold text-hotel-dark w-full py-4 uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-300 rtl:tracking-normal rtl:font-sans text-sm md:text-lg rounded-sm mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {loading ? 'Sending...' : t.contact.cta}
                </button>
            </form>
          </div>

          {/* Map & Details */}
          <div className="w-full lg:w-1/2 flex flex-col h-full reveal [transition-delay:200ms]">
            <div className="bg-hotel-dark p-8 md:p-12 mb-6 md:mb-8 flex-grow rounded-sm">
                <h3 className="font-serif text-xl md:text-2xl text-hotel-ivory mb-6 md:mb-8 rtl:font-sans">{t.contact.infoTitle}</h3>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-hotel-gold mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-hotel-ivory font-medium rtl:font-sans">{t.contact.labels.location}</p>
                            <p className="text-hotel-ivory/60 text-sm">{t.contact.labels.locationVal}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="text-hotel-gold mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-hotel-ivory font-medium rtl:font-sans">{t.contact.labels.phone}</p>
                            <p className="text-hotel-ivory/60 text-sm ltr">+213 33 61 91 00</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Mail className="text-hotel-gold mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-hotel-ivory font-medium rtl:font-sans">{t.contact.labels.email}</p>
                            <p className="text-hotel-ivory/60 text-sm">jbhotelr@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Embedded Map Placeholder */}
            <div className="w-full h-56 md:h-64 bg-gray-800 relative overflow-hidden group rounded-sm shadow-xl">
               <img 
                 src="https://raw.githubusercontent.com/saifedelloul/jb-hotel-backgrounde/5d65cc41760e989b19ea326d631f5f851c8ba543/map%20jb.jpg" 
                 alt="Map Location" 
                 className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" 
               />
               <div className="absolute inset-0 flex items-center justify-center">
                   <a 
                     href="https://maps.app.goo.gl/L2Rmu9kHYk9YjeAX6"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-hotel-ivory text-hotel-dark px-6 py-2 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-hotel-gold transition-colors shadow-lg rtl:tracking-normal rtl:font-sans rounded-sm transform hover:scale-105 duration-300"
                   >
                       {t.contact.mapBtn}
                   </a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
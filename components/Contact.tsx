import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { COMPANY_INFO } from '../constants';
import { MapPin, Phone, Mail, Building, Send, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Kontaktujte nás" subtitle="Jsme připraveni se Vám věnovat. Napište nám nebo zavolejte." />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase mb-1">Adresa kanceláře</p>
                  <p className="text-gray-800 text-lg leading-snug">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase mb-1">Telefon</p>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-gray-800 text-lg hover:text-accent transition-colors font-medium">
                    {COMPANY_INFO.phone}
                  </a>
                  <p className="text-xs text-gray-400 mt-1">Po-Pá: 9:00 - 17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase mb-1">Email</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-800 text-lg hover:text-accent transition-colors font-medium">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Building size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase mb-1">Fakturační údaje</p>
                  <p className="text-gray-800">IČO: {COMPANY_INFO.ico}</p>
                  <p className="text-gray-800">{COMPANY_INFO.name}</p>
                  <p className="text-gray-800">Sídlo: {COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-100">
               <p className="text-sm text-gray-500 italic">
                 Jsme vázaným zástupcem samostatného zprostředkovatele dle zákona o distribuci pojištění a zajištění.
               </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Napište nám</h3>
            <p className="text-gray-600 mb-8">Vyplňte formulář a my se Vám ozveme co nejdříve.</p>
            
            {formStatus === 'success' ? (
              <div className="bg-green-100 border border-green-200 text-green-700 px-6 py-12 rounded-xl text-center">
                <div className="w-16 h-16 bg-green-200 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} />
                </div>
                <p className="font-bold text-2xl mb-2">Děkujeme za zprávu!</p>
                <p>Váš požadavek jsme přijali a budeme Vás kontaktovat do 24 hodin.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Jméno a příjmení</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                      placeholder="Jan Novák"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                      placeholder="+420 777 000 000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                      placeholder="jan.novak@email.cz"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">O co máte zájem?</label>
                    <div className="relative">
                      <select 
                        id="subject"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white appearance-none cursor-pointer"
                        defaultValue=""
                      >
                        <option value="" disabled>Vyberte z nabídky...</option>
                        <option value="pojisteni">Pojištění (Životní / Majetek / Auto)</option>
                        <option value="investice">Investice a spoření</option>
                        <option value="hypoteka">Hypotéka / Úvěr</option>
                        <option value="podnikani">Pojištění pro firmy</option>
                        <option value="spoluprace">Kariéra / Spolupráce</option>
                        <option value="jine">Jiný dotaz</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Vaše zpráva</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                    placeholder="Popište stručně Váš požadavek..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 mb-4">
                   <div className="flex h-5 items-center">
                     <input type="checkbox" id="consent" required className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"/>
                   </div>
                   <label htmlFor="consent" className="text-xs text-gray-500 leading-snug">
                     Souhlasím se zpracováním osobních údajů pro účely vyřízení poptávky v souladu s <a href="/dokumenty" className="underline hover:text-primary">Zásadami ochrany osobních údajů</a>.
                   </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-primary hover:bg-primary-light text-white px-10 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Odeslat zprávu
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
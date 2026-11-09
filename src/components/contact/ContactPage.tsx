import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BRAND_NAME } from '../../data/mockData';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2, Building, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please fill out your name and email address.');
      return;
    }
    setIsSubmitted(true);
    try {
      confetti({ particleCount: 60, spread: 50 });
    } catch {
      // ignore
    }
  };

  const showrooms = [
    {
      city: 'Silicon Valley Innovation Hub',
      address: '450 Innovation Parkway, Palo Alto, CA 94304',
      phone: '+1 (650) 843-9020',
      hours: 'Mon – Sat: 09:00 – 19:00',
    },
    {
      city: 'Bengaluru Tech & Experience Center',
      address: 'Plot 18, Electronic City Phase 1, Bengaluru 560100',
      phone: '+91 80 4938 1200',
      hours: 'Mon – Sun: 10:00 – 20:00',
    },
    {
      city: 'Munich Automotive Engineering Center',
      address: 'Leopoldstraße 120, 80802 München, Germany',
      phone: '+49 89 244 1900',
      hours: 'Mon – Fri: 08:30 – 18:00',
    },
    {
      city: 'Tokyo Mobility Studio',
      address: 'Roppongi Hills Mori Tower, Minato City, Tokyo',
      phone: '+81 3 5500 8120',
      hours: 'Mon – Sun: 10:00 – 21:00',
    },
  ];

  return (
    <div className="pt-24 pb-20 px-6 md:px-12 bg-[#070709] min-h-screen text-white space-y-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto space-y-4 pt-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-tech uppercase tracking-[0.25em] text-white/70">
          <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
          GLOBAL CONNECTIVITY
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase font-display leading-[0.95]">
          CONTACT & SHOWROOMS
        </h1>
        <p className="text-base sm:text-lg text-white/70 font-light font-sans max-w-2xl">
          Connect with our central mobility concierge, schedule corporate fleet consultations, or visit an experience center.
        </p>
      </div>

      {/* Grid: Showrooms + Contact Form */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Global Experience Centers */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-xl font-bold font-display uppercase tracking-wider text-white">
            FLAGSHIP EXPERIENCE HUBS
          </h2>

          <div className="space-y-4">
            {showrooms.map((hub, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white font-display">{hub.city}</h3>
                  <span className="text-[10px] font-tech uppercase tracking-widest text-emerald-400">OPEN TODAY</span>
                </div>

                <div className="space-y-1.5 text-xs text-white/70 font-sans">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-white/40 mt-0.5 shrink-0" />
                    <span>{hub.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-white/40" />
                    <span>{hub.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-white/40" />
                    <span>{hub.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Direct Dispatch Form */}
        <div className="lg:col-span-6">
          {!isSubmitted ? (
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0e0e13] border border-white/10 space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-display uppercase text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  Our team responds to all verified technical & retail inquiries within 2 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-tech text-white/60 mb-1">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-tech text-white/60 mb-1">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      placeholder="marcus@vance.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-tech text-white/60 mb-1">PHONE NUMBER</label>
                    <input
                      type="tel"
                      placeholder="+1 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-tech text-white/60 mb-1">SUBJECT / TOPIC</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#13141c] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="General Inquiry">General Product Inquiry</option>
                    <option value="Corporate Fleet EV">Corporate Fleet EV Order</option>
                    <option value="Mega Solar Ground Project">Mega Solar Ground Project (1MW+)</option>
                    <option value="Media & Press">Media & Press Relations</option>
                    <option value="Customer Support">Customer Telematics Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-tech text-white/60 mb-1">MESSAGE</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can our automotive or clean energy engineering team assist you today?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-[0.25em] hover:bg-neutral-200 transition-colors shadow-lg flex items-center justify-center gap-2"
                  data-cursor-text="SEND"
                >
                  <span>TRANSMIT MESSAGE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 rounded-3xl bg-[#0e0e13] border border-emerald-500/30 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase">
                MESSAGE DISPATCHED
              </h3>
              <p className="text-sm text-white/70 max-w-sm mx-auto">
                Thank you, {formData.name}. Your message regarding <span className="text-white font-semibold">{formData.subject}</span> has been routed to our regional office.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 rounded-full border border-white/20 hover:border-white text-xs font-tech uppercase text-white mt-4"
              >
                Send Another Message
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

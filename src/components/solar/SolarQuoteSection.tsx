import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SolarQuoteRequest } from '../../types';
import { Sun, CheckCircle2, ArrowRight, ShieldCheck, MapPin, Phone, Mail, User, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const SolarQuoteSection: React.FC = () => {
  const [formData, setFormData] = useState<SolarQuoteRequest>({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    propertyType: 'Residential',
    monthlyElectricityBill: 8500,
    roofAreaSqFt: 800,
    batteryBackupNeeded: true,
    timeline: 'Immediate (1-2 weeks)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert('Please fill in your contact information.');
      return;
    }
    setIsSubmitted(true);
    try {
      confetti({ particleCount: 75, spread: 55, origin: { y: 0.65 } });
    } catch {
      // ignore
    }
  };

  return (
    <section id="quote" className="py-24 px-6 md:px-12 bg-[#07080c] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20 text-xs font-tech uppercase tracking-[0.25em] text-amber-200">
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            ZERO-OBLIGATION SITE SURVEY & QUOTE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-display">
            GET A SOLAR QUOTE
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-sans">
            Our certified solar structural engineers will model your roof via 3D LiDAR satellite, assess shading, and prepare a guaranteed generation blueprint.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!isSubmitted ? (
            <div className="rounded-3xl bg-[#0d0f15] border border-white/10 p-6 sm:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">FULL NAME</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">PHONE NUMBER</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">EMAIL ADDRESS</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">CITY / LOCATION</label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mumbai, Austin, London"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">PROPERTY TYPE</label>
                    <select
                      value={formData.propertyType}
                      onChange={(e: any) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-[#141720] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors appearance-none"
                    >
                      <option value="Residential">Residential Villa / Independent House</option>
                      <option value="Commercial">Commercial Building / Office</option>
                      <option value="Industrial">Industrial Plant / Warehouse</option>
                      <option value="Farmhouse">Agricultural Farmhouse</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">INSTALLATION TIMELINE</label>
                    <select
                      value={formData.timeline}
                      onChange={(e: any) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[#141720] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors appearance-none"
                    >
                      <option value="Immediate (1-2 weeks)">Immediate (1-2 weeks)</option>
                      <option value="Next Month">Next Month</option>
                      <option value="Exploring options">Exploring options / Budgeting</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">EST. MONTHLY POWER BILL</label>
                    <input
                      type="number"
                      placeholder="8500"
                      value={formData.monthlyElectricityBill}
                      onChange={(e) => setFormData({ ...formData, monthlyElectricityBill: Number(e.target.value) })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-6">
                    <input
                      type="checkbox"
                      id="batteryNeeded"
                      checked={formData.batteryBackupNeeded}
                      onChange={(e) => setFormData({ ...formData, batteryBackupNeeded: e.target.checked })}
                      className="w-5 h-5 rounded accent-amber-400 cursor-pointer"
                    />
                    <label htmlFor="batteryNeeded" className="text-xs text-white/80 cursor-pointer">
                      Include PowerVault Battery Storage in proposal (for blackout immunity)
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">SPECIFIC REQUIREMENTS (OPTIONAL)</label>
                  <textarea
                    rows={3}
                    placeholder="Provide any details on roof structure (RCC flat roof, metal shed, tiled), net metering requirements, or EV charging integration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-[0.25em] hover:bg-neutral-200 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                  data-cursor-text="SUBMIT"
                >
                  <span>REQUEST TAILORED SOLAR QUOTATION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl bg-[#0d0f15] border border-amber-400/30 p-8 sm:p-12 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                THANK YOU.
              </h3>
              <p className="text-sm text-white/70 max-w-md mx-auto">
                Your solar quotation request for <span className="text-white font-semibold">{formData.location || 'your property'}</span> has been assigned to our Senior Renewable Energy Architect. We will deliver a 3D structural shadow analysis and ROI blueprint within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-white/20 hover:border-white text-xs font-tech uppercase text-white"
                >
                  Request Another Quote
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

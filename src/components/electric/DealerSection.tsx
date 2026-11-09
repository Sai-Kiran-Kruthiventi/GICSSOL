import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DealerInquiry } from '../../types';
import { BRAND_NAME } from '../../data/mockData';
import { Building2, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const DealerSection: React.FC = () => {
  const [formData, setFormData] = useState<DealerInquiry>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    investmentRange: '$150,000 - $300,000 / ₹1.2 Cr - ₹2.5 Cr',
    showroomAreaSqFt: '2,500 - 4,000 sq.ft.',
    businessBackground: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in your contact information.');
      return;
    }
    setIsSubmitted(true);
    try {
      confetti({ particleCount: 70, spread: 50, origin: { y: 0.7 } });
    } catch {
      // ignore
    }
  };

  return (
    <section id="dealer" className="py-24 px-6 md:px-12 bg-[#0a0a0e] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-tech uppercase tracking-[0.25em] text-white/70">
              <Building2 className="w-3.5 h-3.5 text-cyan-400" />
              FRANCHISE PARTNERSHIP
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-display">
              BECOME A DEALER
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60 font-sans">
            Join the fastest-growing premium electric mobility & solar ecosystem network. High-margin vehicle sales, battery swaps, service revenue, and solar cross-selling.
          </p>
        </div>

        {/* Form & Value Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Value Props */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-4">
              <h3 className="text-xl font-bold text-white font-display">
                Why Partner with {BRAND_NAME}?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400 shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Dual Revenue Streams</h4>
                    <p className="text-xs text-white/60 mt-0.5">
                      Earn from EV scooter/bike retail, certified accessories, fast-charging hub fees, plus rooftop solar referral commissions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/10 text-white shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Turnkey Showroom Architecture</h4>
                    <p className="text-xs text-white/60 mt-0.5">
                      Complete 3D architectural blueprints, luxury furniture, digital interactive displays, and VR configuration stations provided.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">National Telematics & Marketing Support</h4>
                    <p className="text-xs text-white/60 mt-0.5">
                      Pre-qualified digital leads routed directly to your franchise CRM with local test-drive demand generation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Franchise Tier Badge */}
            <div className="p-5 rounded-2xl bg-[#12131a] border border-white/10 space-y-2 text-xs">
              <div className="text-white/40 uppercase font-tech text-[10px]">AVAILABLE TIERS</div>
              <div className="text-white font-bold text-sm">Studio Experience Hub &bull; Flagship Showroom &bull; Regional 3S Center</div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            {!isSubmitted ? (
              <div className="rounded-3xl bg-[#0e0f14] border border-white/10 p-6 sm:p-10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">FULL NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="Johnathan Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">COMPANY / ENTITY NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="Apex Mobility Ventures"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">PHONE NUMBER</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">OFFICIAL EMAIL</label>
                      <input
                        type="email"
                        required
                        placeholder="partner@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">TARGET CITY</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dallas / Bengaluru / Milan"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">STATE / PROVINCE</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Texas / Karnataka"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">INVESTMENT BAND</label>
                      <select
                        value={formData.investmentRange}
                        onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
                        className="w-full bg-[#14151e] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors appearance-none"
                      >
                        <option value="$100k - $250k / ₹80L - ₹2Cr">$100k - $250k / ₹80L - ₹2Cr</option>
                        <option value="$250k - $500k / ₹2Cr - ₹4Cr">$250k - $500k / ₹2Cr - ₹4Cr</option>
                        <option value="$500k - $1M+ / ₹4Cr - ₹8Cr+">$500k - $1M+ / ₹4Cr - ₹8Cr+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">SHOWROOM / LAND AREA</label>
                      <select
                        value={formData.showroomAreaSqFt}
                        onChange={(e) => setFormData({ ...formData, showroomAreaSqFt: e.target.value })}
                        className="w-full bg-[#14151e] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors appearance-none"
                      >
                        <option value="1,500 - 2,500 sq.ft. (Studio)">1,500 - 2,500 sq.ft. (Studio)</option>
                        <option value="2,500 - 5,000 sq.ft. (Flagship)">2,500 - 5,000 sq.ft. (Flagship)</option>
                        <option value="5,000+ sq.ft. (Mega 3S Hub)">5,000+ sq.ft. (Mega 3S Hub)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-tech text-white/60 mb-1.5">EXPERIENCE & NOTES</label>
                    <textarea
                      rows={3}
                      placeholder="Brief background on existing automotive/dealership experience or proposed commercial property..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-[0.25em] hover:bg-neutral-200 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                    data-cursor-text="SUBMIT"
                  >
                    <span>SUBMIT DEALERSHIP DOSSIER</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl bg-[#0e0f14] border border-emerald-500/30 p-8 sm:p-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  THANK YOU.
                </h3>
                <p className="text-sm text-white/70 max-w-md mx-auto">
                  Your dealership franchise application for <span className="text-white font-semibold">{formData.city || 'your region'}</span> has been received. Our Vice President of Global Network Expansion will connect with you within 48 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-white/20 hover:border-white text-xs font-tech uppercase text-white"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

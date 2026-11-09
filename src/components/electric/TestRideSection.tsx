import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ELECTRIC_MODELS, BRAND_NAME } from '../../data/mockData';
import { TestRideBooking } from '../../types';
import { Calendar, Clock, MapPin, CheckCircle, ArrowRight, ShieldCheck, QrCode, Sparkles, User, Mail, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TestRideSectionProps {
  preselectedModelId?: string;
}

export const TestRideSection: React.FC<TestRideSectionProps> = ({
  preselectedModelId = 'volt-x1',
}) => {
  const [formData, setFormData] = useState<TestRideBooking>({
    name: '',
    email: '',
    phone: '',
    city: 'Mumbai',
    preferredModelId: preselectedModelId,
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    preferredTime: '11:00 AM - 01:00 PM',
    locationType: 'showroom',
    experienceLevel: 'intermediate',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const selectedModel = ELECTRIC_MODELS.find((m) => m.id === formData.preferredModelId) || ELECTRIC_MODELS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in your name, phone number, and email.');
      return;
    }

    const randomCode = `VLT-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationCode(randomCode);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#38bdf8', '#fbbf24', '#a1a1aa'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="test-drive" className="py-24 px-6 md:px-12 bg-[#070709] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-tech uppercase tracking-[0.25em] text-white/70">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            EXCLUSIVE TEST DRIVE EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-display">
            BOOK A TEST RIDE
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-sans">
            Feel the instantaneous wheel torque, active suspension damping, and aerospace handling on track or delivered directly to your doorstep.
          </p>
        </div>

        {/* Interactive Experience Grid */}
        <div className="max-w-4xl mx-auto">
          {!isSubmitted ? (
            <div className="rounded-3xl bg-[#0d0d12] border border-white/10 p-6 sm:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Model Selection Chips */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase font-tech tracking-[0.2em] text-white/60">
                    1. SELECT YOUR PREFERRED VEHICLE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {ELECTRIC_MODELS.map((model) => (
                      <button
                        type="button"
                        key={model.id}
                        onClick={() => setFormData({ ...formData, preferredModelId: model.id })}
                        className={`p-3.5 rounded-xl text-left border transition-all duration-200 ${
                          formData.preferredModelId === model.id
                            ? 'bg-white text-black border-white shadow-md'
                            : 'bg-white/[0.03] text-white border-white/[0.08] hover:border-white/20'
                        }`}
                      >
                        <div className="text-xs font-bold font-display">{model.name}</div>
                        <div className={`text-[10px] truncate ${formData.preferredModelId === model.id ? 'text-black/70' : 'text-white/40'}`}>
                          {model.category}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Personal Contact Info */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase font-tech tracking-[0.2em] text-white/60">
                    2. RIDER DETAILS
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <div className="relative">
                        <User className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="relative">
                        <Phone className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="Phone / Mobile"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="relative">
                        <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Schedule & Location Details */}
                <div className="space-y-3">
                  <label className="block text-xs uppercase font-tech tracking-[0.2em] text-white/60">
                    3. DATE, TIME & LOCATION
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full bg-[#12131a] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors appearance-none"
                        >
                          <option value="Mumbai">Mumbai Experience Center</option>
                          <option value="Bengaluru">Bengaluru Tech Hub</option>
                          <option value="Delhi NCR">Delhi NCR Flagship</option>
                          <option value="Hyderabad">Hyderabad Studio</option>
                          <option value="Pune">Pune Test Track</option>
                          <option value="San Francisco">San Francisco Flagship</option>
                          <option value="London">London Hub</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="relative">
                        <Clock className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full bg-[#12131a] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors appearance-none"
                        >
                          <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                          <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                          <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                          <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                          <option value="06:00 PM - 08:00 PM">06:00 PM - 08:00 PM (Night Track)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Option Toggle */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <label className="flex items-center gap-2 text-xs text-white/80 cursor-pointer">
                    <input
                      type="radio"
                      name="locationType"
                      checked={formData.locationType === 'showroom'}
                      onChange={() => setFormData({ ...formData, locationType: 'showroom' })}
                      className="accent-white"
                    />
                    <span>Flagship Experience Center (Track Included)</span>
                  </label>

                  <label className="flex items-center gap-2 text-xs text-white/80 cursor-pointer">
                    <input
                      type="radio"
                      name="locationType"
                      checked={formData.locationType === 'home_delivery'}
                      onChange={() => setFormData({ ...formData, locationType: 'home_delivery' })}
                      className="accent-white"
                    />
                    <span>Doorstep VIP Concierge Delivery</span>
                  </label>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-[0.25em] hover:bg-neutral-200 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                    data-cursor-text="CONFIRM"
                  >
                    <span>CONFIRM & GENERATE TEST RIDE PASS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Digital Wallet Boarding Pass State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-3xl bg-gradient-to-br from-[#12141c] to-[#0a0a0f] border border-white/20 p-6 sm:p-10 shadow-2xl space-y-6 text-white"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-[11px] uppercase font-tech tracking-[0.2em] text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" />
                    TEST RIDE PASS CONFIRMED
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display uppercase mt-1">
                    {formData.name} &bull; {selectedModel.name}
                  </h3>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-white/10 font-tech text-right">
                  <div className="text-[10px] text-white/40 uppercase">PASS IDENTIFIER</div>
                  <div className="text-sm font-bold text-white tracking-widest">{confirmationCode}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2">
                <div>
                  <div className="text-[10px] uppercase font-tech text-white/40">SCHEDULED DATE</div>
                  <div className="text-sm font-bold text-white">{formData.preferredDate}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-tech text-white/40">TIME WINDOW</div>
                  <div className="text-sm font-bold text-white">{formData.preferredTime}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-tech text-white/40">EXPERIENCE HUB</div>
                  <div className="text-sm font-bold text-white">{formData.city}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-tech text-white/40">MODE</div>
                  <div className="text-sm font-bold text-white uppercase">{formData.locationType}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white">Dedicated EV Specialist Assigned</div>
                  <div className="text-xs text-white/60">
                    A confirmation SMS & calendar invite has been dispatched to {formData.phone} and {formData.email}.
                  </div>
                </div>
                <QrCode className="w-12 h-12 text-white/80 shrink-0 hidden sm:block" />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-white/20 hover:border-white text-xs font-tech uppercase tracking-wider text-white"
                >
                  Book Another Test Ride
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

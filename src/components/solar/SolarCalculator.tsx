import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { SOLAR_CALCULATOR_PRESETS, BRAND_NAME } from '../../data/mockData';
import { Sun, Calculator, Zap, Shield, Leaf, TrendingUp, ArrowRight, BatteryCharging, CheckCircle, Sliders } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SolarCalculatorProps {
  onQuoteWithCalculation?: (calcDetails: any) => void;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({
  onQuoteWithCalculation,
}) => {
  const [selectedCityIdx, setSelectedCityIdx] = useState(0);
  const [monthlyBill, setMonthlyBill] = useState(8500); // Default ₹8,500
  const [roofAreaSqFt, setRoofAreaSqFt] = useState(650); // Default 650 sq ft
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial' | 'industrial'>('residential');
  const [includeBattery, setIncludeBattery] = useState(false);
  const [isSurveyLocked, setIsSurveyLocked] = useState(false);

  const city = SOLAR_CALCULATOR_PRESETS.cities[selectedCityIdx];
  const isUSD = city.currency === 'USD';
  const isEUR = city.currency === 'EUR';
  const currencySymbol = city.symbol;

  // Real-world mathematical solar calculation logic
  const calculation = useMemo(() => {
    const tariffPerKwh = city.costPerKwh;
    // Units consumed per month = Monthly Bill / Tariff
    const monthlyKwhConsumed = Math.max(50, Math.round(monthlyBill / tariffPerKwh));
    const dailyKwhNeeded = monthlyKwhConsumed / 30;

    // Daily generation per kW = Peak Sun Hours * 0.78 System Performance Ratio
    const dailyGenPerKw = city.solarHours * 0.78;
    
    // Theoretical kW required
    let rawKwNeeded = dailyKwhNeeded / dailyGenPerKw;

    // Roof constraint (roughly 90 sq ft per kW of modern high-efficiency panels)
    const maxKwFromRoof = Math.max(1, roofAreaSqFt / 85);

    // Recommended kW capped by roof
    const systemSizeKw = Number(Math.min(rawKwNeeded, maxKwFromRoof).toFixed(1));
    const panelCount = Math.ceil((systemSizeKw * 1000) / 540); // 540W Monocrystalline panels

    // Monthly & Annual Generation
    const monthlyGenerationKwh = Math.round(systemSizeKw * dailyGenPerKw * 30);
    const annualGenerationKwh = Math.round(monthlyGenerationKwh * 12);

    // Financial Savings
    const estimatedMonthlySavings = Math.min(monthlyBill, Math.round(monthlyGenerationKwh * tariffPerKwh));
    const estimatedAnnualSavings = estimatedMonthlySavings * 12;
    const estimated25YearSavings = Math.round(estimatedAnnualSavings * 25 * 1.03); // Assuming 3% annual grid tariff inflation

    // System estimated cost (approx $950 / ₹48,000 per kW installed + battery)
    const baseCost = isUSD 
      ? systemSizeKw * 1800 
      : isEUR 
        ? systemSizeKw * 1650 
        : systemSizeKw * 52000;
    
    const batteryCost = includeBattery ? (isUSD ? 4500 : isEUR ? 4200 : 185000) : 0;
    const totalSystemCost = Math.round(baseCost + batteryCost);

    // Payback period
    const paybackPeriodYears = Number((totalSystemCost / (estimatedAnnualSavings || 1)).toFixed(1));

    // Environmental metrics
    const co2OffsetTonsPerYear = Number(((annualGenerationKwh * 0.82) / 1000).toFixed(1)); // 0.82 kg CO2/kWh
    const treesEquivalent = Math.round(co2OffsetTonsPerYear * 45);

    return {
      monthlyKwhConsumed,
      systemSizeKw,
      panelCount,
      monthlyGenerationKwh,
      annualGenerationKwh,
      estimatedMonthlySavings,
      estimatedAnnualSavings,
      estimated25YearSavings,
      paybackPeriodYears,
      totalSystemCost,
      co2OffsetTonsPerYear,
      treesEquivalent,
    };
  }, [city, monthlyBill, roofAreaSqFt, includeBattery]);

  const handleLockIn = () => {
    setIsSurveyLocked(true);
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
    if (onQuoteWithCalculation) {
      onQuoteWithCalculation({
        city: city.name,
        monthlyBill,
        roofAreaSqFt,
        systemSizeKw: calculation.systemSizeKw,
        annualSavings: calculation.estimatedAnnualSavings,
        includeBattery,
      });
    }
  };

  return (
    <section id="calculator" className="py-24 px-6 md:px-12 bg-[#0a0c12] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/[0.08] border border-amber-400/20 text-xs font-tech text-amber-300 uppercase tracking-[0.25em]">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            LIVE SOLAR YIELD & PAYBACK SIMULATOR
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase font-display">
            SOLAR SAVINGS CALCULATOR
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-sans">
            Calculate your custom system size, monthly tariff reduction, 25-year cumulative energy dividends, and carbon offset in real-time.
          </p>
        </div>

        {/* Calculator Dual Column Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0f1118] border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-bold uppercase font-tech tracking-wider text-white">
                PROJECT PARAMETERS
              </span>
              <Sliders className="w-4 h-4 text-white/40" />
            </div>

            {/* Location Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-tech text-white/60 uppercase">
                LOCATION & SOLAR IRRADIANCE ZONE
              </label>
              <select
                value={selectedCityIdx}
                onChange={(e) => {
                  const newIdx = Number(e.target.value);
                  setSelectedCityIdx(newIdx);
                  const newCity = SOLAR_CALCULATOR_PRESETS.cities[newIdx];
                  if (newCity.currency === 'USD') setMonthlyBill(320);
                  else if (newCity.currency === 'EUR') setMonthlyBill(280);
                  else setMonthlyBill(8500);
                }}
                className="w-full bg-[#161822] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
              >
                {SOLAR_CALCULATOR_PRESETS.cities.map((c, idx) => (
                  <option key={c.name} value={idx}>
                    {c.name} ({c.solarHours} Peak Sun Hrs &bull; {c.symbol}{c.costPerKwh}/unit)
                  </option>
                ))}
              </select>
            </div>

            {/* Monthly Bill Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-tech text-white/60 uppercase">
                  MONTHLY ELECTRICITY BILL
                </label>
                <span className="text-base font-extrabold text-amber-400 font-tech">
                  {currencySymbol}{monthlyBill.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={isUSD || isEUR ? 50 : 1500}
                max={isUSD || isEUR ? 2000 : 75000}
                step={isUSD || isEUR ? 10 : 500}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-white/40 font-tech">
                <span>{currencySymbol}{isUSD || isEUR ? '50' : '1,500'}</span>
                <span>{currencySymbol}{isUSD || isEUR ? '2,000+' : '75,000+'}</span>
              </div>
            </div>

            {/* Roof Area Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-tech text-white/60 uppercase">
                  ESTIMATED SHADOW-FREE ROOF AREA
                </label>
                <span className="text-base font-extrabold text-white font-tech">
                  {roofAreaSqFt.toLocaleString()} sq.ft.
                </span>
              </div>
              <input
                type="range"
                min={200}
                max={5000}
                step={50}
                value={roofAreaSqFt}
                onChange={(e) => setRoofAreaSqFt(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[10px] text-white/40 font-tech">
                <span>200 sq.ft. (Compact Roof)</span>
                <span>5,000+ sq.ft. (Commercial)</span>
              </div>
            </div>

            {/* Property Type Toggle */}
            <div className="space-y-2">
              <label className="block text-xs font-tech text-white/60 uppercase">
                PROPERTY CLASSIFICATION
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['residential', 'commercial', 'industrial'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setPropertyType(type)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-tech uppercase tracking-wider transition-colors border ${
                      propertyType === type
                        ? 'bg-white text-black font-bold border-white'
                        : 'bg-white/[0.03] text-white/60 border-white/[0.08] hover:border-white/20'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Battery Backup Toggle */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
                  Add PowerVault Storage (10kWh)
                </span>
                <span className="text-[11px] text-white/50 block">
                  100% Blackout Immunity & Nighttime Self-Power
                </span>
              </div>
              <input
                type="checkbox"
                checked={includeBattery}
                onChange={(e) => setIncludeBattery(e.target.checked)}
                className="w-5 h-5 rounded accent-amber-400 cursor-pointer"
              />
            </div>
          </div>

          {/* Right Column: Calculated Yield & Financial Dashboard */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0e1017] border border-amber-400/20 p-6 sm:p-10 space-y-8 shadow-2xl relative overflow-hidden">
            {/* Ambient Background Shimmer */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-[10px] uppercase font-tech tracking-[0.2em] text-amber-400">
                  OPTIMAL SYSTEM ARCHITECTURE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-0.5">
                  {calculation.systemSizeKw} kW High-Efficiency Array
                </h3>
                <span className="text-xs text-white/50 font-tech">
                  {calculation.panelCount} &times; 540W Monocrystalline TOPCon Modules
                </span>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] uppercase font-tech text-white/40 block">ESTIMATED PAYBACK</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-tech">
                  {calculation.paybackPeriodYears} <span className="text-sm text-emerald-300 font-normal">YEARS</span>
                </span>
              </div>
            </div>

            {/* Financial Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="text-[10px] uppercase font-tech text-white/40 block">MONTHLY SAVINGS</span>
                <div className="text-2xl font-extrabold text-white font-tech">
                  {currencySymbol}{calculation.estimatedMonthlySavings.toLocaleString()}
                </div>
                <span className="text-[11px] text-white/50 block">Slashing ~95% of bill</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="text-[10px] uppercase font-tech text-white/40 block">ANNUAL GENERATION</span>
                <div className="text-2xl font-extrabold text-white font-tech">
                  {calculation.annualGenerationKwh.toLocaleString()} <span className="text-xs font-normal text-white/60">kWh</span>
                </div>
                <span className="text-[11px] text-white/50 block">Clean green power</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                <span className="text-[10px] uppercase font-tech text-white/40 block">25-YEAR NET DIVIDEND</span>
                <div className="text-2xl font-extrabold text-amber-300 font-tech">
                  {currencySymbol}{calculation.estimated25YearSavings.toLocaleString()}
                </div>
                <span className="text-[11px] text-white/50 block">Lifecycle financial ROI</span>
              </div>
            </div>

            {/* Environmental Impact Bar */}
            <div className="p-4 rounded-2xl bg-emerald-500/[0.06] border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Environmental Impact Offset</span>
                  <span className="text-xs text-white/60">
                    Eliminates {calculation.co2OffsetTonsPerYear} tons of carbon annually &bull; Equivalent to {calculation.treesEquivalent} mature trees planted
                  </span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-[11px] font-tech font-bold uppercase">
                  100% ESG Certified
                </span>
              </div>
            </div>

            {/* Action Area */}
            <div className="pt-2">
              {!isSurveyLocked ? (
                <button
                  onClick={handleLockIn}
                  className="w-full py-4 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-[0.25em] hover:bg-amber-100 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                  data-cursor-text="LOCK IN"
                >
                  <span>LOCK IN THIS PROPOSAL & REQUEST SITE SURVEY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle className="w-4 h-4" />
                    PROPOSAL SPECS PRESERVED
                  </div>
                  <p className="text-xs text-white/80">
                    Your customized {calculation.systemSizeKw} kW configuration has been locked. Proceed to the quote section below to schedule your engineering site survey!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

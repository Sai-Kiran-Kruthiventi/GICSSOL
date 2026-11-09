import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { SplitHero } from './components/landing/SplitHero';
import { Navbar } from './components/common/Navbar';
import { MenuOverlay } from './components/common/MenuOverlay';
import { Footer } from './components/common/Footer';
import { ElectricHero } from './components/electric/ElectricHero';
import { ProductShowcase } from './components/electric/ProductShowcase';
import { ProductDetailModal } from './components/electric/ProductDetailModal';
import { TestRideSection } from './components/electric/TestRideSection';
import { DealerSection } from './components/electric/DealerSection';
import { SolarHero } from './components/solar/SolarHero';
import { SolarSolutions } from './components/solar/SolarSolutions';
import { SolarCalculator } from './components/solar/SolarCalculator';
import { SolarQuoteSection } from './components/solar/SolarQuoteSection';
import { AboutPage } from './components/about/AboutPage';
import { ContactPage } from './components/contact/ContactPage';
import { ElectricModel, SolarSolution } from './types';

// Scroll to top or handle anchor hashes smoothly on route changes
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

// ---------------- Electric Mobility Full Page ----------------
function ElectricPage() {
  const [selectedModelForModal, setSelectedModelForModal] = useState<ElectricModel | null>(null);
  const [testRideModelId, setTestRideModelId] = useState<string>('volt-x1');

  const handleBookTestRide = (modelId?: string) => {
    if (modelId) setTestRideModelId(modelId);
    const el = document.getElementById('test-drive');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreModels = () => {
    const el = document.getElementById('models');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#070709] min-h-screen text-white">
      <ElectricHero
        onBookTestRide={handleBookTestRide}
        onExploreModels={handleExploreModels}
      />
      <ProductShowcase
        onSelectModel={(model) => setSelectedModelForModal(model)}
        onBookTestRide={(id) => handleBookTestRide(id)}
      />
      <TestRideSection preselectedModelId={testRideModelId} />
      <DealerSection />

      {/* Detail Inspection Modal */}
      <ProductDetailModal
        model={selectedModelForModal}
        onClose={() => setSelectedModelForModal(null)}
        onBookTestRide={(id) => {
          setSelectedModelForModal(null);
          handleBookTestRide(id);
        }}
      />
    </div>
  );
}

// ---------------- Solar Energy Full Page ----------------
function SolarPage() {
  const handleCalculate = () => {
    const el = document.getElementById('calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRequestQuote = () => {
    const el = document.getElementById('quote');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuoteForSolution = (solution: SolarSolution) => {
    const el = document.getElementById('quote');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#080a0f] min-h-screen text-white">
      <SolarHero
        onCalculate={handleCalculate}
        onRequestQuote={handleRequestQuote}
      />
      <SolarSolutions onRequestQuoteForSolution={handleQuoteForSolution} />
      <SolarCalculator />
      <SolarQuoteSection />
    </div>
  );
}

// ---------------- Root Application Layout ----------------
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#070709] text-[#F3F4F6] flex flex-col font-sans antialiased">
        {/* Global Floating Navigation */}
        <Navbar
          isMenuOpen={isMenuOpen}
          onOpenMenu={() => setIsMenuOpen((prev) => !prev)}
        />

        {/* Fullscreen Overlay Menu */}
        <MenuOverlay
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />

        {/* Route Scroll Helper */}
        <ScrollHandler />

        {/* Main Content Viewport */}
        <main className="flex-1">
          <Routes>
            {/* Split Screen Centerpiece */}
            <Route path="/" element={<SplitHero onSelectSector={() => {}} />} />

            {/* Electric Mobility Routes */}
            <Route path="/electric" element={<ElectricPage />} />
            <Route path="/electric/models" element={<ElectricPage />} />
            <Route path="/electric/test-drive" element={<ElectricPage />} />
            <Route path="/electric/dealer" element={<ElectricPage />} />

            {/* Solar Energy Routes */}
            <Route path="/solar" element={<SolarPage />} />
            <Route path="/solar/solutions" element={<SolarPage />} />
            <Route path="/solar/calculator" element={<SolarPage />} />
            <Route path="/solar/quote" element={<SolarPage />} />

            {/* General Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Catch-all fallback */}
            <Route path="*" element={<SplitHero onSelectSector={() => {}} />} />
          </Routes>
        </main>

        {/* Global Footer (shown on subpages and landing scroll if expanded) */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

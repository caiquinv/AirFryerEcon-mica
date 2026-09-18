import React, { useState } from 'react';
import { TopUrgencyBar } from './components/TopUrgencyBar';
import { HeroSection } from './components/HeroSection';
import { SocialProofVideo } from './components/SocialProofVideo';
import { SolutionSection } from './components/SolutionSection';
import { ChefAuthoritySection } from './components/ChefAuthoritySection';
import { RecipeCategoriesSection } from './components/RecipeCategoriesSection';
import { BenefitsBar } from './components/BenefitsBar';
import { BonusSection } from './components/BonusSection';
import { CommunitySection } from './components/CommunitySection';
import { PricingOfferSection } from './components/PricingOfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingBottomBar } from './components/FloatingBottomBar';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleScrollToOffer = () => {
    const target = document.getElementById('pricing-cta-button') || document.getElementById('oferta');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.classList.add('ring-4', 'ring-emerald-400', 'ring-offset-2', 'ring-offset-stone-900');
      setTimeout(() => {
        target.classList.remove('ring-4', 'ring-emerald-400', 'ring-offset-2', 'ring-offset-stone-900');
      }, 1800);
    }
  };

  return (
    <div className="min-h-screen bg-[#1e2718] text-stone-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Urgency Countdown Top Bar */}
      <TopUrgencyBar onScrollToOffer={handleScrollToOffer} />

      <main className="flex-1">
        {/* 2. Main Hero with Chef & PDF Book Bundle */}
        <HeroSection onScrollToOffer={handleScrollToOffer} />

        {/* 3. Testemunho de Cliente (Maria, 42 anos) */}
        <SocialProofVideo />

        {/* 4. The Solution ("A solução é mais simples do que imagina...") */}
        <SolutionSection />

        {/* 6. Chef Authority ("Chef António Valente • Mestre da Gastronomia Portuguesa") */}
        <ChefAuthoritySection />

        {/* 7. Recipe Previews by Category */}
        <RecipeCategoriesSection
          onScrollToOffer={handleScrollToOffer}
        />

        {/* 8. Quick 3-Pillar Benefits Bar */}
        <BenefitsBar />

        {/* 9. Exclusive 5 Free Bonuses */}
        <BonusSection onScrollToOffer={handleScrollToOffer} />

        {/* 10. Community & Instagram Proof (+29 mil pessoas) */}
        <CommunitySection />

        {/* 11. Complete Bundle Pricing & Offer */}
        <PricingOfferSection onOpenCheckout={handleOpenCheckout} />

        {/* 12. 7-Day Zero Risk Guarantee */}
        <GuaranteeSection />

        {/* 13. Frequently Asked Questions (FAQ) with final CTA */}
        <FaqSection onScrollToOffer={handleScrollToOffer} />
      </main>

      {/* 14. Footer with copyright & legal policies in PT-PT */}
      <Footer />

      {/* 15. Sticky Floating Bottom Bar with instant CTA */}
      <FloatingBottomBar onScrollToOffer={handleScrollToOffer} />

      {/* 16. Portuguese Checkout Modal with MB WAY, Multibanco & Card */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </div>
  );
}

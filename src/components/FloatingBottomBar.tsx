import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { HOTMART_CHECKOUT_URL } from '../data/content';

interface FloatingBottomBarProps {
  onScrollToOffer?: () => void;
}

export const FloatingBottomBar: React.FC<FloatingBottomBarProps> = ({ onScrollToOffer }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let heroPast = false;
    let offerInView = false;

    const checkState = () => {
      setVisible(heroPast && !offerInView);
    };

    const heroBtn = document.getElementById('hero-cta-button');
    const offerBtn = document.getElementById('pricing-cta-button') || document.getElementById('oferta');

    if (!heroBtn) {
      const handleScrollFallback = () => {
        setVisible(window.scrollY > 500);
      };
      window.addEventListener('scroll', handleScrollFallback, { passive: true });
      return () => window.removeEventListener('scroll', handleScrollFallback);
    }

    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If hero button has scrolled above the viewport
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
            heroPast = true;
          } else {
            heroPast = false;
          }
          checkState();
        });
      },
      { threshold: 0 }
    );

    const offerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          offerInView = entry.isIntersecting;
          checkState();
        });
      },
      { threshold: 0.1 }
    );

    heroObserver.observe(heroBtn);
    if (offerBtn) {
      offerObserver.observe(offerBtn);
    }

    // Also check on scroll to handle rapid scrolls
    const onScroll = () => {
      if (heroBtn) {
        const rect = heroBtn.getBoundingClientRect();
        heroPast = rect.bottom < 0;
      }
      if (offerBtn) {
        const oRect = offerBtn.getBoundingClientRect();
        offerInView = oRect.top < window.innerHeight && oRect.bottom > 0;
      }
      checkState();
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      heroObserver.disconnect();
      offerObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <aside 
      aria-label="Barra de compra rápida" 
      className="fixed bottom-0 inset-x-0 z-40 bg-[#1e2718]/95 backdrop-blur-md border-t border-[#3d4d31] px-3 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] max-h-[64px] sm:max-h-none sm:py-3 shadow-2xl transition-all animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 h-full">
        <div className="hidden sm:block">
          <p className="text-xs font-bold text-white flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Airfryer Económica (250 Receitas + 5 Bónus)
          </p>
          <p className="text-[11px] text-stone-300">
            Apenas <strong className="text-amber-300 font-mono">14,90€</strong> (pagamento único • acesso vitalício)
          </p>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
          <div className="text-right sm:hidden shrink-0 leading-tight">
            <span className="text-[10px] text-stone-400 block line-through font-mono">49,90€</span>
            <span className="text-sm font-black text-amber-300 font-mono">14,90€</span>
          </div>

          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center min-h-[44px] sm:min-h-[48px] bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-5 rounded-xl shadow-lg cursor-pointer transition-all active:scale-98 whitespace-nowrap text-center"
          >
            QUERO AS 250 RECEITAS →
          </a>
        </div>
      </div>
    </aside>
  );
};


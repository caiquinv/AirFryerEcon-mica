import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface FloatingBottomBarProps {
  onScrollToOffer: () => void;
}

export const FloatingBottomBar: React.FC<FloatingBottomBarProps> = ({ onScrollToOffer }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 450px
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#1e2718]/95 backdrop-blur-md border-t border-[#3d4d31] p-3 shadow-2xl transition-all animate-in slide-in-from-bottom duration-300">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        <div className="hidden sm:block">
          <p className="text-xs font-bold text-white flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Airfryer Económica (250 Receitas + 5 Bónus)
          </p>
          <p className="text-[11px] text-stone-300">
            Apenas <strong className="text-amber-300 font-mono">17,90€</strong> (pagamento único • acesso vitalício)
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
          <div className="text-right sm:hidden">
            <span className="text-[10px] text-stone-300 block line-through">112,00€</span>
            <span className="text-sm font-black text-amber-300 font-mono">17,90€</span>
          </div>

          <button
            onClick={onScrollToOffer}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-xs sm:text-sm py-3 px-5 rounded-xl shadow-lg cursor-pointer transition-all active:scale-98 whitespace-nowrap"
          >
            <span>QUERO A AIRFRYER ECONÓMICA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

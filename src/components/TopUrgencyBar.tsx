import React, { useState, useEffect } from 'react';
import { Clock, Flame } from 'lucide-react';

interface TopUrgencyBarProps {
  onScrollToOffer: () => void;
}

export const TopUrgencyBar: React.FC<TopUrgencyBarProps> = ({ onScrollToOffer }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 18,
    seconds: 25,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 1, minutes: 30, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <aside aria-label="Aviso de promoção" className="sticky top-0 z-40 bg-[#161c12] border-b border-[#2d3824] py-2 px-3 text-center shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-xs sm:text-sm font-semibold tracking-wide">
        <span className="flex items-center gap-1.5 text-amber-400 font-bold uppercase">
          <Flame className="w-4 h-4 animate-pulse text-amber-400" />
          A OFERTA ESPECIAL EXPIRA EM:
        </span>
        <span className="flex items-center gap-1 bg-[#232d1d] border border-amber-500/40 text-amber-300 px-2.5 py-0.5 rounded font-mono font-bold text-sm tracking-wider shadow-inner">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          {format(timeLeft.hours)}:{format(timeLeft.minutes)}:{format(timeLeft.seconds)}
        </span>
        <button
          onClick={onScrollToOffer}
          className="hidden sm:inline-flex items-center gap-1 text-xs text-white bg-[#22c55e] hover:bg-[#16a34a] font-bold px-3 py-1 rounded transition-colors duration-150 cursor-pointer"
        >
          Garantir Vaga ➔
        </button>
      </div>
    </aside>
  );
};

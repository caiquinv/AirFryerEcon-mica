import React, { useState, useRef } from 'react';
import { CheckCircle2, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

export const CommunitySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.clientWidth * 0.85;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), TESTIMONIALS_DATA.length - 1));
    }
  };

  const scrollToIndex = (idx: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth * 0.85;
      scrollRef.current.scrollTo({
        left: idx * cardWidth,
        behavior: 'smooth',
      });
      setActiveIndex(idx);
    }
  };

  return (
    <section className="bg-[#424d35] text-white py-12 sm:py-20 border-b border-[#343d2a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          Comunidade em Portugal
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight max-w-2xl mx-auto">
          Famílias portuguesas a cozinhar sem complicações
        </h2>

        <p className="mt-3 text-xs sm:text-sm text-stone-300 uppercase tracking-widest font-bold">
          Mensagens e partilhas reais de quem já tem o livro na cozinha:
        </p>

        {/* ==============================================================
            CELULAR: Carrossel horizontal com swipe e indicadores
           ============================================================== */}
        <div className="sm:hidden mt-6 text-left">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 pt-1 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="snap-center shrink-0 w-[85%] bg-[#313926] border border-[#4d5c3c] rounded-2xl p-4 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#3f4b31]">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      decoding="async"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover border border-amber-400/40"
                    />
                    <div>
                      <h3 className="text-xs font-bold text-white flex items-center gap-1">
                        {t.name}
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      </h3>
                      <span className="text-[10px] text-stone-300">{t.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 mt-2.5 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-stone-200 mt-2 leading-relaxed italic">
                    «{t.message}»
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-[#3f4b31] flex items-center justify-between text-[10px] text-emerald-300">
                  <span className="font-mono">✓ Receita: {t.dishName}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores de swipe */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {TESTIMONIALS_DATA.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Ver depoimento ${i + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeIndex === i ? 'w-5 bg-amber-400' : 'w-2 bg-[#556445]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ==============================================================
            DESKTOP (sm:grid): Grelha com 4 cartões
           ============================================================== */}
        <div className="hidden sm:grid mt-8 grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-[#313926] border border-[#4d5c3c] rounded-2xl p-4 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#3f4b31]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    decoding="async"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover border border-amber-400/40"
                  />
                  <div>
                    <h3 className="text-xs font-bold text-white flex items-center gap-1">
                      {t.name}
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    </h3>
                    <span className="text-[10px] text-stone-300">{t.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 mt-2.5 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-stone-200 mt-2 leading-relaxed italic">
                  «{t.message}»
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-[#3f4b31] flex items-center justify-between text-[10px] text-emerald-300">
                <span className="font-mono">✓ Receita: {t.dishName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


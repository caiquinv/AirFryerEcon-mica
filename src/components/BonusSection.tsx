import React from 'react';
import { Gift, CheckCircle2, Sparkles } from 'lucide-react';
import { BONUS_DATA } from '../data/content';

interface BonusSectionProps {
  onScrollToOffer: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onScrollToOffer }) => {
  return (
    <section className="bg-[#faf7f0] text-stone-900 py-14 sm:py-20 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Gift badge */}
        <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 border border-rose-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
          <Gift className="w-4 h-4 text-rose-600" />
          Oferta Especial Limitada
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
          Bónus Exclusivos que Leva <span className="text-emerald-700 underline decoration-emerald-500 underline-offset-4">Ainda Hoje</span>
        </h2>

        <p className="mt-3 text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Menu do mês, segredo de temperos, molhos caseiros, sumos e guia de limpeza. 5 bónus que complementam perfeitamente as suas 250 receitas — <strong>todos 100% gratuitos</strong> no seu pacote.
        </p>

        {/* 5 Bonus Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {BONUS_DATA.map((bonus, index) => (
            <div
              key={bonus.id}
              className={`bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group ${
                index === 0 ? 'lg:col-span-1 border-amber-300 ring-2 ring-amber-400/20' : ''
              }`}
            >
              {/* Image with overlay tags */}
              <div className="relative h-44 overflow-hidden bg-stone-100">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 right-2.5 bg-rose-600 text-white font-extrabold text-xs px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-yellow-300" />
                  {bonus.tag}
                </div>
                <div className="absolute bottom-2 left-2 bg-stone-950/80 backdrop-blur-xs text-white text-[11px] px-2 py-0.5 rounded font-mono">
                  Bónus #{index + 1}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs text-stone-400 line-through">
                      De {bonus.originalPrice}
                    </span>
                    <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Por 0,00€ (GRÁTIS)
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-stone-900 leading-snug group-hover:text-emerald-700 transition-colors">
                    {bonus.title}
                  </h3>

                  <p className="text-xs font-medium text-amber-700 mt-0.5">
                    {bonus.subtitle}
                  </p>

                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {bonus.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mt-4 pt-3 border-t border-stone-100 space-y-1">
                  {bonus.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-stone-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* 6th Card: All-in-one summary callout */}
          <div className="bg-gradient-to-br from-[#2f3925] to-[#1c2417] text-white rounded-2xl p-6 border border-[#48593a] flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-bold mb-3 shadow">
                🎁
              </div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Valor Somado dos Bónus
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                25,00€ em Presentes
              </h3>
              <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                Ao encomendar o seu acesso hoje, recebe todos os 5 manuais digitais sem pagar mais nenhum cêntimo por eles.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3e4d31]">
              <button
                onClick={onScrollToOffer}
                className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-xs sm:text-sm py-3 px-4 rounded-xl shadow cursor-pointer transition-all active:scale-98 text-center uppercase"
              >
                Garantir Todos os Bónus Grátis ➔
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Clock, Sparkles, Utensils } from 'lucide-react';
import { RECIPES_DATA } from '../data/content';

interface RecipeCategoriesSectionProps {
  onScrollToOffer: () => void;
}

export const RecipeCategoriesSection: React.FC<RecipeCategoriesSectionProps> = ({
  onScrollToOffer,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas as Receitas' },
    { id: 'tradicional', label: '🇵🇹 Clássicos Portugueses' },
    { id: 'carnes-peixes', label: 'Peixes & Carnes da Costa' },
    { id: 'petiscos', label: 'Petiscos & Lanches' },
    { id: 'sobremesas', label: 'Doces Tradicionais' },
  ];

  const filtered =
    activeCategory === 'all'
      ? RECIPES_DATA
      : RECIPES_DATA.filter((r) => r.category === activeCategory);

  return (
    <section className="bg-[#faf7f0] text-stone-900 py-14 sm:py-20 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5 text-amber-700" />
            Gastronomia Portuguesa na Fritadeira
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Veja Algumas das Receitas Nacionais que Vai Fazer em Minutos
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Nada de receitas com ingredientes brasileiros ou americanos que não encontra cá. Pratos com alma portuguesa, estaladiços e suculentos com ingredientes simples do Continente e Pingo Doce.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  activeCategory === c.id
                    ? 'bg-[#3b442f] text-white shadow-md'
                    : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-100'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image & Badges */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  {recipe.time}
                </div>
                <div className="absolute top-2 right-2 bg-emerald-600/90 text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
                  {recipe.ingredientsCount} ingredientes
                </div>
                {recipe.portugueseRegion && (
                  <div className="absolute bottom-2 left-2 bg-[#2d3824]/90 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm border border-amber-400/30">
                    📍 {recipe.portugueseRegion}
                  </div>
                )}
              </div>

              {/* Recipe Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                    {recipe.categoryLabel}
                  </span>
                  <h3 className="text-base font-bold text-stone-900 mt-1 leading-snug">
                    {recipe.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {recipe.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emphatic closure matching the screenshot */}
        <div className="mt-12 bg-[#3b442f] text-white p-6 sm:p-8 rounded-2xl text-center max-w-2xl mx-auto shadow-xl">
          <div className="inline-flex items-center gap-1.5 text-amber-300 font-bold text-sm mb-1">
            <Sparkles className="w-4 h-4 text-amber-400" />
            E Muito Mais! 🍳
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Estas são apenas 8 das 250 receitas testadas
          </h3>
          <p className="text-stone-200 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            Carnes, peixes, massas gratinadas, sobremesas saudáveis, pequenos-almoços e snacks rápidos — tudo minuciosamente testado e calibrado para qualquer fritadeira.
          </p>

          <button
            onClick={onScrollToOffer}
            className="mt-5 inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-emerald-600/30 transition-all cursor-pointer active:scale-98"
          >
            <span>VER TODAS AS 250 RECEITAS AGORA</span>
            <span>➔</span>
          </button>
        </div>
      </div>
    </section>
  );
};

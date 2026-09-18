import React from 'react';
import { X, Clock, Flame, ChefHat, Check, ShoppingCart, Sparkles } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  recipe,
  onClose,
  onOpenCheckout,
}) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white text-stone-900 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Recipe Image Header */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-emerald-600 text-white text-xs font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {recipe.categoryLabel}
                </span>
                {recipe.portugueseRegion && (
                  <span className="bg-amber-400 text-stone-950 text-xs font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    📍 {recipe.portugueseRegion}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1 leading-snug">
                {recipe.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Quick Stats Strip */}
        <div className="bg-stone-100 px-5 py-3 border-b border-stone-200 grid grid-cols-3 text-center text-xs">
          <div>
            <span className="text-stone-500 block">Tempo</span>
            <span className="font-bold text-stone-900 flex items-center justify-center gap-1 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              {recipe.time}
            </span>
          </div>
          <div className="border-x border-stone-200">
            <span className="text-stone-500 block">Calorias</span>
            <span className="font-bold text-stone-900 flex items-center justify-center gap-1 mt-0.5">
              <Flame className="w-3.5 h-3.5 text-rose-600" />
              {recipe.calories}
            </span>
          </div>
          <div>
            <span className="text-stone-500 block">Dificuldade</span>
            <span className="font-bold text-emerald-700 flex items-center justify-center gap-1 mt-0.5">
              <ChefHat className="w-3.5 h-3.5" />
              {recipe.difficulty}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[50vh] overflow-y-auto">
          {/* Ingredients */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <ShoppingCart className="w-4 h-4 text-emerald-600" />
              Ingredientes ({recipe.ingredientsCount}):
            </h4>
            <ul className="space-y-1.5">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                    ✓
                  </span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Modo de Preparação na Airfryer:
            </h4>
            <ol className="space-y-2">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <span className="w-5 h-5 rounded-full bg-[#3b442f] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Modal Footer with CTA */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <span className="text-[11px] text-stone-500 font-medium block">
              Gostou desta receita?
            </span>
            <span className="text-xs font-bold text-stone-900">
              Desbloqueie todas as 250 receitas completas agora!
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenCheckout();
            }}
            className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl shadow cursor-pointer transition-all active:scale-98 whitespace-nowrap"
          >
            Quero as 250 Receitas ➔
          </button>
        </div>
      </div>
    </div>
  );
};

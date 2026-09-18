import React, { useState } from 'react';
import { BookOpen, Smartphone, Monitor, Printer, Download, Check, Sparkles, FileText, ZoomIn } from 'lucide-react';
import { SOLUTION_DATA } from '../data/content';

export const SolutionSection: React.FC = () => {
  const [items, setItems] = useState(SOLUTION_DATA.shoppingListItems);

  const toggleItem = (index: number) => {
    setItems((prev) =>
      prev.map((it, idx) => (idx === index ? { ...it, checked: !it.checked } : it))
    );
  };

  const checkedCount = items.filter((i) => i.checked).length;

  return (
    <section className="bg-[#faf7f0] text-stone-900 py-14 sm:py-20 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Book badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 border border-emerald-300/60 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
          <BookOpen className="w-4 h-4 text-emerald-700" />
          Livro Digital em Formato PDF
        </div>

        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-stone-900 max-w-2xl mx-auto">
          {SOLUTION_DATA.title}
        </h2>

        <p className="mt-4 text-sm sm:text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          {SOLUTION_DATA.description}
        </p>

        {/* Digital E-Book / Tablet PDF Viewer Mockup */}
        <div className="mt-10 max-w-xl mx-auto bg-stone-900 p-3 sm:p-4 rounded-3xl shadow-2xl border-4 border-stone-800 text-left">
          {/* Tablet Camera dot */}
          <div className="w-2.5 h-2.5 bg-stone-700 rounded-full mx-auto mb-2" />

          {/* PDF Reader Interior Container */}
          <div className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm text-stone-900">
            {/* PDF Viewer Header Bar */}
            <div className="bg-stone-100 border-b border-stone-200 px-3 sm:px-4 py-2.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 min-w-0">
                <span className="bg-rose-600 text-white font-black text-[10px] px-1.5 py-0.5 rounded shrink-0">
                  PDF
                </span>
                <span className="font-semibold text-stone-800 truncate text-[11px] sm:text-xs">
                  Airfryer_Economica_250_Receitas.pdf
                </span>
              </div>
              <div className="flex items-center gap-2 text-stone-500 shrink-0 text-[11px]">
                <span className="bg-white px-2 py-0.5 rounded border border-stone-200 font-mono text-[10px]">
                  Pág. 18 / 280
                </span>
                <ZoomIn className="w-3.5 h-3.5 text-stone-400 hidden sm:block" />
              </div>
            </div>

            {/* Simulated Recipe Page Inside the PDF */}
            <div className="p-4 sm:p-5 space-y-3">
              {/* Recipe Chapter Header */}
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">
                  Capítulo 2: Clássicos Portugueses na Airfryer
                </span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                  250 Receitas Testadas
                </span>
              </div>

              {/* Recipe Main Title & Metas */}
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-stone-900 leading-snug">
                  Bacalhau com Crosta de Broa de Milho & Alho
                </h3>
                <div className="mt-1.5 flex items-center gap-2 sm:gap-3 flex-wrap text-[11px] font-semibold text-stone-600">
                  <span className="bg-stone-100 px-2 py-0.5 rounded">⏱ 12 Minutos</span>
                  <span className="bg-stone-100 px-2 py-0.5 rounded">🌡 180°C</span>
                  <span className="bg-stone-100 px-2 py-0.5 rounded">🇵🇹 Minho & Douro</span>
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">285 kcal/dose</span>
                </div>
              </div>

              {/* Ingredients Checklist as presented in the PDF */}
              <div className="mt-2 bg-stone-50 border border-stone-200 rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[11px] font-bold text-stone-700 uppercase tracking-wide flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Ingredientes do Supermercado ({checkedCount}/{items.length})
                  </p>
                  <span className="text-[10px] text-stone-500 font-medium">
                    Continente • Pingo Doce • Lidl
                  </span>
                </div>

                <div className="space-y-1.5">
                  {items.map((it, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => toggleItem(idx)}
                      className={`w-full flex items-center justify-between p-2 rounded-lg border text-xs transition-all text-left cursor-pointer ${
                        it.checked
                          ? 'bg-emerald-50/80 border-emerald-300 text-stone-500 line-through'
                          : 'bg-white border-stone-200 text-stone-900 hover:border-emerald-400 shadow-xs'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                            it.checked
                              ? 'bg-emerald-600 border-emerald-600 text-white'
                              : 'border-stone-300 bg-stone-50'
                          }`}
                        >
                          {it.checked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="font-medium text-[11px] sm:text-xs">{it.item}</span>
                      </div>
                      <span className="text-[9px] text-stone-600 bg-stone-100 px-1.5 py-0.5 rounded font-mono">
                        {it.category}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Chef Note in the PDF */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-2.5 rounded-r-lg text-xs text-amber-950">
                <p className="font-bold text-[11px] text-amber-900">💡 Segredo do Chef António Valente:</p>
                <p className="text-[11px] mt-0.5 text-amber-900/90 leading-relaxed">
                  Pincele a broa esfarelada com azeite virgem extra e uma pitada de pimentão-doce antes de colocar no cesto. Fica estaladiça sem queimar!
                </p>
              </div>

              {/* PDF Footer Bar */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400">
                <span>Airfryer Económica • Livro Digital em PDF (250 Receitas)</span>
                <span>Ficheiro de Alta Resolução</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Multiplatform Badges for the PDF */}
        <div className="mt-8 flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-xs sm:text-sm font-bold text-stone-700">
          <div className="flex items-center gap-1.5 bg-white border border-stone-200 px-3 py-1.5 rounded-full shadow-xs">
            <Smartphone className="w-4 h-4 text-emerald-600" />
            <span>No seu Telemóvel (PDF)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-stone-200 px-3 py-1.5 rounded-full shadow-xs">
            <Monitor className="w-4 h-4 text-sky-600" />
            <span>No Computador e Tablet</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-stone-200 px-3 py-1.5 rounded-full shadow-xs">
            <Printer className="w-4 h-4 text-amber-600" />
            <span>Imprimível em Papel A4</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white border border-stone-200 px-3 py-1.5 rounded-full shadow-xs">
            <Download className="w-4 h-4 text-purple-600" />
            <span>Descarregamento Imediato</span>
          </div>
        </div>
      </div>
    </section>
  );
};

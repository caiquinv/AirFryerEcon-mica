import React from 'react';
import { Award, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { CHEF_DATA } from '../data/content';

export const ChefAuthoritySection: React.FC = () => {
  return (
    <section className="bg-[#4a553c] text-white py-14 sm:py-20 border-b border-[#3b442f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-[#3b442f] border border-[#526042] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle top decoration badge */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Autoria & Credibilidade
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
              {CHEF_DATA.name}
            </h2>
            <p className="text-sm font-semibold text-amber-300">
              {CHEF_DATA.role} • {CHEF_DATA.subtitle}
            </p>
          </div>

          {/* Chef Image with refined styling */}
          <div className="relative max-w-sm mx-auto mb-6 sm:mb-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#5d6d4a]">
              <img
                src="/chef_antonio_valente.webp"
                alt="Chef António Valente"
                loading="lazy"
                decoding="async"
                width={384}
                height={320}
                className="w-full max-h-[200px] sm:max-h-none sm:h-80 object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 sm:p-4 flex items-center justify-between text-xs text-stone-200">
                <span className="font-semibold text-white flex items-center gap-1 text-[11px] sm:text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  +250 Receitas Aprovadas
                </span>
                <span className="bg-emerald-600 text-white font-bold px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
                  🇵🇹 Portugal
                </span>
              </div>
            </div>
          </div>

          {/* Personal message & story */}
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-stone-200 leading-relaxed max-w-2xl mx-auto">
            {/* Primeiro parágrafo mostrado em todas as telas */}
            <p className="first-letter:text-3xl first-letter:font-black first-letter:text-amber-400 first-letter:mr-1">
              {CHEF_DATA.bio}
            </p>

            {/* Citação curta no celular */}
            <div className="block md:hidden bg-[#313927] p-3 rounded-xl border border-[#485539] text-xs text-stone-100 font-medium italic">
              «Criei o livro Airfryer Económica para provar que a culinária tradicional ganha vida nova na fritadeira sem óleo: 250 receitas para poupar tempo e dinheiro.»
            </div>

            {/* Parágrafo longo no desktop */}
            <p className="hidden md:block bg-[#313927] p-4 rounded-xl border border-[#485539] text-stone-100 font-medium">
              {CHEF_DATA.bioSecond}
            </p>
          </div>

          {/* 3 Pillars badges escondidos no celular para reduzir altura da página */}
          <div className="hidden md:grid mt-8 pt-6 border-t border-[#4f5d3f] grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs text-stone-300">
            <div className="flex items-center justify-center gap-2 bg-[#313927] py-2.5 px-3 rounded-xl border border-[#485539]">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sem Fracassos na Cozinha</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-[#313927] py-2.5 px-3 rounded-xl border border-[#485539]">
              <Heart className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Aprovado por Crianças e Adultos</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-[#313927] py-2.5 px-3 rounded-xl border border-[#485539]">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Tempo Máximo de 15 Minutos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

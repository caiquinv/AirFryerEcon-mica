import React, { useState } from 'react';
import { CheckCircle2, Sparkles, ShieldCheck, Zap, Mail, Lock } from 'lucide-react';
import { PRICING_DATA } from '../data/content';

interface PricingOfferSectionProps {
  onOpenCheckout?: () => void;
}

export const PricingOfferSection: React.FC<PricingOfferSectionProps> = () => {
  const cashPrice = PRICING_DATA.promoCashPrice;
  const originalTotal = PRICING_DATA.originalTotal;

  return (
    <section id="oferta" className="bg-[#faf7f0] text-stone-900 py-14 sm:py-24 border-b border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Urgency Pill */}
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 animate-pulse">
          <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
          Preço Especial de Lançamento em Portugal 🇵🇹
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
          Comece Hoje Mesmo a Poupar e a Comer Bem
        </h2>
        <p className="mt-3 text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Tudo o que precisa para transformar a sua fritadeira na melhor aliada da sua família e da sua conta bancária.
        </p>

        {/* Portuguese Guarantee & Localization Pill */}
        <div className="mt-4 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-900 px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-xs">
          <span>🇵🇹 100% Adaptado aos Supermercados de Portugal</span>
          <span className="text-emerald-400">•</span>
          <span>Fatura com NIF disponível</span>
        </div>

        {/* The Main Offer Box */}
        <div className="mt-8 bg-white rounded-3xl border-2 border-[#3b442f] shadow-2xl overflow-hidden max-w-xl mx-auto text-left relative">
          {/* Header Banner */}
          <div className="bg-[#2a3421] text-white p-6 sm:p-7 text-center relative">
            <div className="inline-flex items-center gap-1.5 bg-amber-400 text-stone-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wide mb-2 shadow">
              <Sparkles className="w-3.5 h-3.5" />
              Edição Portugal 2026
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
              LIVRO DIGITAL: AIRFRYER ECONÓMICA
            </h3>
            <p className="text-amber-300 text-xs sm:text-sm font-semibold mt-1">
              (250 RECEITAS EM PDF + 5 GUIAS BÓNUS EM PDF)
            </p>
          </div>

          {/* Checklist of Everything Included with Original Values */}
          <div className="p-6 sm:p-8 space-y-3.5 bg-stone-50/50">
            {PRICING_DATA.itemsIncluded.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-3 text-xs sm:text-sm text-stone-800 pb-2.5 border-b border-stone-200/80 last:border-0"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                  <span className="font-semibold">{item.name}</span>
                </div>
                <span className="text-stone-400 line-through text-xs shrink-0 font-mono">
                  {item.value}
                </span>
              </div>
            ))}

            {/* Total value strikethrough */}
            <div className="pt-3 text-center">
              <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
                Valor Total de Mercado:
              </p>
              <p className="text-lg font-bold text-stone-400 line-through font-mono">
                {originalTotal}
              </p>
            </div>

            {/* Final Price Block */}
            <div className="mt-4 bg-[#3b442f] text-white rounded-2xl p-6 text-center shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-400 text-stone-950 font-black text-[10px] uppercase px-3 py-0.5 rounded-bl-lg">
                Poupe 85% Hoje
              </div>

              <p className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                Hoje, nesta página especial:
              </p>

              <div className="mt-2 flex items-baseline justify-center gap-2">
                <span className="text-sm sm:text-base font-semibold text-stone-200">por apenas</span>
                <span className="text-4xl sm:text-5xl font-black text-amber-300 tracking-tight font-mono">
                  {cashPrice}
                </span>
              </div>

              <p className="mt-2 text-xs text-stone-200 font-medium tracking-wide uppercase">
                Pagamento único • Sem mensalidades • Acesso vitalício imediato
              </p>
            </div>

            {/* Portuguese Payment Methods Badge */}
            <div className="mt-5 p-3 rounded-xl bg-stone-100 border border-stone-200 text-center">
              <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wider block mb-2">
                Métodos de Pagamento Oficiais em Portugal:
              </span>
              <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-xs font-bold">
                <span className="inline-flex items-center gap-1 bg-[#dbeafe] text-[#1e40af] border border-[#93c5fd] px-2.5 py-1 rounded-md">
                  📱 MB WAY
                </span>
                <span className="inline-flex items-center gap-1 bg-stone-200 text-stone-800 border border-stone-300 px-2.5 py-1 rounded-md">
                  🏧 Multibanco
                </span>
                <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-1 rounded-md">
                  💳 Cartão Visa / Master
                </span>
              </div>
            </div>

            {/* Big Green Action Button */}
            <div className="mt-5">
              <a
                href="https://pay.hotmart.com/D107662872I"
                target="_blank"
                rel="noopener noreferrer"
                id="pricing-cta-button"
                className="w-full group inline-flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] active:scale-98 text-white font-black text-base sm:text-lg uppercase tracking-wide py-4 px-6 rounded-xl shadow-xl transition-all cursor-pointer border-t border-emerald-300 text-center"
              >
                <span>SIM, QUERO AS 250 RECEITAS EM PORTUGAL!</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">➔</span>
              </a>

              <p className="mt-3 text-center text-[11px] text-stone-500 font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Acesso Imediato no seu E-mail • Garantia de 7 Dias
              </p>

              <div className="mt-2 flex items-center justify-center gap-3 text-stone-500 text-xs font-medium">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-stone-400" />
                  Envio automático imediato
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-stone-400" />
                  Encriptação Bancária SSL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { CheckCircle2, ShieldCheck, Lock, Sparkles, Smartphone, FileText, Infinity } from 'lucide-react';
import { HERO_DATA } from '../data/content';

interface HeroSectionProps {
  onScrollToOffer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToOffer }) => {
  return (
    <header className="relative overflow-hidden bg-[#242e1d] text-white pt-8 pb-14 sm:pt-12 sm:pb-20 border-b border-[#35432a]">
      {/* Subtle mosaic overlay mimicking delicious food background */}
      <div 
        className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(36,46,29,0.3) 0%, rgba(20,26,16,0.95) 100%), url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=70')`,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Headline */}
        <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 shadow-sm">
          <span>🇵🇹 Portugal 2026</span>
          <span className="text-emerald-500">•</span>
          <span>Plataforma Oficial</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto text-white">
          Airfryer Económica
        </h1>

        {/* User requested proposition */}
        <h2 className="mt-3 text-lg sm:text-2xl md:text-3xl text-amber-300 font-extrabold max-w-3xl mx-auto leading-snug">
          250 Receitas Portuguesas Rápidas e Deliciosas para Poupar Tempo e Dinheiro na Cozinha
        </h2>

        {/* Subhead / detailed pitch */}
        <p className="mt-3 text-sm sm:text-base text-stone-200 font-medium max-w-2xl mx-auto leading-relaxed">
          Poupe até 80€/mês na fatura da luz (EDP/Galp) e no supermercado com refeições caseiras estaladiças prontas em apenas <strong className="text-white font-bold">15 minutos</strong>, sem cheiro a fritos nem banca cheia de louça.
        </p>

        {/* Badges / Pill Tags */}
        <div className="mt-5 flex items-center justify-center gap-2 sm:gap-3 flex-wrap text-xs sm:text-sm font-bold">
          <span className="inline-flex items-center gap-1.5 bg-[#34422a] text-stone-100 border border-[#485b3b] px-3.5 py-1 rounded-full shadow-sm">
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            LIVRO DIGITAL EM PDF
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#34422a] text-stone-100 border border-[#485b3b] px-3.5 py-1 rounded-full shadow-sm">
            <Smartphone className="w-3.5 h-3.5 text-amber-400" />
            LEIA NO TELEMÓVEL OU PC
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#34422a] text-stone-100 border border-[#485b3b] px-3.5 py-1 rounded-full shadow-sm">
            <Infinity className="w-3.5 h-3.5 text-sky-400" />
            ACESSO VITALÍCIO
          </span>
          <span className="inline-flex items-center gap-1.5 bg-[#34422a] text-stone-100 border border-[#485b3b] px-3.5 py-1 rounded-full shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
            INGREDIENTES NACIONAIS
          </span>
        </div>

        {/* Realistic Hero Visual Graphic (Chef António Valente + Book Mockup Bundle) */}
        <div className="mt-8 sm:mt-10 relative max-w-2xl mx-auto">
          {/* Glowing subtle ring behind mockup */}
          <div className="absolute inset-0 -top-6 bg-gradient-to-t from-emerald-500/10 via-amber-500/10 to-transparent blur-2xl rounded-full transform -translate-y-4" />

          {/* Book Display Bundle Container */}
          <div className="relative bg-gradient-to-b from-[#2b3723] to-[#1c2417] p-4 sm:p-6 rounded-2xl border border-[#405234] shadow-2xl">
            {/* Top golden seal */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 px-3.5 py-1 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wide shadow-md mb-4">
              <Sparkles className="w-4 h-4 text-stone-950" />
              {HERO_DATA.authorityStamp}
            </div>

            {/* Mockup composition */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              {/* Chef Picture with clean framing */}
              <div className="md:col-span-5 relative group">
                <div className="relative overflow-hidden rounded-xl border-2 border-amber-400/70 shadow-lg">
                  <img
                    src="https://iili.io/nobI4xp.png"
                    alt="Chef António Valente"
                    className="w-full h-56 sm:h-64 object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 text-left">
                    <p className="text-white font-bold text-sm">Chef António Valente</p>
                    <p className="text-amber-300 text-xs font-medium">Chef Executivo & Mestre Gastronómico</p>
                  </div>
                </div>
              </div>

              {/* Main Product Digital Display */}
              <div className="md:col-span-7 text-left space-y-3 p-2 sm:p-3">
                <div className="bg-[#1b2316] border border-[#3c4c31] rounded-xl p-4 shadow-inner">
                  <div className="flex items-center justify-between border-b border-[#2d3a25] pb-2 mb-3">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Livro Oficial 2026
                    </span>
                    <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded font-mono font-semibold">
                      Edição Portugal
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                    Airfryer Económica: 250 Receitas Portuguesas
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-300 mt-1">
                    Passo a passo descomplicado, tempos e temperaturas em °C exatos para qualquer fritadeira em Portugal.
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#2d3a25] grid grid-cols-2 gap-2 text-xs text-stone-200">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>+5 Guias Bónus Grátis</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Lista de Compras Ativa</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Ingredientes Nacionais</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Poupança Real na Luz</span>
                    </div>
                  </div>
                </div>

                {/* Micro preview strip of bonus guides */}
                <div className="flex items-center gap-2 overflow-x-auto py-1 text-[11px] text-stone-300">
                  <span className="bg-[#323e29] border border-[#435537] px-2.5 py-1 rounded whitespace-nowrap">
                    🎁 Menu Mensal
                  </span>
                  <span className="bg-[#323e29] border border-[#435537] px-2.5 py-1 rounded whitespace-nowrap">
                    🎁 Marinadas de Ouro
                  </span>
                  <span className="bg-[#323e29] border border-[#435537] px-2.5 py-1 rounded whitespace-nowrap">
                    🎁 30 Molhos Fit
                  </span>
                  <span className="bg-[#323e29] border border-[#435537] px-2.5 py-1 rounded whitespace-nowrap">
                    🎁 20 Sumos Nacionais
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Big Green CTA Button */}
        <div className="mt-8 sm:mt-10 max-w-md mx-auto">
          <button
            onClick={onScrollToOffer}
            id="hero-cta-button"
            className="w-full group relative inline-flex items-center justify-center gap-3 bg-[#22c55e] hover:bg-[#16a34a] active:scale-[0.98] text-white font-black text-base sm:text-lg tracking-wide uppercase px-6 py-4 rounded-xl shadow-[0_10px_25px_-5px_rgba(34,197,94,0.5)] border-t border-emerald-300 transition-all duration-200 cursor-pointer"
          >
            <span>{HERO_DATA.ctaText}</span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">➔</span>
          </button>

          {/* Micro trust indicators */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 text-xs text-stone-300 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Acesso imediato no seu e-mail
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Pagamento 100% seguro
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              7 dias de garantia total
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

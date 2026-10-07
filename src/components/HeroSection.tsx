import React from 'react';
import { CheckCircle2, ShieldCheck, Lock, Sparkles, Smartphone, FileText, Infinity } from 'lucide-react';
import { HERO_DATA, HOTMART_CHECKOUT_URL } from '../data/content';

interface HeroSectionProps {
  onScrollToOffer?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToOffer }) => {
  return (
    <header className="relative overflow-hidden bg-[#242e1d] text-white pt-4 pb-8 sm:pt-10 sm:pb-16 border-b border-[#35432a]">
      {/* Subtle mosaic overlay mimicking delicious food background */}
      <div 
        className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(36,46,29,0.3) 0%, rgba(20,26,16,0.95) 100%), url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=70')`,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* a) Selo pequeno (uma linha) [TODAS AS TELAS] */}
        <div className="inline-flex items-center gap-1.5 bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3 shadow-xs">
          <span>Livro digital em PDF · Edição Portugal</span>
        </div>

        {/* b) Título (H1, fonte grande, máx. 3 linhas) [TODAS AS TELAS] */}
        <span className="block text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-extrabold mb-1">
          Airfryer Económica
        </span>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-4xl mx-auto text-white">
          250 Receitas Portuguesas na Airfryer para Poupar Tempo e Dinheiro
        </h1>

        {/* c) Subtítulo (uma ou duas linhas curtas) [TODAS AS TELAS] */}
        <p className="mt-2 text-sm sm:text-base md:text-lg text-stone-200 font-medium max-w-2xl mx-auto leading-snug">
          Prontas em 15 minutos, com ingredientes do Continente, Pingo Doce e Lidl.
        </p>

        {/* h) Linha pequena de texto de etiquetas [TODAS AS TELAS] */}
        <p className="mt-2 text-xs sm:text-sm text-amber-300/90 font-semibold tracking-wide">
          PDF · Telemóvel e PC · Acesso vitalício
        </p>

        {/* ==============================================================
            CELULAR: Imagem do livro/PDF no tablet (max 260px) + Preço + Botão + Confiança
            Tudo cabe nos primeiros ~780px de altura sem rolar.
           ============================================================== */}
        <div className="block md:hidden mt-3">
          {/* d) Imagem do produto: tablet com livro/PDF */}
          <div className="flex justify-center my-2">
            <img
              src="/livro_airfryer_tablet.webp"
              alt="Livro Digital Airfryer Económica no Tablet"
              width={320}
              height={238}
              fetchPriority="high"
              decoding="sync"
              className="max-h-[220px] w-auto object-contain rounded-xl shadow-2xl border border-[#405234]"
            />
          </div>

          {/* e) Bloco de preço, centralizado */}
          <div className="mt-2 text-center">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-3xl font-black text-amber-400 font-mono">14,90€</span>
              <span className="text-base text-stone-400 line-through font-mono">49,90€</span>
            </div>
            <p className="text-xs text-stone-300 mt-0.5">
              Pagamento único · Acesso imediato
            </p>
          </div>

          {/* f) Botão verde de largura total (altura mínima 56px, cantos arredondados, sombra suave) */}
          <a
            href={HOTMART_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-button"
            className="mt-3.5 w-full flex items-center justify-center min-h-[56px] bg-[#22c55e] hover:bg-[#16a34a] active:scale-[0.98] text-white font-extrabold text-base tracking-wide rounded-xl shadow-lg shadow-emerald-950/40 px-6 py-3.5 transition-all cursor-pointer text-center"
          >
            QUERO AS 250 RECEITAS →
          </a>

          {/* g) Abaixo do botão, uma linha de confiança (mínimo 13px) */}
          <p className="mt-2.5 text-[13px] text-stone-300 text-center font-medium leading-snug">
            🔒 Pagamento seguro · 7 dias de garantia · MB WAY, Multibanco e cartão
          </p>
        </div>

        {/* ==============================================================
            DESKTOP (md:block): Layout com mockup e foto do chef
           ============================================================== */}
        <div className="hidden md:block mt-8">
          {/* Book Display Bundle Container */}
          <div className="relative max-w-2xl mx-auto bg-gradient-to-b from-[#2b3723] to-[#1c2417] p-6 rounded-2xl border border-[#405234] shadow-2xl">
            {/* Top golden seal */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-950 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide shadow-md mb-4">
              <Sparkles className="w-4 h-4 text-stone-950" />
              Livro digital em PDF · Edição Portugal
            </div>

            {/* Mockup composition */}
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Product Tablet Picture (matching mobile version) */}
              <div className="col-span-5 relative group">
                <div className="relative overflow-hidden rounded-xl border-2 border-amber-400/70 shadow-lg bg-[#141b11]">
                  <img
                    src="/livro_airfryer_tablet.webp"
                    alt="Livro Digital Airfryer Económica no Tablet"
                    width={400}
                    height={320}
                    fetchPriority="high"
                    decoding="sync"
                    className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 text-left">
                    <p className="text-white font-bold text-sm">Livro Digital em PDF</p>
                    <p className="text-amber-300 text-xs font-medium">Acesso no Telemóvel, Tablet e PC</p>
                  </div>
                </div>
              </div>

              {/* Main Product Digital Display */}
              <div className="col-span-7 text-left space-y-3 p-3">
                <div className="bg-[#1b2316] border border-[#3c4c31] rounded-xl p-4 shadow-inner">
                  <div className="flex items-center justify-between border-b border-[#2d3a25] pb-2 mb-3">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Livro Oficial 2026
                    </span>
                    <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded font-mono font-semibold">
                      Edição Portugal
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white leading-snug">
                    Airfryer Económica: 250 Receitas Portuguesas
                  </h3>

                  <p className="text-xs text-stone-300 mt-1">
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
                      <span>Refeições rápidas e baratas</span>
                    </div>
                  </div>
                </div>

                {/* Micro preview strip of bonus guides without visible scrollbar */}
                <div className="flex items-center gap-2 overflow-x-auto py-1 text-[11px] text-stone-300 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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

          {/* Desktop Price & Action */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="text-center mb-3">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-black text-amber-400 font-mono">14,90€</span>
                <span className="text-lg text-stone-400 line-through font-mono">49,90€</span>
              </div>
              <p className="text-xs text-stone-300 mt-0.5">Pagamento único · Acesso imediato</p>
            </div>

            <a
              href={HOTMART_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group relative inline-flex items-center justify-center min-h-[56px] bg-[#22c55e] hover:bg-[#16a34a] active:scale-[0.98] text-white font-black text-lg tracking-wide rounded-xl shadow-[0_10px_25px_-5px_rgba(34,197,94,0.5)] border-t border-emerald-300 transition-all duration-200 cursor-pointer text-center"
            >
              QUERO AS 250 RECEITAS →
            </a>

            <div className="mt-3 text-[13px] text-stone-300 font-medium">
              🔒 Pagamento seguro · 7 dias de garantia · MB WAY, Multibanco e cartão
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};


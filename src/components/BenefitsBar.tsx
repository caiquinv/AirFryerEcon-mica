import React from 'react';
import { PiggyBank, Clock, Users } from 'lucide-react';

export const BenefitsBar: React.FC = () => {
  return (
    <section className="bg-[#2d3724] text-white py-12 sm:py-16 border-y border-[#3e4c32]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#445437]">
          {/* Item 1 */}
          <div className="pt-6 md:pt-0 md:px-6 flex flex-col items-center">
            <div className="w-13 h-13 rounded-2xl bg-[#3c4a30] border border-[#526442] flex items-center justify-center text-amber-400 mb-4 shadow-inner">
              <PiggyBank className="w-7 h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              Poupe até 80€/mês
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xs">
              Corte nas entregas de comida (Glovo/Uber Eats) e reduza a fatura da luz ao substituir o forno elétrico pela Airfryer rápida.
            </p>
          </div>

          {/* Item 2 */}
          <div className="pt-6 md:pt-0 md:px-6 flex flex-col items-center">
            <div className="w-13 h-13 rounded-2xl bg-[#3c4a30] border border-[#526442] flex items-center justify-center text-emerald-400 mb-4 shadow-inner">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              Sem Tachos Nem Cheiro a Fritos
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xs">
              Sem pilhas de louça no lava-loiça e sem cheiro a fritos espalhado pela casa. Refeições em 10 a 15 minutos com o cesto limpo num instante.
            </p>
          </div>

          {/* Item 3 */}
          <div className="pt-6 md:pt-0 md:px-6 flex flex-col items-center">
            <div className="w-13 h-13 rounded-2xl bg-[#3c4a30] border border-[#526442] flex items-center justify-center text-sky-400 mb-4 shadow-inner">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              Testado em Lares Portugueses
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xs">
              Testado nas fritadeiras mais vendidas em Portugal (Philips, Cecotec, Silvercrest do Lidl, Xiaomi, Cosori) com ingredientes das nossas lojas.
            </p>
          </div>
        </div>

        {/* Supermarket trust strip */}
        <div className="mt-12 pt-8 border-t border-[#445437]/70 text-center">
          <p className="text-xs uppercase font-extrabold tracking-widest text-amber-400/90 mb-4">
            Ingredientes 100% disponíveis nos supermercados em Portugal
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
            {['Continente', 'Pingo Doce', 'Lidl', 'Mercadona', 'Auchan', 'Intermarché'].map((market) => (
              <span
                key={market}
                className="bg-[#21291b] border border-[#3b4930] text-stone-300 px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-sm"
              >
                🛒 {market}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

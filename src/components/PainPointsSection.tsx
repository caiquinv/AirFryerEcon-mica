import React from 'react';
import { AlertTriangle, XCircle, TrendingDown, DollarSign } from 'lucide-react';
import { PAIN_POINTS } from '../data/content';

export const PainPointsSection: React.FC = () => {
  return (
    <section className="bg-[#4a553c] text-white py-14 sm:py-20 border-b border-[#3b442f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Warning Icon Badge */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-400 text-stone-950 shadow-lg mb-5 ring-4 ring-amber-400/20">
          <AlertTriangle className="w-8 h-8" />
        </div>

        {/* Section Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
          {PAIN_POINTS.title}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-stone-200">
          A maioria das pessoas comprou uma fritadeira com boas intenções, mas caiu nestas armadilhas:
        </p>

        {/* Pain points cards */}
        <div className="mt-8 space-y-3.5 text-left max-w-xl mx-auto">
          {PAIN_POINTS.points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3.5 bg-[#3c4630]/80 border border-[#556345] p-4 rounded-xl shadow-md hover:border-amber-400/40 transition-colors"
            >
              <div className="shrink-0 mt-0.5">
                <XCircle className="w-5 h-5 text-rose-400" />
              </div>
              <p className="text-sm sm:text-base text-stone-100 font-medium leading-snug">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Airfryer Illustration Graphic with animated vapor / money loss */}
        <div className="mt-10 max-w-sm mx-auto bg-[#38422d] border border-[#556345] rounded-2xl p-6 shadow-xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute -top-10 inset-x-0 h-24 bg-amber-500/10 blur-xl" />

          {/* SVG Illustration of Airfryer with sad expression and steam escaping */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Money bills floating */}
            <div className="flex items-center gap-4 text-xs font-bold text-amber-300 mb-2">
              <span className="flex items-center gap-1 bg-black/30 px-2 py-0.5 rounded-full border border-amber-500/30 animate-bounce">
                <TrendingDown className="w-3.5 h-3.5 text-rose-400" />
                -80€/mês (Takeaway + Conta da Luz)
              </span>
            </div>

            <div className="w-28 h-32 relative flex flex-col items-center">
              {/* Airfryer main body */}
              <div className="w-24 h-28 bg-gradient-to-b from-teal-800 to-teal-950 rounded-t-3xl rounded-b-2xl border-2 border-teal-600/50 shadow-2xl relative flex flex-col items-center pt-2">
                {/* Top digital display */}
                <div className="w-16 h-7 bg-stone-900 rounded-lg border border-teal-400/30 flex items-center justify-center text-amber-400 font-mono text-[10px] shadow-inner">
                  <span>ERR 0°C</span>
                </div>
                {/* Dial handle */}
                <div className="w-10 h-10 mt-2 rounded-full border-2 border-teal-500/50 bg-teal-900/80 flex items-center justify-center">
                  <div className="w-2 h-5 bg-teal-300 rounded-full" />
                </div>
                {/* Drawer line */}
                <div className="w-full h-0.5 bg-teal-700 mt-2" />
                {/* Basket handle */}
                <div className="w-12 h-3 bg-stone-900 rounded-b-md border border-teal-500/40 mt-0.5" />
              </div>

              {/* Sad face on appliance */}
              <div className="absolute top-12 flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-teal-200 rounded-full" />
                <span className="w-1.5 h-1.5 bg-teal-200 rounded-full" />
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#4f5c3e] text-center">
            <span className="text-xs text-amber-300 font-semibold uppercase tracking-wider">
              Apenas usada para batatas congeladas?
            </span>
          </div>
        </div>

        {/* Emphatic statement */}
        <p className="mt-8 text-base sm:text-lg text-stone-100 font-semibold max-w-xl mx-auto leading-relaxed">
          A sua Airfryer pode fazer <span className="text-amber-300 font-bold underline decoration-amber-400 decoration-2 underline-offset-4">MUITO MAIS</span> do que imagina. E está a desperdiçar dinheiro e refeições incríveis todos os meses.
        </p>
      </div>
    </section>
  );
};

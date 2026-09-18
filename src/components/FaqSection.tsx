import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../data/content';

interface FaqSectionProps {
  onScrollToOffer: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onScrollToOffer }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#4a553c] text-white py-14 sm:py-24 border-b border-[#3b442f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          Tire as suas Dúvidas
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
          Perguntas Frequentes
        </h2>
        <p className="mt-2 text-stone-200 text-xs sm:text-sm max-w-lg mx-auto">
          Tudo o que precisa de saber antes de começar a poupar com a Airfryer Económica.
        </p>

        {/* Accordions */}
        <div className="mt-10 space-y-3 text-left">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#3b442f] border border-[#526042] rounded-2xl overflow-hidden shadow-md transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-white hover:text-amber-300 transition-colors cursor-pointer gap-4"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-6 h-6 rounded-full bg-[#303825] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : 'text-stone-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-200 leading-relaxed border-t border-[#465437]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final CTA Container inside FAQ section matching screenshot */}
        <div className="mt-14 max-w-md mx-auto">
          <button
            onClick={onScrollToOffer}
            id="faq-cta-button"
            className="w-full group inline-flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] active:scale-98 text-white font-black text-base sm:text-lg uppercase tracking-wide py-4 px-6 rounded-xl shadow-2xl transition-all cursor-pointer border-t border-emerald-300"
          >
            <span>QUERO TRANSFORMAR AS MINHAS REFEIÇÕES</span>
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">➔</span>
          </button>

          <p className="mt-3 text-amber-300 text-xs font-semibold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Últimas <strong>9 vagas</strong> com desconto garantido
          </p>
        </div>
      </div>
    </section>
  );
};

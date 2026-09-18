import React from 'react';
import { Heart, MessageCircle, Send, CheckCircle2, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

export const CommunitySection: React.FC = () => {
  return (
    <section className="bg-[#424d35] text-white py-14 sm:py-20 border-b border-[#343d2a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          Comunidade em Portugal
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight max-w-2xl mx-auto">
          Centenas de famílias portuguesas a cozinhar melhor sem complicações
        </h2>

        <p className="mt-4 text-xs sm:text-sm text-stone-300 uppercase tracking-widest font-bold">
          Mensagens e partilhas reais de quem já tem o livro na cozinha:
        </p>

        {/* WhatsApp & Social Media Screenshot Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-[#313926] border border-[#4d5c3c] rounded-2xl p-4 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Header with avatar & name */}
                <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#3f4b31]">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-amber-400/40"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1">
                      {t.name}
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    </h4>
                    <span className="text-[10px] text-stone-300">{t.location}</span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mt-2.5 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-xs text-stone-200 mt-2 leading-relaxed italic">
                  "{t.message}"
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-[#3f4b31] flex items-center justify-between text-[10px] text-stone-400">
                <span className="font-mono text-emerald-300">✓ Receita: {t.dishName}</span>
                <span>{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ShieldCheck, RefreshCw, Clock, Award, Mail, Instagram } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="bg-[#faf7f0] text-stone-900 py-14 sm:py-20 border-b border-stone-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Seal Graphic */}
        <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 p-1 shadow-2xl mb-6">
          <div className="w-full h-full rounded-full bg-[#2a3421] text-white flex flex-col items-center justify-center p-2 border-2 border-amber-300">
            <span className="text-[10px] font-extrabold uppercase text-amber-300 tracking-wider">
              Garantia
            </span>
            <span className="text-xl font-black text-white leading-none font-mono">
              7 DIAS
            </span>
            <span className="text-[9px] font-extrabold text-amber-200 uppercase tracking-tight">
              Risco Zero
            </span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
          SATISFAÇÃO GARANTIDA E RISCO ZERO!
        </h2>

        <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed max-w-lg mx-auto">
          Se adquirir este guia completo e, por qualquer motivo, achar que as receitas não são fáceis, práticas ou deliciosas, basta enviar-nos um e-mail num prazo de até <strong>7 dias</strong> e devolvemos 100% do seu dinheiro. Sem burocracia, sem perguntas. O risco fica todo do nosso lado.
        </p>

        {/* 4 Trust Pills */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto text-left text-xs font-bold text-stone-700">
          <div className="flex items-center gap-2.5 bg-white border border-stone-300 p-3 rounded-xl shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Compra 100% segura e encriptada</span>
          </div>
          <div className="flex items-center gap-2.5 bg-white border border-stone-300 p-3 rounded-xl shadow-xs">
            <RefreshCw className="w-4 h-4 text-sky-600 shrink-0" />
            <span>Reembolso total garantido</span>
          </div>
          <div className="flex items-center gap-2.5 bg-white border border-stone-300 p-3 rounded-xl shadow-xs">
            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
            <span>7 dias de teste incondicional</span>
          </div>
          <div className="flex items-center gap-2.5 bg-white border border-stone-300 p-3 rounded-xl shadow-xs">
            <Award className="w-4 h-4 text-purple-600 shrink-0" />
            <span>Qualidade e sabor aprovados</span>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-500 font-medium">
          <a
            href="mailto:suporte@airfryereconomica.pt"
            className="flex items-center gap-1.5 hover:text-stone-900 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-stone-400" />
            suporte@airfryereconomica.pt
          </a>
          <span>•</span>
          <a
            href="https://instagram.com/airfryer_economicapt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-stone-900 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5 text-stone-400" />
            @airfryer_economicapt
          </a>
        </div>
      </div>
    </section>
  );
};

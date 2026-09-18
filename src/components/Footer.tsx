import React, { useState } from 'react';
import { Shield, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<'termos' | 'privacidade' | null>(null);

  return (
    <footer className="bg-[#192014] text-stone-400 py-10 px-4 sm:px-6 border-t border-[#26311e] text-center text-xs">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="font-medium text-stone-300">
          Copyright © 2026 • <strong>Airfryer Económica</strong>. Todos os direitos reservados.
        </p>

        <div className="flex items-center justify-center gap-4 text-xs font-semibold text-stone-400 flex-wrap">
          <button
            onClick={() => setModalContent('termos')}
            className="hover:text-amber-400 transition-colors underline cursor-pointer"
          >
            Termos de Utilização
          </button>
          <span>•</span>
          <button
            onClick={() => setModalContent('privacidade')}
            className="hover:text-amber-400 transition-colors underline cursor-pointer"
          >
            Política de Privacidade
          </button>
          <span>•</span>
          <a
            href="mailto:suporte@airfryereconomica.pt"
            className="hover:text-amber-400 transition-colors underline"
          >
            Contacto & Suporte
          </a>
        </div>

        <p className="text-[11px] text-stone-300 max-w-2xl mx-auto leading-relaxed">
          Aviso legal: O "Airfryer Económica" é um livro digital e guia de culinária independente e não tem qualquer vínculo, afiliação ou patrocínio de marcas registadas de aparelhos eletrodomésticos como Philips, Cecotec, Moulinex, Xiaomi, Tefal, Silvercrest ou Cosori.
        </p>
      </div>

      {/* Legal modal popup */}
      {modalContent && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-stone-900 rounded-2xl max-w-lg w-full p-6 text-left shadow-2xl relative">
            <h3 className="text-lg font-bold flex items-center gap-2 mb-3">
              {modalContent === 'termos' ? (
                <>
                  <FileText className="w-5 h-5 text-emerald-600" />
                  Termos de Utilização
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5 text-emerald-600" />
                  Política de Privacidade (RGPD)
                </>
              )}
            </h3>

            <div className="text-xs text-stone-600 space-y-2 max-h-80 overflow-y-auto pr-2">
              {modalContent === 'termos' ? (
                <>
                  <p>
                    1. <strong>Acesso ao Conteúdo:</strong> Ao adquirir o livro Airfryer Económica, o utilizador recebe uma licença pessoal e intransmissível para uso individual dos livros digitais em formato PDF.
                  </p>
                  <p>
                    2. <strong>Garantia de 7 Dias:</strong> Garantimos o reembolso integral de 100% do valor pago caso seja solicitado dentro do prazo de 7 dias a contar da data da compra.
                  </p>
                  <p>
                    3. <strong>Propriedade Intelectual:</strong> É estritamente proibida a reprodução, partilha ou revenda não autorizada das receitas e materiais.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    1. <strong>Proteção de Dados:</strong> Cumprimos escrupulosamente o Regulamento Geral sobre a Proteção de Dados (RGPD). Os seus dados pessoais (nome, e-mail e telemóvel) são utilizados exclusivamente para entrega do acesso e suporte.
                  </p>
                  <p>
                    2. <strong>Segurança nos Pagamentos:</strong> Todas as transações são encriptadas de ponta a ponta através de protocolos SSL seguros. Não guardamos dados de cartões ou contas bancárias.
                  </p>
                </>
              )}
            </div>

            <button
              onClick={() => setModalContent(null)}
              className="mt-5 w-full bg-[#3b442f] text-white font-bold py-2 rounded-xl text-xs hover:bg-[#2e3624] cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

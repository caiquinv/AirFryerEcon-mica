import React, { useState } from 'react';
import { X, ShieldCheck, Lock, CheckCircle2, Download, Smartphone, CreditCard, Landmark, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRICING_DATA } from '../data/content';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [paymentMethod, setPaymentMethod] = useState<'mbway' | 'cartao' | 'multibanco'>('mbway');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nif, setNif] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 900);
  };

  const handleReset = () => {
    setStep('form');
    setDownloadNotice(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white text-stone-900 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="bg-[#2a3421] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-400 text-stone-950 flex items-center justify-center font-bold text-xs">
              🔒
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold leading-tight">
                Finalizar Acesso Seguro 🇵🇹
              </h3>
              <p className="text-[11px] text-amber-300 font-medium">
                Servidores Nacionais e Encriptação Bancária SSL
              </p>
            </div>
          </div>

          <button
            onClick={handleReset}
            aria-label="Fechar"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            {/* Order Mini Summary */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 flex items-center justify-between text-xs">
              <div>
                <p className="font-extrabold text-stone-900">
                  Airfryer Económica (250 Receitas + 5 Bónus)
                </p>
                <p className="text-emerald-700 font-semibold text-[11px]">
                  Livro Digital em PDF + 5 Guias Bónus em PDF
                </p>
              </div>
              <div className="text-right">
                <span className="text-stone-400 line-through text-[11px] block">112,00€</span>
                <span className="text-base font-black text-[#22c55e] font-mono">17,90€</span>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  Nome Completo:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Maria dos Santos"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  O seu melhor E-mail (onde receberá o acesso imediato):
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: maria.santos@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Telemóvel (Portugal):
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="912 345 678"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    NIF na Fatura <span className="font-normal text-stone-400">(Opcional)</span>:
                  </label>
                  <input
                    type="text"
                    value={nif}
                    onChange={(e) => setNif(e.target.value)}
                    placeholder="200 000 000"
                    maxLength={9}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector (Popular Portugal methods) */}
            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1.5">
                Método de Pagamento Nacional:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('mbway')}
                  className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                    paymentMethod === 'mbway'
                      ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 shadow-xs ring-2 ring-emerald-500/20'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <Smartphone className="w-4 h-4 mx-auto mb-1 text-emerald-600" />
                  <span>MB WAY</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cartao')}
                  className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                    paymentMethod === 'cartao'
                      ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 shadow-xs ring-2 ring-emerald-500/20'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <CreditCard className="w-4 h-4 mx-auto mb-1 text-sky-600" />
                  <span>Cartão</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('multibanco')}
                  className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer ${
                    paymentMethod === 'multibanco'
                      ? 'border-emerald-600 bg-emerald-50/80 text-emerald-900 shadow-xs ring-2 ring-emerald-500/20'
                      : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <Landmark className="w-4 h-4 mx-auto mb-1 text-amber-600" />
                  <span>Multibanco</span>
                </button>
              </div>

              {paymentMethod === 'mbway' && (
                <div className="text-[11px] text-stone-600 mt-2 bg-emerald-50/70 border border-emerald-200 p-2.5 rounded-xl flex items-start gap-2">
                  <span className="text-base">📱</span>
                  <div>
                    <strong className="text-emerald-900 block">Pagamento Instantâneo MB WAY:</strong>
                    <span>Ao clicar em confirmar, receberá o pedido de 17,90€ no seu telemóvel para aprovar no MB WAY em segundos.</span>
                  </div>
                </div>
              )}
              {paymentMethod === 'multibanco' && (
                <div className="text-[11px] text-stone-600 mt-2 bg-amber-50/70 border border-amber-200 p-2.5 rounded-xl flex items-start gap-2">
                  <span className="text-base">🏧</span>
                  <div>
                    <strong className="text-amber-950 block">Referência Multibanco:</strong>
                    <span>Será gerada uma Entidade e Referência da rede SIBS para liquidar no Homebanking ou em qualquer caixa Multibanco.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-black text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-lg transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2 uppercase tracking-wide disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>A gerar o seu acesso seguro...</span>
                ) : (
                  <>
                    <span>Confirmar Encomenda (17,90€)</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="mt-3 flex items-center justify-center gap-3 text-[11px] text-stone-500 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Garantia de 7 dias
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-stone-500" />
                  Acesso vitalício garantido
                </span>
              </div>
            </div>
          </form>
        ) : (
          /* Success Screen */
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Pagamento Registado com Sucesso 🇵🇹
              </span>
              <h3 className="text-2xl font-black text-stone-900 mt-2">
                Muito Obrigado, {name || 'Cliente'}!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-sm mx-auto">
                O seu acesso ao <strong>Airfryer Económica (250 Receitas + 5 Bónus)</strong> foi emitido para <strong>{email}</strong>.
              </p>
            </div>

            {/* Multibanco info box if selected */}
            {paymentMethod === 'multibanco' && (
              <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 text-left text-xs text-stone-900 space-y-2">
                <p className="font-extrabold text-amber-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Landmark className="w-4 h-4 text-amber-700" />
                  Dados de Pagamento Multibanco:
                </p>
                <div className="grid grid-cols-2 gap-2 bg-white p-3 rounded-xl border border-amber-200 font-mono">
                  <div>
                    <span className="text-stone-500 text-[10px] block">Entidade:</span>
                    <strong className="text-stone-900 text-sm">21245</strong>
                  </div>
                  <div>
                    <span className="text-stone-500 text-[10px] block">Montante:</span>
                    <strong className="text-emerald-700 text-sm">17,90 €</strong>
                  </div>
                  <div className="col-span-2 pt-1 border-t border-stone-100">
                    <span className="text-stone-500 text-[10px] block">Referência:</span>
                    <strong className="text-stone-900 text-base tracking-wider">842 190 321</strong>
                  </div>
                </div>
                <p className="text-[10px] text-stone-600">
                  Os dados foram também enviados por SMS e e-mail. Tem 24 horas para efetuar o pagamento no seu banco.
                </p>
              </div>
            )}

            {/* In-modal simulated feedback notice */}
            {downloadNotice && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs rounded-xl font-medium animate-in fade-in">
                {downloadNotice}
              </div>
            )}

            {/* Action buttons */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 space-y-3 text-left">
              <div className="flex items-center justify-between text-xs font-bold text-stone-900 pb-2 border-b border-stone-200">
                <span>Os Seus Materiais Digitais:</span>
                <span className="text-emerald-600 font-bold">Disponíveis</span>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setDownloadNotice('✅ O descarregamento do livro "Airfryer Económica: 250 Receitas Portuguesas (PDF)" foi iniciado com sucesso!');
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white border border-stone-200 hover:border-emerald-500 text-xs font-bold text-stone-800 shadow-xs transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-emerald-600" />
                    Descarregar Airfryer Económica (PDF Completo)
                  </span>
                  <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded">PDF</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setDownloadNotice('✅ O pacote com os 5 Guias Bónus em PDF foi descarregado com sucesso!');
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white border border-stone-200 hover:border-emerald-500 text-xs font-bold text-stone-800 shadow-xs transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-amber-600" />
                    Descarregar 5 Guias Bónus (Ficheiros PDF)
                  </span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded">PDF</span>
                </button>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-[#3b442f] hover:bg-[#2c3423] text-white font-bold text-xs py-3 rounded-xl cursor-pointer transition-colors"
            >
              Concluir e Voltar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

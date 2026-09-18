import React, { useState, useRef } from 'react';
import { Star, CheckCircle2, Camera } from 'lucide-react';

/**
 * ============================================================================
 * FOTO DA CLIENTE (MARIA)
 * ============================================================================
 * Pode substituir o link abaixo pelo ficheiro/link da foto da Maria.
 * Também pode carregar uma foto diretamente através do botão no canto da imagem!
 */
export const DEFAULT_CUSTOMER_PHOTO =
  'https://iili.io/nom6dSR.png';

export const SocialProofVideo: React.FC = () => {
  const [photo, setPhoto] = useState<string>(DEFAULT_CUSTOMER_PHOTO);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPhoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTriggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="bg-[#faf7f0] text-stone-900 py-12 sm:py-16 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header Badge */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Experiência Real de Quem Já Experimentou
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900">
            O Que Diz Quem Já Tem o Livro na Cozinha
          </h2>
          <p className="mt-1.5 text-sm sm:text-base text-stone-600 max-w-lg mx-auto">
            Resultados práticos de famílias portuguesas que transformaram a sua rotina diária.
          </p>
        </div>

        {/* Immersive Testimonial Card (Layout inspirado na referência) */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
          {/* =======================================================
              COLUNA ESQUERDA: FOTO IMERSIVA (FULL-BLEED)
             ======================================================= */}
          <div className="relative md:col-span-5 min-h-[320px] sm:min-h-[380px] md:min-h-[460px] bg-stone-100 overflow-hidden group">
            <img
              src={photo}
              alt="Maria na cozinha — Cliente Airfryer Económica"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Subtle Gradient Overlay on Bottom for Badge Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Floating Badge (Estilo idêntico ao modelo) */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-xs rounded-xl sm:rounded-2xl px-4 py-2.5 shadow-xl border border-white/60">
              <p className="text-[11px] sm:text-xs font-black tracking-wider text-stone-900 uppercase">
                MARIA – PORTUGAL
              </p>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-500 text-amber-500 drop-shadow-xs"
                  />
                ))}
              </div>
            </div>

            {/* Botão sutil para alterar a foto */}
            <button
              onClick={handleTriggerUpload}
              type="button"
              title="Clique para alterar a foto"
              className="absolute top-3.5 right-3.5 bg-black/60 hover:bg-black/85 text-white p-2 rounded-full backdrop-blur-xs transition-all opacity-80 hover:opacity-100 cursor-pointer shadow-md"
            >
              <Camera className="w-4 h-4 text-amber-300" />
            </button>

            {/* Input invisível para upload da foto */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* =======================================================
              COLUNA DIREITA: CONTEÚDO DO DEPOIMENTO
             ======================================================= */}
          <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Título com destaque de cor idêntico à referência */}
              <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight leading-snug sm:leading-tight">
                „Uma das <span className="text-amber-600">melhores compras</span> que fiz nos{' '}
                <span className="text-amber-600">últimos tempos!“</span>
              </h3>

              {/* Corpo do Depoimento */}
              <div className="mt-5 space-y-3.5 text-stone-700 text-sm sm:text-[15px] leading-relaxed">
                <p>
                  <strong className="font-bold text-stone-900">
                    Maria, 42 anos, sabe bem o desafio:
                  </strong>{' '}
                  Entre o trabalho e as tarefas de casa, chegava muitas vezes ao fim do dia sem
                  saber o que preparar para o jantar. Acabava por gastar mais dinheiro no
                  supermercado e perder imenso tempo na cozinha.
                </p>

                <p>
                  Desde que descobriu este ebook de receitas portuguesas para a air fryer, tudo
                  ficou mais fácil!
                </p>

                <p>
                  Encontrou receitas rápidas, simples e deliciosas, que a ajudam a poupar tempo e a
                  aproveitar melhor os ingredientes que já tem em casa.
                </p>

                <p>
                  Estou a gostar imenso e já recomendei a algumas amigas.{' '}
                  <strong className="font-bold text-stone-900 bg-amber-100/60 px-1 py-0.5 rounded">
                    Foi, sem dúvida, uma das melhores compras que fiz. Não me arrependo nada!
                  </strong>
                </p>
              </div>
            </div>

            {/* Destaque final com ícone verde (idêntico à caixa inferior da imagem de exemplo) */}
            <div className="mt-6 sm:mt-8 bg-[#f4f7f4] border border-[#dce8dc] rounded-2xl p-3.5 sm:p-4.5 flex items-start sm:items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-xs sm:text-[13px] font-semibold text-[#1d3d25] leading-snug">
                Para mim, isso é uma coisa acima de tudo: menos stress no dia a dia e finalmente
                mais economia e prazer em cozinhar novamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

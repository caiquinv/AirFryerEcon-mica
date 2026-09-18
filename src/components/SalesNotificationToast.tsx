import React, { useState, useEffect } from 'react';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';

export interface SalesNotificationItem {
  name: string;
  city: string;
  state: string; // Estado / Distrito
  timeAgo: string;
}

// 24 variações únicas sem repetição de nomes e cidades/distritos
export const SALES_NOTIFICATIONS: SalesNotificationItem[] = [
  { name: 'Maria Silva', city: 'Cascais', state: 'Distrito de Lisboa', timeAgo: 'há 2 min' },
  { name: 'Ana Martins', city: 'Vila Nova de Gaia', state: 'Distrito do Porto', timeAgo: 'há 3 min' },
  { name: 'Joana Ferreira', city: 'Guimarães', state: 'Distrito de Braga', timeAgo: 'há 1 min' },
  { name: 'Cristina Santos', city: 'Coimbra', state: 'Distrito de Coimbra', timeAgo: 'há 4 min' },
  { name: 'Sofia Ribeiro', city: 'Portimão', state: 'Distrito de Faro', timeAgo: 'há 2 min' },
  { name: 'Teresa Almeida', city: 'Matosinhos', state: 'Distrito do Porto', timeAgo: 'há 5 min' },
  { name: 'Paula Costa', city: 'Almada', state: 'Distrito de Setúbal', timeAgo: 'há 1 min' },
  { name: 'Isabel Gonçalves', city: 'Funchal', state: 'Região da Madeira', timeAgo: 'há 6 min' },
  { name: 'Rita Sousa', city: 'Viseu', state: 'Distrito de Viseu', timeAgo: 'há 3 min' },
  { name: 'Beatriz Pereira', city: 'Ponta Delgada', state: 'Região dos Açores', timeAgo: 'há 2 min' },
  { name: 'Helena Oliveira', city: 'Leiria', state: 'Distrito de Leiria', timeAgo: 'há 4 min' },
  { name: 'Carla Mendes', city: 'Évora', state: 'Distrito de Évora', timeAgo: 'há 1 min' },
  { name: 'Inês Carvalho', city: 'Sintra', state: 'Distrito de Lisboa', timeAgo: 'há 3 min' },
  { name: 'Marta Rocha', city: 'Aveiro', state: 'Distrito de Aveiro', timeAgo: 'há 5 min' },
  { name: 'Patrícia Lopes', city: 'Viana do Castelo', state: 'Distrito de Viana do Castelo', timeAgo: 'há 2 min' },
  { name: 'Lúcia Rodrigues', city: 'Santarém', state: 'Distrito de Santarém', timeAgo: 'há 4 min' },
  { name: 'Catarina Pires', city: 'Faro', state: 'Distrito de Faro', timeAgo: 'há 1 min' },
  { name: 'Sandra Ramos', city: 'Maia', state: 'Distrito do Porto', timeAgo: 'há 3 min' },
  { name: 'Raquel Pinto', city: 'Bragança', state: 'Distrito de Bragança', timeAgo: 'há 6 min' },
  { name: 'Mónica Dias', city: 'Castelo Branco', state: 'Distrito de Castelo Branco', timeAgo: 'há 2 min' },
  { name: 'Alexandra Neves', city: 'Torres Vedras', state: 'Distrito de Lisboa', timeAgo: 'há 4 min' },
  { name: 'Daniela Moreira', city: 'Figueira da Foz', state: 'Distrito de Coimbra', timeAgo: 'há 1 min' },
  { name: 'Sílvia Fonseca', city: 'Amadora', state: 'Distrito de Lisboa', timeAgo: 'há 3 min' },
  { name: 'Fernanda Teixeira', city: 'Vila Real', state: 'Distrito de Vila Real', timeAgo: 'há 5 min' },
];

export const SalesNotificationToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    let active = true;
    let timeoutId: ReturnType<typeof setTimeout>;

    const showNotification = (index: number) => {
      if (!active) return;
      setCurrentIndex(index);
      setIsVisible(true);

      // Fica visível por 2 segundos e some
      timeoutId = setTimeout(() => {
        if (!active) return;
        setIsVisible(false);

        // Após 8 segundos de ter sumido, aparece outro nome
        timeoutId = setTimeout(() => {
          if (!active) return;
          const nextIndex = (index + 1) % SALES_NOTIFICATIONS.length;
          showNotification(nextIndex);
        }, 8000);
      }, 2000);
    };

    // Primeira aparição: após 7 segundos da entrada no site
    timeoutId = setTimeout(() => {
      showNotification(0);
    }, 7000);

    return () => {
      active = false;
      clearTimeout(timeoutId);
    };
  }, []);

  const currentNotification = SALES_NOTIFICATIONS[currentIndex];

  return (
    <div
      aria-live="polite"
      className={`fixed z-50 transition-all duration-300 ease-out pointer-events-none ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
      } bottom-20 left-3 right-3 sm:right-auto sm:left-6 sm:bottom-6 sm:max-w-sm`}
    >
      <div className="bg-[#242e1d] text-white rounded-2xl p-3.5 sm:p-4 shadow-[0_12px_32px_rgba(0,0,0,0.55)] border border-[#445834] flex items-center gap-3.5 backdrop-blur-md">
        {/* Emoji de Certo com badge de destaque */}
        <div className="relative shrink-0 w-11 h-11 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-xl shadow-inner">
          <span role="img" aria-label="confirmado" className="select-none text-lg">
            ✅
          </span>
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#22c55e] rounded-full border-2 border-[#242e1d] flex items-center justify-center">
            <CheckCircle2 className="w-2.5 h-2.5 text-white" />
          </span>
        </div>

        {/* Informações da Notificação */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
              {currentNotification.name}{' '}
              <span className="text-emerald-400 font-semibold text-xs">acabou de comprar!</span>
            </p>
            <span className="text-[10px] text-stone-400 font-mono shrink-0">
              {currentNotification.timeAgo}
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-stone-300 font-medium truncate mt-0.5 flex items-center gap-1">
            <span className="text-amber-400">📍</span>
            <span>
              {currentNotification.city}, {currentNotification.state}
            </span>
          </p>

          <div className="mt-1 flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold">
            <ShoppingBag className="w-3 h-3 text-emerald-400" />
            <span className="truncate">Airfryer Económica (250 Receitas)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

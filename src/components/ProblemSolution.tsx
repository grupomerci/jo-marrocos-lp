import React from 'react';
import { ArrowRight, DollarSign } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-4 block text-center md:text-left">A Realidade</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 leading-tight font-sans text-center md:text-left">
              Por que pagar o dobro por menos?
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed mb-8 text-center md:text-left px-6 md:px-0">
              Viajar pelo Brasil pode custar facilmente mais de <strong className="text-stone-900">R$ 500 por dia</strong>. Mas e se eu te dissesse que é possível viver uma experiência internacional completa por muito menos?
            </p>
            
            <div className="p-8 bg-stone-50 rounded-[2rem] border border-stone-100">
              <p className="text-stone-900 font-medium italic text-lg mb-6 text-center md:text-left">
                "Parece loucura, mas acredite em mim. Trabalho com finanças e posso te afirmar que é possível fazer uma viagem internacional com esse valor em média..."
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-200 overflow-hidden">
                   <img src="/jorginho.jpeg" alt="Jorginho" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Jorginho</p>
                  <p className="text-xs text-stone-500 uppercase tracking-wide">Autor do Guia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative bg-stone-900 rounded-[3rem] p-10 md:p-14 text-white shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-[url('/img4.jpg')] opacity-25 bg-cover bg-center mix-blend-overlay"></div>
              
              <div className="relative z-10 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-10">10 Dias no Marrocos</h3>
                
                <div className="space-y-8">
                  <div>
                    <p className="text-stone-400 text-sm uppercase tracking-wider mb-3">Investimento Total</p>
                    <p className="text-5xl md:text-6xl font-bold text-white tracking-tight">R$ 4.742</p>
                    <p className="text-stone-400 text-sm mt-1">por pessoa (tudo incluso)</p>
                  </div>

                  <div className="w-full h-px bg-white/10"></div>

                  <div>
                    <p className="text-stone-400 text-sm uppercase tracking-wider mb-2">Custo Diário</p>
                    <p className="text-4xl font-bold text-orange-400">R$ 475</p>
                    <p className="text-stone-400 text-sm mt-1">por dia</p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                  <span className="text-sm font-medium">Economia Real</span>
                  <DollarSign className="text-orange-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

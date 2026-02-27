import React from 'react';
import { Button } from './ui/Button';
import { Check } from 'lucide-react';

export default function WhatIsIncluded() {
  const inclusions = [
    "Alertas para não cair em armadilhas",
    "Checklist final para não esquecer nada",
    "Comparação direta com gastos no Brasil",
    "Roteiro pronto de 10 dias para copiar e colar",
    "Dicas reais de quem viveu não de quem pesquisou",
    "Quanto custa 10 dias no Marrocos (com números reais)",
    "Quanto eu gastei detalhadamente (hospedagem, deserto, transporte, comida)"
  ];

  return (
    <section id="content" className="relative bg-[#121110] text-white py-24 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/img1.jpg" 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-[#121110]/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          {/* Left Side */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-6 block font-sans text-center lg:text-left">O CONTEÚDO</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-sans leading-tight text-center lg:text-left">O que você<br/>recebe?</h2>
            <p className="text-stone-400 mb-10 text-sm leading-relaxed max-w-xs text-center lg:text-left">
              Não é um guia turístico tradicional. É um relato honesto, prático e direto ao ponto. Tudo baseado na experiência real.
            </p>
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white border-none font-bold py-4 rounded-full cursor-pointer">
              Quero Acessar Agora
            </Button>
          </div>

          {/* Right Side - List */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col">
              {inclusions.map((item, index) => (
                <div key={index} className="flex items-start gap-6 py-6 border-b border-stone-800/50 first:pt-0 last:border-0 group px-6 md:px-0">
                  <div className="w-5 h-5 rounded-full bg-stone-800 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-orange-600/20 transition-colors duration-300">
                    <Check className="w-2.5 h-2.5 text-stone-400 group-hover:text-orange-500 transition-colors duration-300" strokeWidth={3} />
                  </div>
                  <span className="text-lg text-stone-300 font-medium group-hover:text-white transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

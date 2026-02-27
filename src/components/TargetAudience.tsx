import { Check, X } from 'lucide-react';

export default function TargetAudience() {
  const forWhom = [
    "Sair do óbvio",
    "Trabalhar muito e viver mais",
    "Planejamento inteligente",
    "Primeira viagem internacional",
    "Experiência é investimento"
  ];

  const notForWhom = [
    "Luxo cinco estrelas",
    "Roteiro de agência",
    "Viagem artificial e instagramável"
  ];

  return (
    <section className="pb-32 pt-22 bg-white border-y border-stone-100">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-20">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-4 block">O Perfil</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Este guia é para você?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
          
          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-200 -translate-x-1/2"></div>

          {/* Left Side - Positive */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-xl font-medium text-stone-900 mb-8 flex items-center gap-3">
              <span className="text-stone-900">Sim, para quem busca</span>
              <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-stone-900" />
              </div>
            </h3>
            
            <ul className="space-y-6">
              {forWhom.map((item, index) => (
                <li key={index} className="text-lg md:text-xl text-stone-600 font-light leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Negative */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-medium text-stone-900 mb-8 flex items-center gap-3 flex-row-reverse md:flex-row">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                <X className="w-4 h-4 text-red-500" />
              </div>
              <span className="text-stone-900">Não, se você prefere</span>
            </h3>
            
            <ul className="space-y-6">
              {notForWhom.map((item, index) => (
                <li key={index} className="text-lg md:text-xl text-stone-600 font-light leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="text-center mt-20">
          <p className="text-xl font-medium text-stone-900 italic">
            "Esse material é para quem quer viver de verdade."
          </p>
        </div>
      </div>
    </section>
  );
}

import { EyeOff, BookOpenCheck, CircleDollarSign, Zap } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <CircleDollarSign className="w-8 h-8 text-stone-900" strokeWidth={1.3}/>,
      title: "Material Prático",
      description: "Conteúdo 100% direto"
    },
    {
      icon: <EyeOff className="w-8 h-8 text-stone-900" strokeWidth={1.3}/>,
      title: "Privacidade",
      description: "Dados protegidos"
    },
    {
      icon: <Zap className="w-8 h-8 text-stone-900" strokeWidth={1.3}/>,
      title: "Acesso Imediato",
      description: "Comece agora"
    },
    {
      icon: <BookOpenCheck className="w-8 h-8 text-stone-900" strokeWidth={1.3}/>,
      title: "No Seu Ritmo",
      description: "Leia onde quiser"
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-4 block">Vantagens</span>
          <h2 className="text-3xl font-bold text-stone-900 mb-4 font-sans tracking-tight">Vantagens Exclusivas</h2>
          <p className="text-stone-500 max-w-lg mx-auto">Tudo que você precisa para planejar sua viagem com segurança e economia.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-base font-bold text-stone-900 mb-1">{benefit.title}</h3>
              <p className="text-stone-500 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

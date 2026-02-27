
import { Briefcase, Globe } from 'lucide-react';

export default function Author() {
  return (
    <section id="author" className="py-12 px-3 bg-stone-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-4 block text-center md:text-left">O Autor</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 font-sans leading-tight text-center md:text-left">
              Mas quem sou eu para te prometer algo assim?
            </h2>
            
            <div className="space-y-8 text-stone-600 leading-relaxed text-lg">
              <p className="font-medium text-stone-900 text-xl text-center md:text-left mb-12">
                Prazer, Jorginho.
              </p>

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Briefcase className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-center md:text-left">Empresário & Estrategista</h4>
                    <p className="text-base text-stone-500 text-center md:text-left">Contador de dia, auditando números e estratégias.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-center md:text-left">Mochileiro por Escolha</h4>
                    <p className="text-base text-stone-500 text-center md:text-left">+40 países explorados vivendo a experiência real.</p>
                  </div>
                </div>
              </div>

              <p className="text-center md:text-left">
                Quando fui pro Marrocos, fiz o que sei fazer de melhor: <strong className="text-stone-900">auditei minha própria viagem.</strong> Anotei cada centavo, cada erro e cada acerto.
              </p>
 
              <div className="md:pl-6 md:border-l-4 border-orange-500 py-1 italic text-stone-800 font-medium text-center md:text-left">
                "Este guia é a prova de que você gasta mais em 7 dias de férias 'padrão' no Brasil do que vivendo 10 dias de cultura intensa no norte da África."
              </div>

              <p className="text-sm text-stone-400 mt-4 text-center md:text-left">
                *Mas se você prefere pagar caro no óbvio, tudo bem também.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-stone-200">
               <img 
                  src="/jorginho.jpeg" 
                  alt="Jorge Martínez Jr. - Jorginho" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

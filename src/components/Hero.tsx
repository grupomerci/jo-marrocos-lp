import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, Star, ShieldCheck, Lock, Menu, X } from 'lucide-react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  // Carousel timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <section id="hero" className="relative w-full h-screen min-h-[900px] overflow-hidden flex flex-col py-6">
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/img5.jpg" 
          alt="Marrocos Desert Landscape" 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
      </div>

      {/* Navbar - Absolute Top */}
      <nav className="absolute top-0 left-0 w-full z-50 py-6 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2 relative z-50 px-6 md:px-0">
            <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">
              Destino<span className="text-orange-500">Marrocos</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
            <a href="#hero" className="hover:text-orange-400 transition-colors cursor-pointer">Início</a>
            <a href="#benefits" className="hover:text-orange-400 transition-colors cursor-pointer">Benefícios</a>
            <a href="#content" className="hover:text-orange-400 transition-colors cursor-pointer"> Conteúdo</a>
            <a href="#author" className="hover:text-orange-400 transition-colors cursor-pointer">Quem sou eu</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-stone-950/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden ${
            isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
          }`}
        >
          <nav className="flex flex-col items-center gap-10 text-center">
            <a 
              href="#hero" 
              className="text-3xl font-bold text-white hover:text-orange-500 transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
            <a 
              href="#benefits" 
              className="text-3xl font-bold text-white hover:text-orange-500 transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#content" 
              className="text-3xl font-bold text-white hover:text-orange-500 transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              O Conteúdo
            </a>
            <a 
              href="#author" 
              className="text-3xl font-bold text-white hover:text-orange-500 transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(false)}
            >
              Autor
            </a>
          </nav>
          
          <div className="absolute bottom-12 text-stone-500 text-sm">
            © 2024 Destino Marrocos
          </div>
        </div>
      </nav>

      {/* Main Content - Centered */}
      <div className="relative z-10 container mx-auto px-4 flex-grow flex flex-col justify-center items-center text-center pt-32 md:pt-24 pb-30 px-10 md:px-0">
 

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] max-w-5xl md:px-24">
          Não seja um turista comum. Viva o Marrocos Real.
        </h1>

        <p className="text-basemd:text-lg text-stone-200 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
          Economize dinheiro, evite armadilhas e tenha em mãos o roteiro testado e aprovado por quem viveu a experiência.
        </p>

        {/* Feature Checks */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-12 text-sm md:text-base text-white/90 font-medium max-w-3xl px-6 md:px-0">
          <Button className="w-full bg-[#B5E51D] hover:bg-[#a3ce1a] text-stone-900 font-bold text-sm md:text-lg py-4 md:py-6 rounded-full shadow-[0_0_30px_rgba(181,229,29,0.4)] transition-all hover:scale-105 border-none group relative overflow-hidden cursor-pointer">
            <span className="relative z-10 flex items-center justify-center gap-3">
              ACESSE O GUIA EXCLUSIVO AGORA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Button>
          
          <div className="flex flex-col items-center gap-1 animate-fade-in-up delay-100 w-full">
            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-1 md:gap-2 text-white py-4 md:py-6">
              <span className="text-2xl text-stone-300 line-through">De R$ 97,00</span>
              <span className="text-4xl font-bold text-[#B5E51D]">Por apenas R$ 47,90</span>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 text-xs sm:text-sm opacity-90 mt-4">
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-white" /> Compra Segura</span>
              <span className="block w-px h-3 bg-white/40"></span>
              <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-white" /> Privacidade Protegida</span>
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden mt-8 w-full max-w-sm px-4 h-24 relative">
             <AnimatePresence mode="wait">
               {currentCard === 0 ? (
                 <motion.div
                   key="social-proof"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.7 }}
                   className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-center gap-4"
                   style={{ backdropFilter: "blur(12px)" }}
                 >
                     <div className="flex -space-x-3 items-center">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-stone-800 bg-stone-300 overflow-hidden relative shadow-lg flex-shrink-0">
                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                          </div>
                        ))}
                        <div className="w-10 h-10 rounded-full border-2 border-stone-800 bg-orange-500 flex items-center justify-center text-white text-[10px] font-bold z-10 relative shadow-lg flex-shrink-0">
                          +300
                        </div>
                     </div>
                     <div className="text-left">
                       <div className="flex items-center gap-0.5 mb-1">
                         {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                       </div>
                       <p className="text-white font-bold text-sm leading-tight">Viajantes satisfeitos</p>
                       <p className="text-stone-300 text-xs">comunidade ativa</p>
                     </div>
                 </motion.div>
               ) : (
                 <motion.div
                   key="roteiro"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.5 }}
                   className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-center gap-4"
                   style={{ backdropFilter: "blur(12px)" }}
                 >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-lg border border-white/10">
                      <img src="/Fez.jpg" alt="Roteiro" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="text-left">
                      <h3 className="text-white font-bold text-sm mb-1">Roteiro Completo</h3>
                      <p className="text-stone-300 text-xs leading-snug">10 dias detalhados passo a passo.</p>
                    </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </div>

        {/* Floating Glass Cards - Bottom */}
        <div className="w-full max-w-4xl px-4 hidden md:flex gap-6 absolute bottom-12 left-1/2 -translate-x-1/2">
          
          {/* Card 1: Roteiro Highlight */}
          <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 flex items-center gap-5 hover:bg-white/10 transition-all cursor-default group" style={{ backdropFilter: "blur(12px)" }}>
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border border-white/10">
              <img src="/Fez.jpg" alt="Roteiro" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="text-left">
              <h3 className="text-white font-bold text-lg mb-1">Roteiro Completo</h3>
              <p className="text-stone-300 text-sm leading-snug pr-4">10 dias detalhados passo a passo para copiar e colar.</p>
            </div>
          </div>

          {/* Card 2: Social Proof */}
          <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-5 flex items-center gap-5 hover:bg-white/10 transition-all cursor-default" style={{ backdropFilter: "blur(12px)" }}>
             <div className="flex -space-x-4 items-center pl-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-stone-800 bg-stone-300 overflow-hidden relative shadow-lg">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-stone-800 bg-orange-500 flex items-center justify-center text-white text-xs font-bold z-10 relative shadow-lg">
                  +300
                </div>
             </div>
             <div className="text-left pl-2">
               <div className="flex items-center gap-1 mb-1">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
               </div>
               <p className="text-white font-bold text-sm">Viajantes satisfeitos</p>
               <p className="text-stone-300 text-xs">comunidade ativa</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

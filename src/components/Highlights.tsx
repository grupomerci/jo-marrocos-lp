import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Highlights() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const highlights = [
    { 
      name: "Deserto do Saara", 
      img: "/marrocos.jpg", 
      text: "Andar de 4x4, dormir no meio do nada, ver o céu mais absurdo da sua vida.",
      price: "Imperdível" 
    },
    { 
      name: "Marrakech", 
      img: "/Marrakech.jpg", 
      text: "A cidade vermelha, cheia de vida, cores e sabores únicos.",
      price: "Vibrante" 
    },
    { 
      name: "Fez", 
      img: "/Fez.jpg", 
      text: "A maior medina medieval do mundo, um labirinto de história.",
      price: "Histórico" 
    },
    { 
      name: "Casablanca", 
      img: "/CasaBlanca.jpg", 
      text: "A modernidade encontra a tradição na maior cidade do país.",
      price: "Moderno" 
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  return (
    <section className="py-24 bg-stone-50/50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-4 block">Destinos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 font-sans tracking-tight">Destinos Inesquecíveis</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Roteiros prontos para copiar e colar.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="group flex flex-col">
              {/* Image Card */}
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-stone-200">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-900 shadow-sm">
                  {item.price}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed max-w-[200px]">
                    {item.text}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative h-[600px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col px-2"
            >
              {/* Image Card */}
              <div className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden mb-6 bg-stone-200 shadow-lg">
                <img 
                  src={highlights[currentIndex].img} 
                  alt={highlights[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-900 shadow-sm">
                  {highlights[currentIndex].price}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex justify-between items-end px-2">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">{highlights[currentIndex].name}</h3>
                  <p className="text-base text-stone-500 leading-relaxed max-w-[250px]">
                    {highlights[currentIndex].text}
                  </p>
                </div>
                <button className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-200">
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute -bottom-14 left-0 right-0 flex justify-center gap-2">
            {highlights.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-orange-600 w-6' : 'bg-stone-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Navigation (Optional but helpful) */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/3 -left-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5 text-stone-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/3 -right-2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5 text-stone-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

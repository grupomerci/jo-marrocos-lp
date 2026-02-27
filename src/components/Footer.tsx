import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Pronto para viver o Marrocos<br/>sem gastar uma fortuna?
          </h2>
          <Button className="w-full md:w-auto px-12 py-5 text-sm md:text-base bg-orange-600 hover:bg-orange-500 shadow-xl shadow-orange-900/20 gap-3">
            QUERO ACESSAR O E-BOOK AGORA
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <p className="mt-6 text-sm">
            Compra 100% Segura • Acesso Imediato
          </p>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Destino Marrocos. Todos os direitos reservados.
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <nav className="flex items-center gap-6 text-sm font-medium">
              <a href="#hero" className="hover:text-orange-500 transition-colors cursor-pointer">Início</a>
              <a href="#benefits" className="hover:text-orange-500 transition-colors cursor-pointer">Benefícios</a>
              <a href="#content" className="hover:text-orange-500 transition-colors cursor-pointer">Conteúdo</a>
              <a href="#author" className="hover:text-orange-500 transition-colors cursor-pointer">Autor</a>
            </nav>
            <a href="#" className="hover:text-white transition-colors p-2 bg-stone-800 rounded-full">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

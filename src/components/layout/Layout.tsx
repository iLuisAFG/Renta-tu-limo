import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-obsidian-deep text-platinum flex flex-col overflow-x-hidden selection:bg-champagne selection:text-obsidian-deep">
      {/* Luces volumétricas sutiles en background para dar profundidad */}
      <div 
        className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-champagne/[0.03] rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="fixed bottom-1/4 right-10 w-[500px] h-[500px] bg-champagne/[0.02] rounded-full blur-[160px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Barra de navegación flotante */}
      <Navbar />

      {/* Contenedor Principal */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

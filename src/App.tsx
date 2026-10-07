import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { ValuePillars } from '@/components/sections/ValuePillars';
import { OccasionsSection } from '@/components/sections/OccasionsSection';
import { FleetSection } from '@/components/sections/FleetSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServiceAreasSection } from '@/components/sections/ServiceAreasSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { BookingSection } from '@/components/sections/BookingSection';
import { MaintenanceWall } from '@/components/ui/MaintenanceWall';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { snappySpring } from '@/lib/motion';

// Control del Muro Temporal de Mantenimiento por Liquidación Pendiente
// Cambiar a 'true' para volver a bloquear el sitio si es necesario:
const IS_MAINTENANCE_BLOCKED = false;

export const App: React.FC = () => {
  return (
    <>
      {/* 1. Muro temporal de mantenimiento y bloqueo */}
      {IS_MAINTENANCE_BLOCKED && <MaintenanceWall />}

      {/* 2. Contenido del sitio web (bloqueado, no interactivo y semi-transparente solo cuando el muro esté activo) */}
      <div
        className={
          IS_MAINTENANCE_BLOCKED
            ? 'pointer-events-none select-none filter blur-[1.5px] opacity-75 min-h-screen overflow-hidden'
            : ''
        }
      >
        <Layout>
          {/* 1. Hero: Propuesta de valor clara + CTA directo */}
          <Hero />

          {/* 2. Barra de confianza / Métricas rápidas */}
          <ValuePillars />

          {/* 3. Servicios / Ocasiones */}
          <OccasionsSection />

          {/* 4. Flota */}
          <FleetSection />

          {/* 5. Sobre Nosotros / Diferenciadores */}
          <AboutSection />

          {/* 6. Zonas de cobertura */}
          <ServiceAreasSection />

          {/* 7. Prueba social / Testimonios */}
          <TestimonialsSection />

          {/* 8. Preguntas frecuentes (FAQ) */}
          <FAQSection />

          {/* 9. Formulario de cotización / Reserva */}
          <BookingSection />
        </Layout>

        {/* Botón Flotante Permanente de WhatsApp Concierge (visible cuando el sitio está activo) */}
        {!IS_MAINTENANCE_BLOCKED && (
          <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-40">
            <motion.a
              href="https://wa.me/5215528130558?text=Hola,%20deseo%20cotizar%20un%20servicio%20exclusivo%20con%20Renta%20tu%20limo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={snappySpring}
              className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#DDB789] text-obsidian-deep shadow-gold-pill hover:bg-[#E8C8A3] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-obsidian-deep" />
              </div>
              <span className="hidden sm:inline font-sans text-xs font-semibold tracking-wider uppercase">
                WhatsApp VIP
              </span>
            </motion.a>
          </aside>
        )}
      </div>
    </>
  );
};

export default App;

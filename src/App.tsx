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
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { snappySpring } from '@/lib/motion';

export const App: React.FC = () => {
  return (
    <Layout>
      {/* 1. Hero: Propuesta de valor clara + CTA directo */}
      <Hero />

      {/* 2. Barra de confianza / Métricas rápidas: Años de experiencia, viajes realizados, choferes certificados */}
      <ValuePillars />

      {/* 3. Servicios / Ocasiones: Bodas, XV años, eventos corporativos, traslados VIP */}
      <OccasionsSection />

      {/* 4. Flota: Modelos disponibles, capacidad de pasajeros, amenidades y botón 'Cotizar este vehículo' */}
      <FleetSection />

      {/* 5. Nuestra Historia / Diferenciadores: Quiénes son, estándares de seguridad, puntualidad y exclusividad */}
      <AboutSection />

      {/* 6. Zonas de cobertura: CDMX y municipios metropolitanos atendidos */}
      <ServiceAreasSection />

      {/* 7. Prueba social / Testimonios: Reseñas reales de clientes y calificaciones de Google/Trustpilot */}
      <TestimonialsSection />

      {/* 8. Preguntas frecuentes (FAQ): Políticas de anticipo, cancelación, tiempo mínimo de renta */}
      <FAQSection />

      {/* 9. Formulario de cotización / Reserva (CTA Final): Limpio, directo y con WhatsApp 55 2813 0558 */}
      <BookingSection />

      {/* Botón Flotante Permanente de WhatsApp Concierge */}
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
    </Layout>
  );
};

export default App;

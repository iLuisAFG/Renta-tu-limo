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

// Control del Muro Temporal de Mantenimiento por Liquidación Pendiente
// Para desbloquear el sitio una vez liquidado, cambiar a false:
const IS_MAINTENANCE_BLOCKED = true;

export const App: React.FC = () => {
  return (
    <>
      {/* 1. Muro temporal de mantenimiento y bloqueo */}
      {IS_MAINTENANCE_BLOCKED && <MaintenanceWall />}

      {/* 2. Contenido del sitio web (bloqueado, no interactivo y semi-transparente mientras el muro esté activo) */}
      <div
        className={
          IS_MAINTENANCE_BLOCKED
            ? 'pointer-events-none select-none filter blur-[1.5px] opacity-75 min-h-screen overflow-hidden'
            : ''
        }
        aria-hidden={IS_MAINTENANCE_BLOCKED}
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
      </div>
    </>
  );
};

export default App;

import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { ValuePillars } from '@/components/sections/ValuePillars';
import { OccasionsSection } from '@/components/sections/OccasionsSection';
import { FleetSection } from '@/components/sections/FleetSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServiceAreasSection } from '@/components/sections/ServiceAreasSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { BookingSection } from '@/components/sections/BookingSection';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero: H1 Renta de Limusinas en CDMX + CTA directo */}
      <Hero />

      {/* 2. Barra de confianza / Garantías reales */}
      <ValuePillars />

      {/* 3. Servicios / Ocasiones: H2s para Bodas, XV Años y Eventos */}
      <OccasionsSection />

      {/* 4. Flota: H2 Nuestra flota de limusinas + H3s de los 8 modelos */}
      <FleetSection />

      {/* 5. Diferenciadores: H2 ¿Por qué elegir Renta tu Limo? */}
      <AboutSection />

      {/* 6. Cobertura: H2 Zonas donde ofrecemos servicio */}
      <ServiceAreasSection />

      {/* 7. Compromisos y estándares de servicio */}
      <TestimonialsSection />

      {/* 8. Preguntas frecuentes (FAQ) */}
      <FAQSection />

      {/* 9. Formulario de cotización / Reserva */}
      <BookingSection />
    </>
  );
};

import React, { useEffect } from 'react';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { OccasionPage } from '@/pages/OccasionPage';
import { FleetPage } from '@/pages/FleetPage';
import { ZonePage } from '@/pages/ZonePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { OCCASIONS_DATA } from '@/data/occasions';
import { FLEET_VEHICLES } from '@/data/fleet';
import { ZONES_DATA } from '@/data/zones';
import { ROUTES_CONFIG } from '@/routes.config';
import { LazyMotion, domAnimation, m } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { snappySpring } from '@/lib/motion';

// Script de opacidad gradual según días transcurridos desde fecha límite
const DUE_DATE_STR = '2026-10-30';
const DEADLINE_DAYS = 60;

const FleetRouteWrapper: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const vehicle = FLEET_VEHICLES.find((v) => v.slug === slug);
  if (!vehicle) return <NotFoundPage />;
  return <FleetPage vehicle={vehicle} />;
};

const ZoneRouteWrapper: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const zone = ZONES_DATA.find((z) => z.slug === slug);
  if (!zone) return <NotFoundPage />;
  return <ZonePage zone={zone} />;
};

/**
 * ClientHeadSync:
 * Sincroniza <title>, meta description y canonical cuando el usuario
 * navega en el cliente sin recargar la página.
 */
const ClientHeadSync: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const currentPath = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
    const route =
      ROUTES_CONFIG.find((r) => r.path === location.pathname) ||
      ROUTES_CONFIG.find((r) => r.path === currentPath);

    if (route) {
      document.title = route.title;

      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', route.description);

      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', route.canonical);
    }
  }, [location.pathname]);

  return null;
};

export const App: React.FC = () => {
  // Script de opacidad gradual según días transcurridos
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Cambia estas variables por las tuyas
    const dueDate = new Date(DUE_DATE_STR);
    const deadline = DEADLINE_DAYS;

    const daysPassed = Math.floor(
      (new Date().getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysPassed > 0) {
      const daysLate = deadline - daysPassed;
      let opacity = daysLate / deadline;
      opacity = Math.min(opacity, 1);
      opacity = Math.max(opacity, 0);
      document.body.style.opacity = String(opacity);
    }
  }, []);

  return (
    <>
      <ClientHeadSync />

      {/* Contenido del sitio web 100% interactivo */}
      <div className="min-h-screen">
        <LazyMotion features={domAnimation}>
          <Layout>
            <Routes>
              {/* Inicio */}
              <Route path="/" element={<HomePage />} />

              {/* Ocasiones / Servicios */}
              {OCCASIONS_DATA.map((occ) => (
                <React.Fragment key={occ.id}>
                  <Route path={occ.path} element={<OccasionPage occasion={occ} />} />
                  <Route path={occ.path.replace(/\/$/, '')} element={<OccasionPage occasion={occ} />} />
                </React.Fragment>
              ))}

              {/* Flota de Limusinas */}
              {FLEET_VEHICLES.map((car) => (
                <React.Fragment key={car.id}>
                  <Route path={car.path} element={<FleetPage vehicle={car} />} />
                  <Route path={car.path.replace(/\/$/, '')} element={<FleetPage vehicle={car} />} />
                </React.Fragment>
              ))}

              {/* Zonas de Cobertura */}
              {ZONES_DATA.map((zone) => (
                <React.Fragment key={zone.id}>
                  <Route path={zone.path} element={<ZonePage zone={zone} />} />
                  <Route path={zone.path.replace(/\/$/, '')} element={<ZonePage zone={zone} />} />
                </React.Fragment>
              ))}

              {/* Rutas dinámicas de respaldo */}
              <Route path="/limusinas/:slug" element={<FleetRouteWrapper />} />
              <Route path="/cobertura/:slug" element={<ZoneRouteWrapper />} />

              {/* 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>

          {/* Botón Flotante Permanente de WhatsApp VIP */}
          <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-40">
            <m.a
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
            </m.a>
          </aside>
        </LazyMotion>
      </div>
    </>
  );
};

export default App;

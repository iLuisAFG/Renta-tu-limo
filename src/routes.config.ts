import { COMPANY_DATA } from '@/data/company';
import { FLEET_VEHICLES } from '@/data/fleet';
import { OCCASIONS_DATA } from '@/data/occasions';
import { ZONES_DATA } from '@/data/zones';
import { generateSchemaGraph, type BreadcrumbItem } from '@/lib/schema';

export interface RouteConfig {
  path: string;
  cleanSlug: string;
  type: 'home' | 'occasion' | 'fleet' | 'zone';
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  lastmod: string;
  breadcrumbs?: BreadcrumbItem[];
  schema: Record<string, unknown>;
}

const BUILD_DATE = '2026-10-07';

export const ROUTES_CONFIG: RouteConfig[] = [
  // 1. Home
  {
    path: '/',
    cleanSlug: '',
    type: 'home',
    title: 'Renta de Limusinas en CDMX | Renta tu Limo',
    description: 'Renta de limusinas en CDMX para bodas, XV años y eventos exclusivos. Flota Hummer y Cadillac Escalade con chofer de gala. Cotiza hoy vía WhatsApp.',
    canonical: `${COMPANY_DATA.domain}/`,
    ogImage: `${COMPANY_DATA.domain}/images/hero-limo.png`,
    lastmod: BUILD_DATE,
    schema: generateSchemaGraph({
      path: '/',
      title: 'Renta de Limusinas en CDMX | Renta tu Limo',
      description: 'Renta de limusinas en CDMX para bodas, XV años y eventos exclusivos. Flota Hummer y Cadillac Escalade con chofer de gala. Cotiza hoy vía WhatsApp.',
      canonical: `${COMPANY_DATA.domain}/`,
      includeFAQ: true,
      serviceName: 'Renta de Limusinas en CDMX',
      serviceType: 'Renta de Limusinas con Chofer Ejecutivo',
    }),
  },

  // 2. Ocasiones
  ...OCCASIONS_DATA.map((occ): RouteConfig => {
    const canonical = `${COMPANY_DATA.domain}${occ.path}`;
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Inicio', url: `${COMPANY_DATA.domain}/` },
      { name: 'Servicios', url: `${COMPANY_DATA.domain}/#servicios` },
      { name: occ.title, url: canonical },
    ];
    return {
      path: occ.path,
      cleanSlug: occ.slug,
      type: 'occasion',
      title: occ.metaTitle,
      description: occ.metaDescription,
      canonical,
      ogImage: `${COMPANY_DATA.domain}${occ.image}`,
      lastmod: BUILD_DATE,
      breadcrumbs,
      schema: generateSchemaGraph({
        path: occ.path,
        title: occ.metaTitle,
        description: occ.metaDescription,
        canonical,
        breadcrumbs,
        serviceName: occ.title,
        serviceType: 'Servicio de Limusinas para Eventos',
      }),
    };
  }),

  // 3. Flota de Vehículos
  ...FLEET_VEHICLES.map((car): RouteConfig => {
    const canonical = `${COMPANY_DATA.domain}${car.path}`;
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Inicio', url: `${COMPANY_DATA.domain}/` },
      { name: 'Flota', url: `${COMPANY_DATA.domain}/#vehiculos` },
      { name: car.title, url: canonical },
    ];
    return {
      path: car.path,
      cleanSlug: car.slug,
      type: 'fleet',
      title: car.metaTitle,
      description: car.metaDescription,
      canonical,
      ogImage: `${COMPANY_DATA.domain}${car.src}`,
      lastmod: BUILD_DATE,
      breadcrumbs,
      schema: generateSchemaGraph({
        path: car.path,
        title: car.metaTitle,
        description: car.metaDescription,
        canonical,
        breadcrumbs,
        serviceName: `Renta de Limusina ${car.title}`,
        serviceType: 'Renta de Limusina con Chofer',
      }),
    };
  }),

  // 4. Zonas de Cobertura
  ...ZONES_DATA.map((zone): RouteConfig => {
    const canonical = `${COMPANY_DATA.domain}${zone.path}`;
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Inicio', url: `${COMPANY_DATA.domain}/` },
      { name: 'Cobertura', url: `${COMPANY_DATA.domain}/#cobertura` },
      { name: zone.title, url: canonical },
    ];
    return {
      path: zone.path,
      cleanSlug: zone.slug,
      type: 'zone',
      title: zone.metaTitle,
      description: zone.metaDescription,
      canonical,
      ogImage: `${COMPANY_DATA.domain}${zone.image}`,
      lastmod: BUILD_DATE,
      breadcrumbs,
      schema: generateSchemaGraph({
        path: zone.path,
        title: zone.metaTitle,
        description: zone.metaDescription,
        canonical,
        breadcrumbs,
        serviceName: zone.title,
        serviceType: 'Renta de Limusinas Local',
      }),
    };
  }),
];

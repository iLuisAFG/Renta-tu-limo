import { COMPANY_DATA } from '@/data/company';
import { FLEET_VEHICLES } from '@/data/fleet';
import { FAQ_DATA } from '@/data/faq';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SchemaOptions {
  path: string;
  title: string;
  description: string;
  canonical: string;
  breadcrumbs?: BreadcrumbItem[];
  includeFAQ?: boolean;
  serviceType?: string;
  serviceName?: string;
}

export function generateSchemaGraph(options: SchemaOptions) {
  const { path, title, description, canonical, breadcrumbs, includeFAQ, serviceType, serviceName } = options;

  const isHome = path === '/';

  // Lista de zonas oficiales de cobertura
  const areasServed = [
    { '@type': 'City', name: 'Ciudad de México' },
    { '@type': 'AdministrativeArea', name: 'Polanco' },
    { '@type': 'AdministrativeArea', name: 'Santa Fe' },
    { '@type': 'AdministrativeArea', name: 'Coyoacán' },
    { '@type': 'AdministrativeArea', name: 'San Ángel' },
    { '@type': 'AdministrativeArea', name: 'Condesa' },
    { '@type': 'AdministrativeArea', name: 'Roma' },
    { '@type': 'AdministrativeArea', name: 'Pedregal' },
    { '@type': 'AdministrativeArea', name: 'Reforma' },
    { '@type': 'AdministrativeArea', name: 'Huixquilucan' },
    { '@type': 'AdministrativeArea', name: 'Interlomas' },
    { '@type': 'AdministrativeArea', name: 'Naucalpan de Juárez' },
    { '@type': 'AdministrativeArea', name: 'Ciudad Satélite' },
    { '@type': 'AdministrativeArea', name: 'Atizapán de Zaragoza' },
    { '@type': 'City', name: 'Cuernavaca' },
    { '@type': 'City', name: 'Puebla' },
    { '@type': 'City', name: 'Toluca' },
    { '@type': 'City', name: 'Valle de Bravo' },
  ];

  // Catálogo de vehículos derivado directamente de FLEET_VEHICLES
  // Nota SEO: Usamos ItemList con Service en lugar de Offer vacíos sin precio.
  const fleetCatalog = {
    '@type': 'OfferCatalog',
    name: 'Catálogo de Limusinas con Chofer en CDMX',
    itemListElement: FLEET_VEHICLES.map((car) => ({
      '@type': 'ListItem',
      item: {
        '@type': 'Service',
        name: `Renta de Limusina ${car.title}`,
        serviceType: 'Renta de Limusina de Lujo con Chofer',
        description: car.metaDescription,
        url: `${COMPANY_DATA.domain}${car.path}`,
        image: `${COMPANY_DATA.domain}${car.src}`,
        provider: {
          '@id': `${COMPANY_DATA.domain}/#localbusiness`,
        },
      },
    })),
  };

  const graph: Record<string, unknown>[] = [
    // 1. Organization
    {
      '@type': 'Organization',
      '@id': `${COMPANY_DATA.domain}/#organization`,
      name: COMPANY_DATA.name,
      alternateName: COMPANY_DATA.legalName,
      url: `${COMPANY_DATA.domain}/`,
      logo: {
        '@type': 'ImageObject',
        url: COMPANY_DATA.logoSquare,
        width: 180,
        height: 180,
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: COMPANY_DATA.phoneClean,
          contactType: 'customer service',
          availableLanguage: ['es-MX'],
        },
      ],
      sameAs: [COMPANY_DATA.facebookUrl],
    },

    // 2. WebSite
    {
      '@type': 'WebSite',
      '@id': `${COMPANY_DATA.domain}/#website`,
      name: COMPANY_DATA.brand,
      url: `${COMPANY_DATA.domain}/`,
      inLanguage: 'es-MX',
      publisher: {
        '@id': `${COMPANY_DATA.domain}/#organization`,
      },
    },

    // 3. LocalBusiness
    // JUSTIFICACIÓN SCHEMA.ORG: Schema.org no contiene el tipo "LimousineService".
    // El tipo formal estándar más cercano dentro de Service es "TaxiService" y "ProfessionalService"
    // con additionalType hacia Wikipedia Limousine para máxima precisión semántica.
    {
      '@type': ['LocalBusiness', 'TaxiService'],
      '@id': `${COMPANY_DATA.domain}/#localbusiness`,
      additionalType: 'https://en.wikipedia.org/wiki/Limousine',
      name: COMPANY_DATA.name,
      image: COMPANY_DATA.ogImageDefault,
      url: `${COMPANY_DATA.domain}/`,
      telephone: COMPANY_DATA.phoneClean,
      priceRange: COMPANY_DATA.priceRange,
      paymentAccepted: COMPANY_DATA.paymentAccepted,
      currenciesAccepted: COMPANY_DATA.currenciesAccepted,
      parentOrganization: {
        '@id': `${COMPANY_DATA.domain}/#organization`,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: COMPANY_DATA.addressLocality,
        addressRegion: COMPANY_DATA.addressRegion,
        addressCountry: COMPANY_DATA.addressCountry,
      },
      areaServed: areasServed,
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      ],
      hasOfferCatalog: fleetCatalog,
    },

    // 4. WebPage
    {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      inLanguage: 'es-MX',
      isPartOf: {
        '@id': `${COMPANY_DATA.domain}/#website`,
      },
      about: {
        '@id': `${COMPANY_DATA.domain}/#localbusiness`,
      },
    },
  ];

  // 5. Service específico si la ruta corresponde a una página de ocasión, vehículo o zona
  if (serviceType && serviceName) {
    graph.push({
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: serviceName,
      serviceType,
      description,
      provider: {
        '@id': `${COMPANY_DATA.domain}/#localbusiness`,
      },
      areaServed: {
        '@type': 'City',
        name: 'Ciudad de México',
      },
      url: canonical,
    });
  }

  // 6. BreadcrumbList para páginas internas
  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonical}#breadcrumb`,
      itemListElement: breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    });
  }

  // 7. FAQPage si la página incluye FAQs visibles (Home)
  if (includeFAQ || isHome) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: FAQ_DATA.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

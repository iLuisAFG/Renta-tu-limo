export interface ZoneItem {
  id: string;
  slug: string;
  path: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  image: string;
  alt: string;
  description: string;
  keyAvenues: string[];
  popularVenues: string[];
  contentParagraphs: string[];
  recommendedVehicles: string[];
}

export const ZONES_DATA: ZoneItem[] = [
  {
    id: 'polanco',
    slug: 'polanco',
    path: '/cobertura/polanco/',
    title: 'Renta de Limusinas en Polanco, CDMX',
    subtitle: 'Distinción & Confort en la Zona Hotelera y Residencial Más Exclusiva',
    metaTitle: 'Renta de Limusinas en Polanco CDMX | Renta tu Limo',
    metaDescription: 'Renta de limusinas en Polanco para bodas, XV años y cenas de gala. Flota Hummer y Cadillac con chofer de gala y puntualidad de contrato. Cotiza hoy.',
    heroHeadline: 'Transporte de alta gama en el corazón de Polanco y Campos Elíseos.',
    image: '/images/hero-limo.png',
    alt: 'Limusinas de lujo circulando por Polanco y Paseo de la Reforma en CDMX',
    description: 'Servicio puerta a puerta en residencias, hoteles de cinco estrellas y templos de Polanco con chofer de etiqueta formal y monitoreo de ruta.',
    keyAvenues: ['Avenida Presidente Masaryk', 'Campos Elíseos', 'Horacio y Homero', 'Moliere y Ferrocarril de Cuernavaca'],
    popularVenues: ['Parroquia de San Agustín', 'Hoteles de Campos Elíseos', 'Restaurantes de Masaryk', 'Museo Soumaya'],
    contentParagraphs: [
      'Polanco es el epicentro del glamour, la alta gastronomía y la vida diplomática en la Ciudad de México. Ya sea para una salida desde hoteles de prestigio sobre Campos Elíseos, un enlace nupcial en la Parroquia de San Agustín o una cena de aniversario sobre Avenida Masaryk, contar con una limusina de primer nivel eleva la ocasión a un estándar insuperable.',
      'En Renta tu Limo conocemos a detalle las particularidades viales y accesos de la zona: desde las calles residenciales arboladas hasta los accesos vehiculares de salones y hoteles. Nuestros choferes ejecutivos coordinan los tiempos con holgura para que los festejados nunca experimenten demoras por el tráfico habitual de la colonia.',
      'Ofrecemos un esquema de servicio a domicilio garantizado: la limusina contratada se presenta con 15 a 20 minutos de anticipación en el punto indicado, con interiores sanitizados, piso iluminado y bebidas frías de cortesía listas para el inicio del recorrido.',
    ],
    recommendedVehicles: ['Cadillac Escalade 2020 (15 pax)', 'Escalade Negra (13 pax)', 'Lincoln MKX (12 pax)'],
  },
  {
    id: 'santa-fe',
    slug: 'santa-fe',
    path: '/cobertura/santa-fe/',
    title: 'Renta de Limusinas en Santa Fe, CDMX',
    subtitle: 'Vanguardia Arquitectónica & Transporte de Alto Nivel',
    metaTitle: 'Renta de Limusinas en Santa Fe CDMX | Renta tu Limo',
    metaDescription: 'Servicio de renta de limusinas en Santa Fe para bodas, graduaciones y galas corporativas. Flota Escalade y Hummer con chofer privado. Cotiza vía WhatsApp.',
    heroHeadline: 'Elegancia sobre ruedas entre los rascacielos del poniente capitalino.',
    image: '/images/interior-limo.png',
    alt: 'Renta de limusina en Santa Fe Ciudad de México para graduaciones y bodas',
    description: 'Cobertura completa en la zona corporativa y residencial de Santa Fe, Cuajimalpa y Bosques con unidades climatizadas y chofer certificado.',
    keyAvenues: ['Avenida Santa Fe', 'Prolongación Paseo de la Reforma', 'Vasco de Quiroga', 'Carretera México-Toluca'],
    popularVenues: ['Parque La Mexicana', 'Centros de Convenciones Expo Santa Fe', 'Hoteles de Vasco de Quiroga', 'Haciendas de Cuajimalpa'],
    contentParagraphs: [
      'Santa Fe representa la modernidad financiera de la Ciudad de México, caracterizada por sus imponentes torres corporativas, complejos residenciales de primer orden y universidades de gran prestigio. Para recepciones de bodas en haciendas cercanas, graduaciones universitarias o cenas corporativas de premiación, el transporte en limusina es el complemento perfecto.',
      'Debido a las pendientes y accesos de vías rápidas de la zona poniente, nuestra flota de camionetas alargadas Hummer H2/H3 y Cadillac Escalade con motores potentes y suspensión de confort asegura traslados estables y silenciosos tanto en subidas como en avenidas principales.',
      'El servicio incluye combustible del trayecto convenido, chofer uniformado en traje formal con trato respetuoso y discreto, barra de bebidas a bordo y la seguridad de un contrato de servicio por escrito que ampara la puntualidad en sitio.',
    ],
    recommendedVehicles: ['Hummer H2 Puertas de Gaviota (14 pax)', 'Escalade Platinum (14 pax)', 'Cadillac Escalade 2020 (15 pax)'],
  },
  {
    id: 'interlomas',
    slug: 'interlomas',
    path: '/cobertura/interlomas/',
    title: 'Renta de Limusinas en Interlomas y Huixquilucan',
    subtitle: 'Exclusividad Residencial & Fiestas de Quince Años en el Poniente',
    metaTitle: 'Renta de Limusinas en Interlomas | Renta tu Limo',
    metaDescription: 'Renta de limusinas en Interlomas y Huixquilucan para XV años y bodas. Limusinas Hummer y Escalade con piso de cristal y chofer de gala. Cotiza hoy.',
    heroHeadline: 'Servicio a domicilio en los fraccionamientos más prestigiosos de Huixquilucan.',
    image: '/images/reserva-tarmac.png',
    alt: 'Limusinas para eventos en Interlomas, Bosque Real y Huixquilucan Estado de México',
    description: 'Traslados para celebraciones familiares y juveniles en Interlomas, Bosque Real, La Herradura y Jesús del Monte con máxima seguridad y puntualidad.',
    keyAvenues: ['Boulevard Interlomas', 'Vía Magna', 'Avenida Jesús del Monte', 'Autopista Chamapa-La Venta'],
    popularVenues: ['Club de Golf Bosque Real', 'Salones y jardines de Huixquilucan', 'Parroquias de La Herradura', 'Centros de eventos de Interlomas'],
    contentParagraphs: [
      'Interlomas y el municipio de Huixquilucan concentran algunos de los desarrollos residenciales y clubes privados más exclusivos de la zona metropolitana. Las celebraciones de quince años, enlaces matrimoniales y bar/bat mitzvahs en esta zona exigen vehículos impecables con capacidad amplia para familias y grupos de amigos.',
      'Nuestras limusinas Hummer H2 de 14 a 16 pasajeros y Cadillac Escalade Platinum ofrecen la altura y porte ideales para acceder con soltura a los fraccionamientos cerrados de Bosque Real, Lomas Anáhuac o La Herradura. Los choferes están acreditados para cumplir con los filtros de acceso de casetas de seguridad privada con anticipación.',
      'Los festejados gozan de un habitáculo equipado con piso de cristal, pantallas de alta definición, iluminación LED festiva y bebidas de cortesía, permitiendo que el festejo inicie desde la salida de su domicilio particular hacia el recinto de fiesta.',
    ],
    recommendedVehicles: ['Hummer H2 Imperial (16 pax)', 'Hummer H3 Puertas de Bandera (14 pax)', 'Escalade Platinum (14 pax)'],
  },
  {
    id: 'coyoacan',
    slug: 'coyoacan',
    path: '/cobertura/coyoacan/',
    title: 'Renta de Limusinas en Coyoacán y San Ángel',
    subtitle: 'Tradición Colonial, Sesiones Fotográficas & Bodas Románticas',
    metaTitle: 'Renta de Limusinas en Coyoacán y San Ángel | Renta tu Limo',
    metaDescription: 'Renta de limusinas en Coyoacán y San Ángel para bodas y XV años. Sesiones de fotos en el centro histórico colonial y chofer de gala. Cotiza al momento.',
    heroHeadline: 'El contraste perfecto entre historia colonial y lujo automotriz contemporáneo.',
    image: '/images/hero-limo.png',
    alt: 'Renta de limusina nupcial en Coyoacán y San Ángel al sur de la Ciudad de México',
    description: 'Servicio nupcial y de quince años en las calles empedradas y templos históricos del sur de la CDMX (San Juan Bautista, San Jacinto, Jardín Hidalgo).',
    keyAvenues: ['Avenida Miguel Ángel de Quevedo', 'Avenida Universidad', 'Avenida Insurgentes Sur', 'Avenida México Coyoacán'],
    popularVenues: ['Parroquia de San Juan Bautista', 'Iglesia de San Jacinto en San Ángel', 'Hacienda de Cortés', 'Jardín Borda y alrededores'],
    contentParagraphs: [
      'El sur de la Ciudad de México, con barrios emblemáticos como Coyoacán, San Ángel y Chimalistac, es el escenario tradicional por excelencia para enlaces nupciales románticos en templos del siglo XVI y recepciones en haciendas coloniales centenarias.',
      'Circular por estas avenidas a bordo de una elegante limusina Lincoln MKX o una Escalade Negra Presidencial ofrece una experiencia nostálgica y distinguida. Los novios o quinceañeras aprovechan las paradas programadas para capturar sesiones fotográficas memorables junto a las fachadas de cantera y fuentes de la zona sur.',
      'Nuestros operadores dominan la navegación en calles empedradas y accesos estrechos característicos de San Ángel y Coyoacán, asegurando maniobras suaves y seguras. El servicio incluye botella de cortesía para brindar y asistencia personalizada en cada descenso.',
    ],
    recommendedVehicles: ['Lincoln MKX (12 pax)', 'Escalade Negra (13 pax)', 'Cadillac Escalade 2020 (15 pax)'],
  },
  {
    id: 'ciudad-satelite',
    slug: 'ciudad-satelite',
    path: '/cobertura/ciudad-satelite/',
    title: 'Renta de Limusinas en Satélite y Naucalpan',
    subtitle: 'Celebraciones de Quince Años & Bodas en la Zona Norte Metropolitana',
    metaTitle: 'Renta de Limusinas en Satélite y Naucalpan | Renta tu Limo',
    metaDescription: 'Renta de limusinas en Ciudad Satélite y Naucalpan para XV años y graduaciones. Flota Hummer y Escalade con chofer de gala y puntualidad de contrato.',
    heroHeadline: 'Llegadas de alto impacto junto a las emblemáticas Torres de Satélite.',
    image: '/images/interior-limo.png',
    alt: 'Limusinas de fiesta para eventos en Ciudad Satélite, Lomas Verdes y Naucalpan',
    description: 'Cobertura directa en Ciudad Satélite, Lomas Verdes, Zona Esmeralda y Naucalpan de Juárez con chofer profesional y amenidades VIP.',
    keyAvenues: ['Periférico Norte (Boulevard Manuel Ávila Camacho)', 'Avenida Lomas Verdes', 'Circuito Juristas y Economistas', 'Avenida Gustavo Baz'],
    popularVenues: ['Parroquia San Felipe de Jesús', 'Jardines de eventos en Zona Esmeralda', 'Haciendas de Naucalpan', 'Restaurantes y salones de Periférico'],
    contentParagraphs: [
      'Ciudad Satélite y Naucalpan representan el corazón social y comercial de la zona norte del Valle de México. Es una de las regiones con mayor tradición en celebraciones de quince años multitudinarias, donde las familias buscan que la llegada de la festejada sea el momento más recordado por vecinos y amigos.',
      'Nuestras limusinas Hummer H2 y H3 con puertas de gaviota y bandera son las favoritas indiscutibles en Satélite. Su altura permite vistas privilegiadas durante el recorrido por Periférico y Lomas Verdes, además de brindar la oportunidad de realizar sesiones fotográficas espectaculares con las Torres de Satélite de fondo.',
      'Garantizamos la recolección puntual en tu domicilio en Satélite, Echegaray, Lomas Verdes o Zona Esmeralda, traslado seguro de todos los jóvenes con música en sonido envolvente y entrega directa en el salón de eventos contratado.',
    ],
    recommendedVehicles: ['Hummer H2 Puertas de Gaviota (14 pax)', 'Hummer H3 (12 pax)', 'Hummer H2 Imperial (16 pax)'],
  },
];

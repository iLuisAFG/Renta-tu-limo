export interface OccasionItem {
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
  contentParagraphs: string[];
  recommendedVehicles: string[];
  perks: string[];
}

export const OCCASIONS_DATA: OccasionItem[] = [
  {
    id: 'bodas',
    slug: 'bodas',
    path: '/limusinas-para-bodas/',
    title: 'Renta de Limusinas para Bodas en CDMX',
    subtitle: 'Llegadas Nupciales Triunfales & Elegancia de Gala',
    metaTitle: 'Renta de Limusinas para Bodas en CDMX | Renta tu Limo',
    metaDescription: 'Renta de limusinas para bodas en CDMX con chofer de etiqueta, champaña y alfombra roja. Unidades Hummer y Escalade para 12 a 16 personas. Cotiza hoy.',
    heroHeadline: 'La llegada soñada para el día más importante de tu vida.',
    image: '/images/hero-limo.png',
    alt: 'Renta de limusina para bodas de gala en Ciudad de México con chofer ejecutivo',
    description: 'Servicio exclusivo de transporte nupcial con chofer de gala en traje formal, botella de champaña de cortesía, sesión fotográfica en ruta y puntualidad garantizada por contrato.',
    contentParagraphs: [
      'El día de tu boda merece un traslado a la altura de la emoción y solemnidad del acontecimiento. En Renta tu Limo coordinamos cada detalle logístico para que los novios, sus padrinos o el cortejo nupcial completo experimenten un trayecto libre de estrés, sereno y lleno de sofisticación por las avenidas de la Ciudad de México y Área Metropolitana.',
      'Nuestras limusinas Cadillac Escalade, Hummer y Lincoln cuentan con amplios espacios interiores diseñados para preservar vestidos de novia con caudas largas y peinados de gala sin contratiempos. Cada unidad se entrega con limpieza profunda y sanitización previa, asientos de piel impecables, climatización digital independiente y cristales entintados para una privacidad absoluta.',
      'El servicio nupcial incluye la presencia del chofer privado con 15 a 20 minutos de anticipación al domicilio o hotel de salida, apoyo con sombrilla ceremonial en caso de lluvia, protocolo de apertura de puertas en el templo y recepción, botella de espumoso o champaña de cortesía para el primer brindis como esposos y tiempo programado para sesiones de fotografía en monumentos o locaciones emblemáticas de la capital.',
    ],
    recommendedVehicles: ['Cadillac Escalade 2020 (15 pax)', 'Lincoln MKX (12 pax)', 'Escalade Platinum (14 pax)'],
    perks: [
      'Chofer profesional en traje de etiqueta formal y guantes ceremoniales',
      'Botella de espumoso / champaña de cortesía y copas de cristal',
      'Llegada garantizada 15 a 20 minutos antes de la hora pactada',
      'Itinerario flexible con tiempo para sesión de fotos nupcial',
      'Contrato formal por escrito con garantía de unidad y fecha',
    ],
  },
  {
    id: 'xv-anos',
    slug: 'xv-anos',
    path: '/limusinas-para-xv-anos/',
    title: 'Renta de Limusinas para XV Años en CDMX',
    subtitle: 'La Entrada Triunfal que Tu Quinceañera Recordará Siempre',
    metaTitle: 'Renta de Limusinas para XV Años en CDMX | Renta tu Limo',
    metaDescription: 'Renta de limusinas para XV años en CDMX. Unidades Hummer y Escalade con luces LED, sonido Bluetooth y puertas de gaviota. Cotiza vía WhatsApp.',
    heroHeadline: 'Convierte el trayecto en la fiesta previa más espectacular.',
    image: '/images/interior-limo.png',
    alt: 'Interior de limusina iluminada para fiesta de quince años en CDMX con amigas y chambelanes',
    description: 'El mejor ambiente juvenil sobre ruedas para la quinceañera, sus damas y chambelanes: iluminación tipo lounge, piso de cristal, pantallas y sonido de concierto.',
    contentParagraphs: [
      'Celebrar los quince años es un rito de paso inolvidable en las familias mexicanas. La llegada en limusina al templo religioso y a la entrada del salón de fiestas o jardín es uno de los momentos cumbres donde se centran todas las miradas, cámaras y videos de los invitados.',
      'Nuestra flota cuenta con los modelos favoritos de las quinceañeras: la icónica Hummer H2 con puertas de gaviota de elevación vertical, la Hummer H3 con puertas de bandera y la Escalade Platinum con pantalla de 50 pulgadas. Estas unidades permiten albergar desde 12 hasta 16 amigos y chambelanes cómodamente sentados, brindando un espacio seguro y divertido para compartir la emoción del evento.',
      'A bordo, los jóvenes disfrutan de conexión inalámbrica Bluetooth para reproducir sus listas musicales en sistemas de audio de alta fidelidad, iluminación ambiental LED multicolor sincronizada, piso de cristal iluminado y bebidas refrescantes sin alcohol de cortesía. Como padres de familia, cuentan con la tranquilidad de un chofer profesional certificado y monitoreo de ruta.',
    ],
    recommendedVehicles: ['Hummer H2 Puertas de Gaviota (14 pax)', 'Escalade Platinum (14 pax)', 'Hummer H2 Imperial (16 pax)'],
    perks: [
      'Puertas de gaviota o bandera para un descenso fotográfico espectacular',
      'Conexión Bluetooth para la playlist elegida por la quinceañera',
      'Refrescos fríos, agua embotellada y botanas de cortesía a bordo',
      'Piso de cristal iluminado y techo panorámico para fotos y videos',
      'Chofer con conducción prudente y comunicación constante con los padres',
    ],
  },
  {
    id: 'graduaciones',
    slug: 'graduaciones',
    path: '/limusinas-para-graduaciones/',
    title: 'Limusinas para Graduaciones en CDMX',
    subtitle: 'Celebra Tu Éxito Académico con Estilo de Alfombra Roja',
    metaTitle: 'Renta de Limusinas para Graduaciones CDMX | Renta tu Limo',
    metaDescription: 'Renta de limusinas para graduaciones escolares y universitarias en CDMX. Capacidad hasta 16 amigos, sonido premium y bar a bordo. Cotiza hoy.',
    heroHeadline: 'El cierre de ciclo que merece un brindis en primera clase.',
    image: '/images/reserva-tarmac.png',
    alt: 'Renta de limusinas para cenas y fiestas de graduación en la Ciudad de México',
    description: 'Traslados grupales para graduados hacia recepciones, cenas de gala y antros en la CDMX con música de concierto, bebidas frías y privacidad total.',
    contentParagraphs: [
      'Culminar una etapa académica de secundaria, preparatoria o universidad es motivo de festejo compartido con los mejores compañeros de generación. Llegar a la fiesta de graduación a bordo de una limusina Hummer o Cadillac Escalade es el distintivo de gala que corona años de esfuerzo y compañerismo.',
      'Olvídate de la logística complicada de coordinar múltiples autos particulares o servicios de aplicación en horarios de noche. Nuestra flota permite que grupos de hasta 16 graduados viajen juntos con total seguridad, disfrutando de música envolvente, iluminación de fiesta, asientos en piel y bebidas frías de cortesía mientras recorren las avenidas de la metrópoli.',
      'Ofrecemos paquetes por horas que incluyen recolección en punto acordado, parada para sesión fotográfica en monumentos o parques emblemáticos, arribo coordinado a la alfombra roja del evento y retorno seguro garantizado al finalizar la velada.',
    ],
    recommendedVehicles: ['Hummer H2 Imperial (16 pax)', 'Cadillac Escalade 2020 (15 pax)', 'Hummer H3 (12 pax)'],
    perks: [
      'Capacidad grupal de 12 a 16 graduados en un solo vehículo',
      'Audio de alta fidelidad para música continua de celebración',
      'Paradas programadas para sesión de fotografías de toga o traje',
      'Retorno seguro y coordinado al término de la noche',
      'Puntualidad rigurosa respaldada por contrato formal',
    ],
  },
  {
    id: 'eventos-vip',
    slug: 'eventos-vip',
    path: '/limusinas-para-eventos/',
    title: 'Limusinas para Eventos y Noches VIP en CDMX',
    subtitle: 'Aniversarios, Conciertos, Cumpleaños & Cenas de Gala',
    metaTitle: 'Limusinas para Eventos y Noches VIP en CDMX | Renta tu Limo',
    metaDescription: 'Renta de limusinas para eventos, aniversarios y noches de fiesta VIP en CDMX. Servicio con chofer privado, sonido premium y bar de cortesía.',
    heroHeadline: 'El trayecto se convierte en el epicentro de la celebración.',
    image: '/images/hero-limo.png',
    alt: 'Limusinas de lujo para eventos sociales, conciertos y celebraciones en Ciudad de México',
    description: 'Experiencias de alto impacto para cumpleaños, paseos nocturnos románticos por Paseo de la Reforma, conciertos y alfombras rojas con servicio concierge 24/7.',
    contentParagraphs: [
      'En las grandes noches de celebración de la Ciudad de México, el trayecto no debe ser una pausa tediosa en el tráfico, sino una parte vibrante y memorable de la experiencia. Con Renta tu Limo, tu noche especial comienza en el instante exacto en que abordas la limusina y se cierran las puertas.',
      'Diseñamos recorridos a la medida por zonas emblemáticas como Paseo de la Reforma, el Ángel de la Independencia, Fuente de Cibeles o el Centro Histórico, ofreciendo una vista panorámica nocturna inigualable a través del quemacocos de cristal mientras brindas con tus invitados con copas y bebidas de cortesía.',
      'Ya sea para un aniversario de bodas íntimo, un cumpleaños sorpresa con amigos, la llegada a un concierto internacional en el Auditorio Nacional o una gala de premios, nuestro equipo concierge coordina rutas y tiempos para que tú solo te ocupes de disfrutar.',
    ],
    recommendedVehicles: ['Escalade Platinum (14 pax)', 'Escalade Negra (13 pax)', 'Lincoln MKX (12 pax)'],
    perks: [
      'Ruta turística y nocturna personalizada en la CDMX',
      'Bebidas de cortesía con hielera y cristalería incluida',
      'Aislamiento acústico para máxima privacidad interior',
      'Espera del chofer durante el desarrollo de tu cena o evento',
      'Atención y cotización inmediata vía WhatsApp las 24 horas',
    ],
  },
  {
    id: 'traslados-ejecutivos',
    slug: 'traslados-ejecutivos',
    path: '/traslados-ejecutivos-aeropuerto/',
    title: 'Traslados Ejecutivos y Aeropuerto (AICM / AIFA)',
    subtitle: 'Discreción, Confort de Alto Nivel & Protocolo Corporativo',
    metaTitle: 'Traslados Ejecutivos y Aeropuerto CDMX | Renta tu Limo',
    metaDescription: 'Servicio de limusinas y traslados ejecutivos al AICM y AIFA en CDMX. Chofer bilingüe de protocolo, máxima discreción y puntualidad de contrato.',
    heroHeadline: 'Puntualidad milimétrica y confidencialidad para directivos.',
    image: '/images/reserva-tarmac.png',
    alt: 'Traslado ejecutivo en limusina en pista de aterrizaje y aeropuerto en CDMX',
    description: 'Transporte corporativo y diplomático de alta gama para personalidades, comitivas internacionales y traslados terminal AICM / AIFA / Toluca.',
    contentParagraphs: [
      'Para directores corporativos, inversionistas, personalidades públicas y comitivas diplomáticas, el tiempo y la confidencialidad son activos invaluables. Renta tu Limo ofrece servicios de transporte ejecutivo de protocolo diseñados para cumplir con los estándares más estrictos de seguridad y confort.',
      'Brindamos traslados punto a punto y disposiciones por horas entre los aeropuertos internacionales de la región (AICM Terminales 1 y 2, AIFA y Aeropuerto Internacional de Toluca) y los centros financieros y residenciales de Polanco, Paseo de la Reforma, Santa Fe e Interlomas.',
      'Nuestras unidades Escalade Negra y Lincoln ofrecen mampara divisoria de privacidad total, vidrios entintados de alta seguridad, climatización silenciosa y choferes con capacitación en etiqueta formal y estricta confidencialidad. Facturación fiscal formal (CFDI) disponible para todas las contrataciones.',
    ],
    recommendedVehicles: ['Escalade Negra Black Edition (13 pax)', 'Cadillac Escalade 2020 (15 pax)', 'Lincoln MKX (12 pax)'],
    perks: [
      'Recepción personalizada en salas de llegadas o aviación general / FBO',
      'Chofer capacitado en manejo defensivo y confidencialidad',
      'Mampara divisoria física e intercomunicador privado',
      'Facturación corporativa con CFDI deducible',
      'Monitoreo satelital de itinerario y vuelos en tiempo real',
    ],
  },
];

export type Occasion = OccasionItem;
export const OCCASIONS = OCCASIONS_DATA;

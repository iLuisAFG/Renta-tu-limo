export interface Occasion {
  id: string;
  title: string;
  tag: string;
  heroHeadline: string;
  description: string;
  image: string;
  recommendedVehicle: string;
  perks: string[];
}

export const OCCASIONS_DATA: Occasion[] = [
  {
    id: 'bodas',
    title: 'Bodas de Ensueño',
    tag: 'NUPCIAL VIP',
    heroHeadline: 'La llegada celestial que consagra tu unión.',
    description: 'Comprendemos la solemnidad y emoción de tu boda. Cuidamos cada milímetro: desde el descenso en alfombra roja ante las puertas del templo hasta el brindis nupcial a bordo mientras se dirigen a la gran recepción.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    recommendedVehicle: 'Cadillac Escalade Stretch o Chrysler 300 Tuxedo',
    perks: [
      'Despliegue de alfombra roja ceremonial al descender',
      'Botella de Champaña de etiqueta europea para el primer brindis de esposos',
      'Chófer en traje formal de gala con protocolo nupcial y sombrilla de seda',
      'Itinerario blindado con holgura para sesión de fotografía de novios',
      'Climatización perfecta para preservar el vestido y peinado intactos',
    ],
  },
  {
    id: 'xv-anos',
    title: 'XV Años Inolvidables',
    tag: 'CELEBRACIÓN JUVENIL',
    heroHeadline: 'La corte de honor y una entrada triunfal de época.',
    description: 'Transforma el trayecto en la fiesta previa más deslumbrante. Espacio suficiente para la quinceañera, damas y chambelanes, iluminado por un techo de estrellas y la música que ellos elijan en sonido de estudio.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85',
    recommendedVehicle: 'Cadillac Escalade Platinum Stretch (20 Pasajeros)',
    perks: [
      'Iluminación interactiva Starlight sincronizada con el ambiente',
      'Bar de cortesía con cócteles vírgenes, sodas artesanales y botanas',
      'Conexión Bluetooth inmediata para playlist personalizada de la quinceañera',
      'Paradas fotográficas en los monumentos más icónicos de la metrópolis',
      'Supervisión y comunicación continua con los padres de familia',
    ],
  },
  {
    id: 'noches-vip',
    title: 'Noches VIP & Fiestas',
    tag: 'NOCTURNO & GALA',
    heroHeadline: 'El trayecto no es el traslado, es el epicentro de la noche.',
    description: 'Para aniversarios estelares, cumpleaños VIP, conciertos internacionales o noches de fiesta en los mejores clubes nocturnos. Brinda con tus invitados mientras la ciudad desfila por las ventanas panorámicas entintadas.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
    recommendedVehicle: 'Hummer H2 Lounge o Lincoln Navigator Ultra-Luxe',
    perks: [
      'Cava completa con hielo, copas y mezcladores premium listos al abordaje',
      'Aislamiento acústico para disfrutar la música con volumen y privacidad total',
      'Coordinación de llegada coordinada en puerta principal de antros o recintos',
      'Recogida y retorno seguro a domicilio para todo el grupo',
      'Flexibilidad horaria con chofer a disposición exclusiva durante la noche',
    ],
  },
  {
    id: 'corporativo',
    title: 'Traslados Ejecutivos & Alfombra Roja',
    tag: 'DIPLOMACIA & NEGOCIOS',
    heroHeadline: 'Discreción inquebrantable para líderes y figuras públicas.',
    description: 'Servicio diseñado para cumbres de negocios, conferencias internacionales, estrenos cinematográficos y traslados aeropuerto-hotel de personalidades C-Level y dignatarios extranjeros.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85',
    recommendedVehicle: 'Lincoln Navigator Ultra-Luxe o Chrysler 300 Imperial',
    perks: [
      'Chófer bilingüe con certificación en manejo defensivo y confidencialidad',
      'Seguimiento telemático privado para el equipo de logística o comitiva',
      'Wi-Fi 5G encriptado para trabajo continuo y videollamadas a bordo',
      'Recepción personalizada en sala VIP de aeropuerto con letrero de protocolo',
      'Facturación corporativa instantánea (CFDI deducible)',
    ],
  },
];

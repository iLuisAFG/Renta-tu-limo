export interface Limousine {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  capacity: string;
  length: string;
  image: string;
  description: string;
  amenities: {
    iconName: 'Wine' | 'Music' | 'Sparkles' | 'Shield' | 'Tv' | 'Wifi';
    label: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  accentColor: string;
}

export const FLEET_DATA: Limousine[] = [
  {
    id: 'escalade-stretch',
    name: 'Cadillac Escalade Platinum Stretch',
    subtitle: 'La cúspide del transporte ceremonial y presidencial',
    tag: 'BUQUE INSIGNIA',
    capacity: '18 - 20 Pasajeros',
    length: '11.5 Metros',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85',
    description: 'Nuestra unidad más imponente. Diseñada para bodas multitudinarias, comitivas de embajadas y fiestas de quince años de primer orden, con una presencia inigualable sobre cualquier avenida.',
    amenities: [
      { iconName: 'Sparkles', label: 'Techo Starlight con fibra óptica tridimensional' },
      { iconName: 'Wine', label: 'Bar doble con hieleras de granito y copas de cristal cortado' },
      { iconName: 'Music', label: 'Sistema acústico envolvente de 4,000 watts con Bluetooth' },
      { iconName: 'Tv', label: '3 Pantallas LED Ultra HD de 32" integradas' },
      { iconName: 'Shield', label: 'Mampara de privacidad total con intercomunicador al chofer' },
      { iconName: 'Wifi', label: 'Conectividad satelital y puertos de carga de alta velocidad' },
    ],
    specifications: [
      { label: 'Capacidad Recomendada', value: 'Hasta 20 personas' },
      { label: 'Tapicería Interior', value: 'Cuero Nappa Italiano y Alcantara' },
      { label: 'Iluminación Ambiental', value: 'Neón líquido regulable 64 colores' },
      { label: 'Climatización', value: 'Aire acondicionado cuádruple de alta potencia' },
    ],
    accentColor: '#D4AF37',
  },
  {
    id: 'chrysler-300-imperial',
    name: 'Chrysler 300 Imperial Tuxedo',
    subtitle: 'Elegancia clásica neoyorquina con silueta esbelta',
    tag: 'CLÁSICO ATEMPORAL',
    capacity: '10 - 12 Pasajeros',
    length: '8.8 Metros',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
    description: 'La opción predilecta para traslados nupciales íntimos, aniversarios de plata y cenas de gala. Su diseño sobrio y refinado ofrece la perfecta armonía entre distinción sobria y modernidad.',
    amenities: [
      { iconName: 'Wine', label: 'Cava refrigerada para botellas de espumoso de bienvenida' },
      { iconName: 'Sparkles', label: 'Iluminación cenital cálida con cristalería grabada' },
      { iconName: 'Music', label: 'Audio Premium Harman Kardon con ecualización de estudio' },
      { iconName: 'Shield', label: 'Cristales entintados de máxima privacidad (antivisibilidad)' },
      { iconName: 'Tv', label: 'Pantalla frontal para visualización de recuerdos o video clips' },
      { iconName: 'Wifi', label: 'Intercomunicador privado con chofer de protocolo' },
    ],
    specifications: [
      { label: 'Capacidad Recomendada', value: '10 personas con máximo confort' },
      { label: 'Tapicería Interior', value: 'Cuero Capitoné bitono carbón y champán' },
      { label: 'Iluminación', value: 'Tiras de luz perimetral ámbar cálido' },
      { label: 'Suspensión', value: 'Neumática adaptativa para un rodaje suave como nube' },
    ],
    accentColor: '#E2E8F0',
  },
  {
    id: 'navigator-presidential',
    name: 'Lincoln Navigator Ultra-Luxe',
    subtitle: 'El salón ejecutivo de vanguardia sobre ruedas',
    tag: 'EDICIÓN PRESIDENCIAL',
    capacity: '14 - 16 Pasajeros',
    length: '10.2 Metros',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85',
    description: 'Inspirada en las suites ejecutivas de los aviones privados. Espacio interior descomunal con techos elevados, alfombra de lana suave y barras de bar en ébano pulido.',
    amenities: [
      { iconName: 'Sparkles', label: 'Suelo iluminado con efecto de pasarela alfombrada' },
      { iconName: 'Wine', label: 'Bar iluminado con compartimentos para licores y hieleras' },
      { iconName: 'Music', label: 'Sistema acústico Revel Ultima 3D con 20 altavoces' },
      { iconName: 'Shield', label: 'Chófer con entrenamiento en seguridad y escolta' },
      { iconName: 'Tv', label: 'Doble pantalla HDMI para presentaciones o streaming' },
      { iconName: 'Wifi', label: 'Wi-Fi 5G privado y tomas de corriente 110V' },
    ],
    specifications: [
      { label: 'Capacidad Recomendada', value: '14 a 16 pasajeros' },
      { label: 'Acabados de Madera', value: 'Ébano Santos con barniz espejo' },
      { label: 'Aislamiento Acústico', value: 'Doble cristal laminado anti-ruido urbano' },
      { label: 'Servicio Incluido', value: 'Alfombra roja al descender y sombrillas de gala' },
    ],
    accentColor: '#F3E5AB',
  },
];

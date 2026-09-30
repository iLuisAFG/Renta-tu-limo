# Design System Master: Renta tu limo
**Version:** 1.0.0  
**Target Category:** Luxury VIP Automotive & Ceremonial Concierge (Mexico)  
**Tone & Vibe:** *Lujo contemporáneo, exclusivo, nocturno y confiable.*  
**Art Direction:** Editorial High Fashion & Automobile Atelier (Estilo Vogue / Rolls-Royce / Aston Martin)

---

## 1. Taste Skill Configuration & Dials

```yaml
DESIGN_VARIANCE: 8    # Layout asimétrico, editorial, dinámico, planos visuales superpuestos, anti-plantilla
MOTION_INTENSITY: 7   # Transiciones fluidas con físicas de resorte en scroll, hover e interacciones gestuales
VISUAL_DENSITY: 5     # Espaciado generoso, pacing de revista de lujo, respiración intencional y enfoque visual
```

### Directrices de Composición (Variance 8)
- **Ruptura de la cuadrícula rígida:** Empleo de composiciones asimétricas inspiradas en editoriales de moda (ej. imagen de limusina desfasada ocupando 60% del ancho con bloque tipográfico de alto contraste solapado en el 40%).
- **Estructura por capas y profundidad:** Capas de fondo en obsidiana con sutil grano/ruido visual (noise texture 2%), elementos flotantes con efecto *liquid glass*, y acentos dorados que emergen con iluminación volumétrica.
- **Micro-detalles de alta costura:** Líneas divisorias ultrafinas (hairlines de 1px a `rgba(212, 175, 55, 0.2)`), numeración romana o serif en baja opacidad como textura de fondo, y etiquetas en mayúsculas con espaciado amplio (`letter-spacing: 0.2em`).

---

## 2. Color System: Obsidian & Champagne Palette

> **Regla de oro:** Cero negros puros (`#000000`). La oscuridad debe ser viva, cinematográfica y rica en matices grafito y azul-noche de baja saturación. Cero degradados morados/azules genéricos de IA/SaaS.

### Paleta Principal (Variables CSS & Tailwind Tokens)

| Token Semántico | Nombre | Hex / HSL | Rol & Aplicación |
| :--- | :--- | :--- | :--- |
| `--bg-base` | **Obsidian Deep** | `#0B0C10` | Fondo principal de la aplicación. Noche pura con matiz carbón. |
| `--bg-surface` | **Graphite Night** | `#13141A` | Fondos de secciones alternas, barras de navegación y módulos. |
| `--bg-surface-elevated`| **Smoked Obsidian** | `#1C1D24` | Tarjetas de vehículos, paneles emergentes y superficies activas. |
| `--bg-glass` | **Liquid Glass Tint** | `rgba(19, 20, 26, 0.72)` | Superficies translúcidas con `backdrop-filter: blur(20px)`. |
| `--accent-gold-primary` | **Champagne Gold** | `#D4AF37` | Acento principal, botones primarios, ribetes selectos, precio VIP. |
| `--accent-gold-light` | **Pale Champagne** | `#F3E5AB` | Luces altas, estados de foco y reflejos de texto con acabado oro. |
| `--accent-gold-muted` | **Antique Bronze** | `#8F7326` | Bordes inactivos dorados, filigranas y contrastes sutiles. |
| `--accent-platinum` | **Liquid Platinum** | `#E2E8F0` | Acentos secundarios de metal frío, badges ejecutivos y destellos. |
| `--border-subtle` | **Hairline Border** | `rgba(255, 255, 255, 0.08)` | Bordes estructurales ultra limpios para delimitar sin saturar. |
| `--border-gold` | **Gold Hairline** | `rgba(212, 175, 55, 0.25)` | Bordes de tarjetas destacadas y elementos interactivos al hover. |

### Jerarquía Tipográfica y Contraste de Textos

| Token | Hex | Aplicación | Contraste WCAG |
| :--- | :--- | :--- | :--- |
| `--text-primary` | `#FBFBFC` (Off-White Silk) | Titulares Display y H1/H2 | 16.8:1 (AAA) |
| `--text-secondary` | `#CBD5E1` (Silver Slate) | Subtítulos y descripciones | 10.2:1 (AAA) |
| `--text-muted` | `#94A3B8` (Muted Zinc) | Metadatos, fichas técnicas, labels | 6.5:1 (AA) |
| `--text-accent` | `#D4AF37` (Champagne Gold) | Llamados de valor y estatus | 7.1:1 (AA) |

---

## 3. Typography System: Editorial High-Contrast

> **Regla de oro:** Cero tipografías genéricas de sistema (`Inter`, `Arial`, `Roboto`). Se utiliza una dualidad editorial de alta distinción: una Serif de alto contraste para titulares monumentales y una Sans-Serif geométrica refinada para lectura técnica y UI.

### Fuentes Seleccionadas (Google Fonts)

1. **Display & Headings: `Cormorant Garamond`** (alternativa didona: `Bodoni Moda`)
   - *Estilo:* Serif clásico renacentista con trazos de altísimo contraste entre finos y gruesos, elegancia señorial.
   - *Pesos:* 400 (Regular para títulos sutiles), 600 (Semi-Bold para jerarquía), Italic (para palabras de acento poético y lujo).
   - *Import URL:* `family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600`

2. **Body & Interface: `Plus Jakarta Sans`**
   - *Estilo:* Sans-serif geométrica con proporciones humanistas, apertura limpia y legibilidad impecable en pantallas retina.
   - *Pesos:* 300 (Light para párrafos editoriales), 400 (Regular), 500 (Medium para botones e inputs), 600 (Semi-bold para micro-labels).
   - *Import URL:* `family=Plus+Jakarta+Sans:wght@300;400;500;600;700`

3. **Sub-acento para Distinción & Números: `Cinzel`**
   - *Estilo:* Basada en inscripciones clásicas romanas, ideal para fechas, matrículas VIP, monogramas y sellos de garantía.
   - *Pesos:* 400, 600.
   - *Import URL:* `family=Cinzel:wght@400;600;700`

### CSS Import Unificado
```css
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
```

### Escala Tipográfica Editorial (Fluid Typography)
- **Display 1 (Hero Title):** `clamp(3.2rem, 7vw, 6.5rem)` | `font-serif tracking-tight leading-[1.05]`
- **Display 2 (Section Headings):** `clamp(2.2rem, 4.5vw, 3.8rem)` | `font-serif tracking-normal leading-[1.15]`
- **Subtitle Display:** `clamp(1.1rem, 1.8vw, 1.4rem)` | `font-sans font-light tracking-wide text-secondary`
- **Body Large:** `1.125rem (18px)` | `leading-[1.75] font-light text-secondary`
- **Body Base:** `1rem (16px)` | `leading-[1.65] font-normal text-muted`
- **Overline / Category Tag:** `0.75rem (12px)` | `uppercase font-sans font-semibold tracking-[0.25em] text-accent-gold`

---

## 4. Motion & Animation System (Emil Kowalski + Motion/React)

Siguiendo la filosofía de **Emil Kowalski Design Engineering**:
1. *Las cosas nunca se mueven a velocidad lineal en la naturaleza.*
2. *Para entradas usamos desaceleración (`ease-out` o amortiguación elástica controlada).*
3. *Para salidas usamos aceleración rápida (`ease-in` < 200ms).*
4. *Animamos únicamente propiedades de composición de hardware (`transform: translate3d/scale` y `opacity`).*

### Especificaciones de Curvas y Físicas (Springs)

```typescript
// Tokens de Animación para motion/react (framer-motion v13+)
export const luxurySpring = {
  type: "spring",
  stiffness: 120,
  damping: 20,
  mass: 0.8
};

export const snappyHover = {
  type: "spring",
  stiffness: 380,
  damping: 26
};

export const slowParallax = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] // Custom ease-out cinemático
};

export const modalTransition = {
  type: "spring",
  stiffness: 240,
  damping: 28,
  mass: 0.9
};
```

### Micro-Interacciones de Ultra Lujo
- **Efecto Aureola Dorada al Hover:** Bordes de tarjetas que transicionan suavemente a `box-shadow: 0 0 35px rgba(212, 175, 55, 0.12), inset 0 0 1px rgba(212, 175, 55, 0.4)`.
- **Botón VIP Magnético:** Botón con sutil seguimiento cursorial y gradiente metálico interno reflectante.
- **Revelación Escalonada (Stagger):** Textos de titulares que entran palabra por palabra o línea por línea con `staggerChildren: 0.08` y máscara de recorte `overflow-hidden`.
- **Scroll Parallax Editorial:** Las imágenes de la limusina y los fondos de cabina se desplazan a un 15% de velocidad relativa al scroll del usuario, creando sensación tridimensional de inmersión.

---

## 5. Component Patterns & Visual Artifacts

### 1. Botón Primario: "Concierge Champagne"
- **Fondo:** Gradiente metálico lineal champán (`linear-gradient(135deg, #DFBA53 0%, #D4AF37 50%, #B89328 100%)`).
- **Texto:** Carbón obsidiana oscuro (`#0B0C10`), tipografía `font-sans font-semibold tracking-wider text-xs uppercase`.
- **Borde:** 1px `rgba(255, 255, 255, 0.3)`.
- **Sombra:** `0 8px 24px rgba(212, 175, 55, 0.25)`.
- **Interacción:** Escala suave `whileHover={{ scale: 1.02 }}` y `whileTap={{ scale: 0.98 }}`.

### 2. Botón Secundario: "Platinum Ghost"
- **Fondo:** Translúcido `rgba(255, 255, 255, 0.03)`.
- **Borde:** 1px sólido `rgba(226, 232, 240, 0.2)`.
- **Texto:** Platino suave (`#F8FAFC`).
- **Interacción:** Al hover borde ilumina a champán `rgba(212, 175, 55, 0.6)` con fondo `rgba(212, 175, 55, 0.05)`.

### 3. Tarjeta de Flota / Showcase Card
- **Fondo:** `rgba(19, 20, 26, 0.85)` con `backdrop-filter: blur(24px)`.
- **Borde:** 1px `rgba(255, 255, 255, 0.07)`.
- **Esquinas:** Radio moderado y pulido (`rounded-2xl` - 16px), evitando redondeos excesivos o infantiles.
- **Detalle interno:** Badge de categoría en `Cinzel`, galería de interiores con switch interactivo y lista de especificaciones (capacidad de pasajeros, cava de champaña, sistema de sonido burmester/harmann, chófer privado).

---

## 6. Anti-Patterns Estrictamente Prohibidos (Checklist de Calidad)

- ❌ **Prohibido:** Usar degradados genéricos azul-cian o morado-fucsia tipo landing SaaS de IA.
- ❌ **Prohibido:** Fuentes genéricas sin alma (`Inter`, `Arial`, `Roboto`, `Segoe UI`).
- ❌ **Prohibido:** Fondos negros planos `#000000` sin matiz ni profundidad.
- ❌ **Prohibido:** Tarjetas flotantes encimadas tipo plantilla barata sin estructura narrativa.
- ❌ **Prohibido:** Animaciones tipo "bounce" elásticas caricaturescas que demeritan la solemnidad.
- ❌ **Prohibido:** Emojis como íconos (se utilizarán estrictamente íconos vectoriales SVG ultra refinados con stroke de 1.25px).
- ❌ **Prohibido:** Párrafos de texto denso sin jerarquía ni aire para respirar.

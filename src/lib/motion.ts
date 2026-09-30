import type { Transition, Variants } from 'motion/react';

/**
 * ============================================================================
 * PRESETS DE MOVIMIENTO EDITORIAL & FÍSICAS DE RESORTE (EMIL KOWALSKI DESIGN)
 * ============================================================================
 * - Nunca usar easings lineales ni rebotes elásticos caricaturescos.
 * - Entradas: Físicas de resorte orgánicas o curvas cinemáticas ease-out.
 * - Salidas: Desaceleración rápida (< 200ms) para respuesta ágil.
 * - Animaciones restringidas a transform (translate3d/scale) y opacity para 120 FPS.
 */

// 1. Físicas de Resorte (Springs)
export const luxurySpring: Transition = {
  type: 'spring',
  stiffness: 120,
  damping: 20,
  mass: 0.8,
};

export const gentleSpring: Transition = {
  type: 'spring',
  stiffness: 90,
  damping: 18,
  mass: 1.0,
};

export const snappySpring: Transition = {
  type: 'spring',
  stiffness: 360,
  damping: 25,
  mass: 0.6,
};

// 2. Curvas Temporales Cinemáticas
export const cinematicEaseOut: Transition = {
  duration: 0.85,
  ease: [0.16, 1, 0.3, 1], // Cubic-bezier editorial de alta costura
};

export const fastExitEase: Transition = {
  duration: 0.18,
  ease: [0.4, 0, 1, 1], // Salida ágil y limpia
};

// 3. Variantes de Animación Estándar para Componentes
export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: luxurySpring,
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: fastExitEase,
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const scaleRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: luxurySpring,
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    transition: fastExitEase,
  },
};

export const staggerContainerVariants = (staggerChildren = 0.08, delayChildren = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// 4. Presets para Micro-interacciones
export const luxuryHoverProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: snappySpring,
};

export const luxuryCardHoverProps = {
  whileHover: { y: -4 },
  transition: luxurySpring,
};

// 5. Utilidad de soporte para prefers-reduced-motion
export const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

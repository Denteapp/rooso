'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Presets de animación disponibles
 */
const animationPresets = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  slideDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  },
  slideFromLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  slideFromRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};

/**
 * Componente wrapper para animar elementos al entrar en el viewport
 * @param {Object} props
 * @param {ReactNode} props.children - Contenido a animar
 * @param {string} props.preset - Preset de animación (fadeIn, slideUp, etc.)
 * @param {number} props.duration - Duración de la animación en segundos
 * @param {number} props.delay - Delay antes de iniciar la animación
 * @param {number} props.threshold - Porcentaje del elemento visible para activar (0-1)
 * @param {boolean} props.once - Si la animación solo debe ocurrir una vez
 * @param {Object} props.staggerChildren - Configuración para animar hijos en secuencia
 */
export default function AnimateOnScroll({
  children,
  preset = 'fadeIn',
  duration = 0.5,
  delay = 0,
  threshold = 0.1,
  once = true,
  staggerChildren = null,
  className = ''
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold,
    margin: "0px 0px -100px 0px" // Activar un poco antes de que sea totalmente visible
  });

  const animation = animationPresets[preset] || animationPresets.fadeIn;

  const containerVariants = staggerChildren ? {
    hidden: animation.hidden,
    visible: {
      ...animation.visible,
      transition: {
        staggerChildren: staggerChildren.delay || 0.1,
        delayChildren: delay
      }
    }
  } : null;

  const itemVariants = staggerChildren ? {
    hidden: animation.hidden,
    visible: {
      ...animation.visible,
      transition: {
        duration,
        ease: 'easeOut'
      }
    }
  } : null;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants || animation}
      transition={containerVariants ? undefined : { 
        duration, 
        delay, 
        ease: 'easeOut' 
      }}
      className={className}
    >
      {staggerChildren && Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children
      }
    </motion.div>
  );
}

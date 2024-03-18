"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
}

export const ScrollAnimation = ({ children }: Props) => {
  const ref = useRef(null);

  // Hook useInView para detectar cuando el elemento referenciado está en el viewport
  // `once: false` indica que queremos que la detección sea continua y no una sola vez
  const isInView = useInView(ref, { once: false });

  const variants = {
    initial: {
      y: 150, // Inicia 300px más abajo de su posición final
      opacity: 0.1, // Inicia totalmente transparente
    },
    animate: {
      y: 0, // Mueve el elemento a su posición original en el eje Y
      opacity: 1, // Cambia la opacidad a totalmente opaco
      transition: {
        // Define cómo se realiza la transición entre estados
        duration: 0.7, // Duración de 0.5 segundos para la animación
        staggerChildren: 0.1, // Retraso para la animación de cada hijo
      },
    },
    exit: {
      y: -150, // Mueve el elemento 300px hacia arriba al salir de la vista
      opacity: 0.1, // Hace el elemento totalmente transparente al salir
      transition: {
        // Transición para la animación de salida
        duration: 0.4, // Duración de 0.5 segundos
        ease: "easeIn", // Tipo de "easing" para la transición
        staggerChildren: 0.1, // Retraso para la animación de salida de cada hijo
        staggerDirection: -1, // Esto asegura que los elementos hijos se animen en orden inverso
      },
    },
  };

  // Renderizado del componente
  // motion.div es un div que puede animarse con las variantes definidas
  // ref se asocia al div para detectar su visibilidad
  // Las animaciones se controlan con los estados initial, animate y exit
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "exit"}
    >
      {children}
    </motion.div>
  );
};

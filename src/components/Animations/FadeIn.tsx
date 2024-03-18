"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
interface Props {
  children: ReactNode;
}

export const FadeIn = ({ children }: Props) => {
  const variants = {
    hidden: {
      opacity: 0, // Inicia completamente transparente
      y: 25, // Puedes empezar ligeramente escalado hacia abajo para un efecto de "zoom"
    },
    visible: {
      opacity: 1, // Transición a completamente visible
      y: 1, // Escala a tamaño normal
      transition: {
        duration: 0.7, // Duración de la animación
        ease: "easeOut", // Tipo de easing para una apariencia suave
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {children}
    </motion.div>
  );
};

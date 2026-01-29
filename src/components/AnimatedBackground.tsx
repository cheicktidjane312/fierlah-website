"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  // 1. Définition des MotionValues au sommet
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Définition du Template de la lueur (Hook appelé au sommet)
  const spotlightGradient = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      rgba(0, 255, 255, 0.07),
      transparent 80%
    )
  `;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Écouteur global pour suivre la souris même avec pointer-events-none
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Rendu conditionnel APRÈS tous les Hooks
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none">
      
      {/* CYBER-GRILLE : Animation de défilement pour l'effet de profondeur */}
      <motion.div 
        initial={{ backgroundPosition: "0 0" }}
        animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08] bg-grid-black dark:bg-grid-white"
        style={{
             maskImage: "radial-gradient(circle at center, black, transparent 90%)",
             WebkitMaskImage: "radial-gradient(circle at center, black, transparent 90%)"
        }}
      />

      {/* SPOTLIGHT INTERACTIF : Suit le curseur pour éclairer la grille */}
      <motion.div
        className="absolute inset-0 opacity-0 md:opacity-100 transition-opacity duration-500"
        style={{ background: spotlightGradient }}
      />

      {/* BLOBS AMBIANTS : Pulsation pour donner de la vie au fond */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-primary rounded-full blur-[130px] mix-blend-screen"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-[20%] -right-[10%] w-[900px] h-[900px] bg-blue-600 rounded-full blur-[150px] mix-blend-screen"
      />

      {/* SCANLINES : Texture TV vintage / Futuriste très subtile */}
      <div className="absolute inset-0 bg-[url('/assets/grid.png')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>

    </div>
  );
}
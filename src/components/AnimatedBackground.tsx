"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  // Gestion de la souris pour l'effet "Spotlight"
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Empêcher l'hydratation mismatch (rendu serveur vs client)
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div 
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none"
      onMouseMove={handleMouseMove}
    >
      
      {/* 1. FOND DE BASE (Géré par layout.tsx, ici on ajoute juste la texture) */}
      
      {/* 2. CYBER-GRILLE MOUVANTE */}
      {/* Mode Jour : Grille Noire subtile / Mode Nuit : Grille Blanche subtile */}
      <motion.div 
        initial={{ backgroundPosition: "0 0" }}
        animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-grid-black dark:bg-grid-white"
        style={{
             maskImage: "linear-gradient(to bottom, transparent, black, transparent)",
             WebkitMaskImage: "linear-gradient(to bottom, transparent, black, transparent)"
        }}
      />

      {/* 3. SPOTLIGHT INTERACTIF (Suit la souris) */}
      {/* Crée une zone de lumière qui révèle la grille autour du curseur */}
      <motion.div
        className="absolute inset-0 opacity-0 md:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 255, 255, 0.06),
              transparent 80%
            )
          `,
        }}
      />

      {/* 4. LUEURS AMBIANTES (Blobs "Vivants") */}
      
      {/* Lueur Cyan (Primary) - Pulsation lente */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-primary rounded-full blur-[150px] opacity-10 dark:opacity-20 mix-blend-screen"
      />

      {/* Lueur Bleue (Secondaire) - Mouvement opposé */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-600 rounded-full blur-[150px] opacity-10 dark:opacity-20 mix-blend-screen"
      />

      {/* 5. TEXTURE "SCANLINES" (Effet Écran High-Tech) */}
      <div className="absolute inset-0 bg-[url('/assets/grid.png')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>

    </div>
  );
}
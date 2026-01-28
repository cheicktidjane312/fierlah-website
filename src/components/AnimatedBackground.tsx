"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      
      {/* 1. LE "FILET" (La Grille) */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px", // Taille des carreaux du filet
          maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)" // Fondu sur les bords
        }}
      />

      {/* 2. LES LUEURS MOBILES (Comme sur ton image, mais en sombre) */}
      
      {/* Lueurs Bleue (Haut Gauche) */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20"
      />

      {/* Lueur Cyan/Primary (Bas Droite) */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-primary rounded-full blur-[120px] opacity-20"
      />

      {/* Lueur Centrale (Subtile) */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900 rounded-full blur-[150px] opacity-10"
      />

    </div>
  );
}
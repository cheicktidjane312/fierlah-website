"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Fond Matrix (Simplifié) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none font-mono text-primary text-xs overflow-hidden leading-none">
         {Array.from({ length: 100 }).map((_, i) => (
             <div key={i} className="whitespace-nowrap" style={{ transform: `translateX(${Math.random() * 100}px)` }}>
                 {Array.from({ length: 50 }).map(() => Math.random() > 0.5 ? '1' : '0').join(' ')}
             </div>
         ))}
      </div>

      <div className="relative z-10 text-center space-y-8">
        
        {/* Le Code d'Erreur */}
        <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-[10rem] md:text-[15rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-primary to-transparent opacity-80 select-none"
        >
            404
        </motion.h1>

        <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
                Erreur Système <span className="text-primary animate-pulse">_</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
                La page que vous cherchez a peut-être été absorbée par le cyberespace ou n'a jamais existé.
            </p>
        </div>

        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link 
                href="/"
                className="inline-block px-10 py-4 bg-primary text-black font-black rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:shadow-[0_0_40px_rgba(0,255,255,0.8)] transition-all"
            >
                Retour à la base
            </Link>
        </motion.div>

      </div>
    </main>
  );
}
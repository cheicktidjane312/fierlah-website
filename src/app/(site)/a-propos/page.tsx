"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function AboutPage() {
  return (
    // MODIF: Fond clair le jour / sombre la nuit
    <main className="min-h-screen bg-white dark:bg-background text-gray-900 dark:text-white pt-32 pb-20 px-4 md:px-20 transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Derrière chaque pixel, il y a une <br />
          <span className="text-primary drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">Vision</span>.
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Fierlah Agency, c'est l'alliance de la technique et de la stratégie pour faire décoller votre business.
        </p>
      </div>

      {/* 2. SECTION FONDATEUR */}
      {/* MODIF: Carte blanche + ombre le jour / Carte noire la nuit */}
      <div className="max-w-6xl mx-auto bg-white dark:bg-surface border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 mb-32 relative overflow-hidden shadow-xl dark:shadow-none transition-all">
        
        {/* Petit effet de fond */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            
            {/* PHOTO DU FONDATEUR */}
            <div className="shrink-0 relative">
                <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden border-2 border-gray-100 dark:border-gray-700 shadow-2xl dark:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <Image 
                        src="/assets/images/portrait-fondateur-traore.jpg" 
                        alt="Le Fondateur de Fierlah Agency"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
                {/* Badge "Fondateur" */}
                <div className="absolute -bottom-4 -right-4 bg-primary text-black font-bold px-6 py-2 rounded-full shadow-lg">
                    Fondateur
                </div>
            </div>

            {/* TEXTE / BIO */}
            <div className="flex-1 space-y-6 text-center md:text-left">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">OUESSOGO CHEICK TRAORE</h2>
                    <p className="text-primary font-medium">Créateur Digital & Stratège</p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    "J'ai créé Fierlah Agency avec une conviction simple : les entrepreneurs africains méritent le meilleur du digital.
                    <br /><br />
                    Trop de sites web sont de simples 'cartes de visite' qui ne rapportent rien. Mon but est de changer ça. Je ne vous vends pas juste du code, je vous construis une machine à trouver des clients."
                </p>

                {/* Signature ou info sup */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row gap-8 justify-center md:justify-start">
                    <div>
                        <span className="block text-2xl font-bold text-gray-900 dark:text-white">2+</span>
                        <span className="text-sm text-gray-500">Années d'expérience</span>
                    </div>
                    <div>
                        <span className="block text-2xl font-bold text-gray-900 dark:text-white">100%</span>
                        <span className="text-sm text-gray-500">Dévoué au projet</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* 3. NOS VALEURS */}
      <div className="max-w-6xl mx-auto mb-32">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">Nos Valeurs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Transparence",
              text: "Je dis ce que je fais, et je fais ce que je dis. Pas de jargon technique pour noyer le poisson.",
              icon: "💎"
            },
            {
              title: "Performance",
              text: "Un site beau, c'est bien. Un site rapide qui convertit, c'est mieux. Je vise le ROI.",
              icon: "⚡"
            },
            {
              title: "Proximité",
              text: "Vous n'êtes pas un numéro de dossier. Je suis joignable et réactif pour mes clients.",
              icon: "🤝"
            }
          ].map((val, i) => (
            // MODIF: Transformation en motion.div pour l'animation
            <motion.div 
              key={i}
              // 👇 ANIMATION D'OSCILLATION AJOUTÉE
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.4 
              }}
              // Carte valeur adaptée Jour/Nuit
              className="bg-white dark:bg-surface p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all shadow-md dark:shadow-none"
            >
              <div className="text-4xl mb-4">{val.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{val.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{val.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. CTA FINAL */}
      {/* MODIF: Fond gris clair le jour, sombre la nuit */}
      <div className="text-center bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-12 md:p-20 max-w-4xl mx-auto transition-colors">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Envie de discuter de votre vision ?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
          Nous serions ravis d'échanger avec vous sur vos objectifs, sans engagement.
        </p>
        <Link 
          href="/contact" 
          // MODIF: Bouton Noir le jour / Blanc la nuit pour contraster
          className="inline-block px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          Contactez-nous
        </Link>
      </div>

    </main>
  );
}
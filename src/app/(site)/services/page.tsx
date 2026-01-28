"use client"; // 👈 Indispensable pour Framer Motion et corriger l'erreur Runtime

import Link from "next/link";
import { motion } from "framer-motion";

// --- 1. DÉFINITION DES ICÔNES ---

const IconWeb = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);

const IconRocket = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
  </svg>
);

const IconSearch = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const IconPalette = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
  </svg>
);

// --- 2. CONFIGURATION ---

const servicesList = [
  {
    title: "Création de Site Web",
    description: "Vitrine, E-commerce ou sur-mesure. Nous développons des sites rapides, sécurisés et optimisés pour le référencement (SEO).",
    features: ["Design Responsive (Mobile & PC)", "Optimisation Google (SEO)", "Vitesse de chargement ultra-rapide", "Interface d'administration facile"],
    icon: <IconWeb className="w-8 h-8 text-blue-500" />
  },
  {
    title: "Publicité en Ligne (Ads)",
    description: "Boostez votre visibilité immédiatement sur Facebook, Instagram et Google. Nous gérons vos campagnes pour maximiser le retour sur investissement.",
    features: ["Ciblage précis de l'audience", "Création des visuels publicitaires", "Suivi des conversions (Pixel)", "Rapports de performance mensuels"],
    icon: <IconRocket className="w-8 h-8 text-orange-500" />
  },
  {
    title: "SEO & Référencement Naturel",
    description: "Apparaissez en premier sur Google. Une stratégie long terme pour attirer du trafic qualifié sans payer de publicité à chaque clic.",
    features: ["Audit technique complet", "Stratégie de mots-clés", "Optimisation du contenu", "Netlinking & popularité"],
    icon: <IconSearch className="w-8 h-8 text-green-500" />
  },
  {
    title: "Identité Visuelle & Branding",
    description: "Ne passez pas inaperçu. Du logo à la charte graphique complète, nous créons une image de marque qui inspire confiance.",
    features: ["Création de Logo unique", "Charte graphique complète", "Design de cartes de visite", "Visuels pour réseaux sociaux"],
    icon: <IconPalette className="w-8 h-8 text-purple-500" />
  }
];

// --- 3. COMPOSANT PRINCIPAL ---

export default function ServicesPage() {
  return (
    // MODIF: Fond noir par défaut (dark:bg-background), Blanc en mode jour (bg-white)
    <main className="min-h-screen bg-white dark:bg-background text-gray-900 dark:text-white pt-32 pb-20 px-4 md:px-20 transition-colors duration-300">
      
      {/* EN-TÊTE DE PAGE */}
      <div className="text-center mb-20 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Nos <span className="text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">Expertises</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Nous combinons technique et créativité pour propulser votre business.
          Découvrez comment nous pouvons vous aider.
        </p>
      </div>

      {/* LISTE DES SERVICES */}
      <div className="grid gap-12 max-w-6xl mx-auto">
        {servicesList.map((service, index) => (
          <motion.div 
            key={index} 
            // 👇 ANIMATION D'OSCILLATION AJOUTÉE
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: index * 0.4 
            }}
            // MODIF: Carte blanche (jour) / Carte sombre (nuit)
            className="group relative bg-white dark:bg-surface border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 hover:border-primary/50 transition-all duration-300 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(0,255,255,0.05)]"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              
              {/* Icône */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-4xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Contenu Texte */}
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                {/* Liste des fonctionnalités */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bouton d'action */}
              <div className="self-start md:self-center shrink-0">
                <Link 
                  href="/contact" 
                  className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-primary hover:text-black hover:border-primary transition-all font-medium text-gray-900 dark:text-white"
                >
                  Demander un devis
                </Link>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* BANNIÈRE BAS DE PAGE */}
      {/* MODIF: Fond sombre par défaut (dark:bg-surface), clair en mode jour */}
      <div className="mt-24 text-center bg-gray-50 dark:bg-surface border border-gray-200 dark:border-gray-800 rounded-3xl p-12 transition-colors relative overflow-hidden">
        <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-primary/5 dark:to-blue-600/5 pointer-events-none"></div>
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Un projet spécifique en tête ?</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Nous faisons aussi du développement sur-mesure et du conseil stratégique.
        </p>
        <Link 
          href="/contact" 
          className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,255,0.4)] relative z-10"
        >
          Discutons-en
        </Link>
      </div>

    </main>
  );
}
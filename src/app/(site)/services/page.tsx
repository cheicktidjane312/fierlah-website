"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";

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

// Composant Carte 3D (Réutilisé pour la cohérence)
function Card3D({ children, className }: { children: React.ReactNode, className?: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [5, -5]); // Rotation subtile
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        x.set(mouseX - width / 2);
        y.set(mouseY - height / 2);
    }
    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative group perspective-1000 ${className}`}
        >
            <div style={{ transform: "translateZ(20px)" }}>{children}</div>
            
             {/* Lueur de fond qui suit la souris */}
             <motion.div
                 className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                 style={{ transform: "translateZ(-20px)" }}
            />
        </motion.div>
    );
}

// --- 3. COMPOSANT PRINCIPAL ---

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-background text-gray-900 dark:text-white pt-32 pb-20 px-4 md:px-20 transition-colors duration-300 overflow-hidden">
      
      {/* EN-TÊTE DE PAGE */}
      <div className="text-center mb-20 space-y-6">
        <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
        >
          Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">Expertises</span>
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Nous combinons technique et créativité pour propulser votre business.
          Découvrez comment nous pouvons vous aider.
        </motion.p>
      </div>

      {/* LISTE DES SERVICES */}
      <div className="grid gap-12 max-w-6xl mx-auto">
        {servicesList.map((service, index) => (
          <Card3D key={index}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Arrivée gauche/droite
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                // Fond Glassmorphism : blanc/80 (jour) ou noir/40 (nuit)
                className="group relative bg-white/80 dark:bg-surface/60 backdrop-blur-md border border-gray-200 dark:border-white/5 rounded-3xl p-8 md:p-12 hover:border-primary/50 transition-all duration-300 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  
                  {/* Icône avec cercle lumineux */}
                  <div className="w-20 h-20 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-4xl shrink-0 group-hover:scale-110 transition-transform duration-300 border border-gray-200 dark:border-white/10 group-hover:border-primary/50 shadow-inner">
                    {service.icon}
                  </div>

                  {/* Contenu Texte */}
                  <div className="flex-1 space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors flex items-center gap-2">
                      {service.title}
                      {/* Flèche qui apparaît au survol */}
                      <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary text-xl">→</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Liste des fonctionnalités */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shadow-[0_0_5px_var(--primary)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bouton d'action */}
                  <div className="self-start md:self-center shrink-0">
                    <Link 
                      href="/contact" 
                      className="inline-block px-6 py-3 border border-gray-300 dark:border-white/20 rounded-full hover:bg-primary hover:text-black hover:border-primary transition-all font-bold text-gray-900 dark:text-white uppercase text-xs tracking-wider"
                    >
                      Devis
                    </Link>
                  </div>

                </div>
              </motion.div>
          </Card3D>
        ))}
      </div>

      {/* BANNIÈRE BAS DE PAGE */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-24 text-center bg-gray-50 dark:bg-surface/40 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-3xl p-12 transition-colors relative overflow-hidden group"
      >
        {/* Effet Laser animé sur les bords */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Un projet spécifique en tête ?</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Nous faisons aussi du développement sur-mesure et du conseil stratégique.
        </p>
        <Link 
          href="/contact" 
          className="relative inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-black rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,255,0.4)] z-10 overflow-hidden"
        >
          <span className="relative z-10">Discutons-en</span>
          <div className="absolute inset-0 bg-white/40 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
        </Link>
      </motion.div>

    </main>
  );
}
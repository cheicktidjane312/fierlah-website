"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Counter from "../../components/ui/Counter"; // Assure-toi que ce chemin est bon chez toi, sinon ajuste-le.

// --- 1. DÉFINITION DES ICÔNES DIRECTEMENT ICI (Plus d'erreur d'import !) ---

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

const IconPalette = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
  </svg>
);

// --- 2. CONFIGURATION ---

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut" }
  }
};

const services = [
  { 
    title: "Développement Web", 
    desc: "Sites performants et sur-mesure.", 
    // Utilisation directe du composant SVG défini au-dessus
    icon: <IconWeb className="w-12 h-12 text-blue-500" /> 
  },
  { 
    title: "Marketing Digital", 
    desc: "Campagnes ROIstes sur Google & FB.", 
    icon: <IconRocket className="w-12 h-12 text-orange-500" /> 
  },
  { 
    title: "Branding", 
    desc: "Identité visuelle marquante.", 
    icon: <IconPalette className="w-12 h-12 text-purple-500" /> 
  },
];

const stats = [
  { label: "Projets", value: 10, suffix: "+" },   
  { label: "Clients", value: 98, suffix: "%" },
  { label: "Années", value: 2, suffix: "+" },     
];

// --- 3. COMPOSANT PRINCIPAL ---

export default function HomePage() {
  return (
    <main className="bg-background text-white overflow-hidden">
      
      {/* SECTION HERO */}
      <section className="min-h-screen flex items-center justify-center px-4 relative pt-48 pb-20">
        
        {/* Décors flottants d'arrière-plan */}
        <motion.div 
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-24 h-24 rounded-full border border-primary/20 blur-sm hidden md:block opacity-50"
        />
        <motion.div 
          animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl opacity-60"
        />

        <div className="max-w-5xl text-center space-y-8 relative z-10">
          
          <motion.div
            initial="hidden" animate="visible" variants={fadeInUp}
            className="inline-block px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-bold tracking-widest uppercase backdrop-blur-md"
          >
            ● Agence Digitale 360°
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }} 
            className="text-5xl md:text-8xl font-black leading-tight"
          >
            Agence de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 drop-shadow-[0_0_25px_rgba(0,255,255,0.4)]">
              Création Web
            </span>{" "}
            <span className="text-white">et Marketing Digital</span>
          </motion.h1>

          <motion.p 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Nous créons des expériences numériques d'exception qui propulsent votre entreprise vers de nouveaux sommets.Votre transformation digitale commence ici.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8"
          >
            {/* BOUTON 1 */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-4 bg-primary text-black font-black rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all">
                   <span className="relative z-10 uppercase tracking-wider">Démarrer un projet</span>
                   <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </Link>
            </motion.div>
            
            {/* BOUTON 2 */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/realisations" className="inline-block px-10 py-4 border border-gray-600 text-white font-bold rounded-full hover:bg-white/10 hover:border-white transition-all uppercase tracking-wider shadow-[0_0_0px_rgba(255,255,255,0)] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  Voir nos travaux
                </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION CHIFFRES CLÉS */}
      <section className="py-24 bg-surface/30 border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-6xl font-black text-primary flex items-center justify-center drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                  <Counter value={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION SERVICES */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-20 text-center space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-black">Nos expertises <span className="text-primary">clés</span></h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -15, boxShadow: "0px 10px 30px -10px rgba(0, 255, 255, 0.2)" }}
                className="p-10 rounded-[2.5rem] bg-surface border border-white/5 hover:border-primary/40 transition-all duration-500 group shadow-2xl relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                
                {/* L'icône s'affiche ici */}
                <div className="mb-6">{service.icon}</div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
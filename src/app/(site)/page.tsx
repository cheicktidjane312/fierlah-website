"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Counter from "../../components/ui/Counter"; 

// Définition de l'animation
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut" }
  }
};

const services = [
  { title: "Développement Web", desc: "Sites performants et sur-mesure.", icon: "💻" },
  { title: "Marketing Digital", desc: "Campagnes ROIstes sur Google & FB.", icon: "🚀" },
  { title: "Branding", desc: "Identité visuelle marquante.", icon: "🎨" },
];

// 👇 STATISTIQUES MISES À JOUR (Sans café, chiffres ajustés)
const stats = [
  { label: "Projets", value: 10, suffix: "+" },   // Changé à 10+
  { label: "Clients", value: 98, suffix: "%" },
  { label: "Années", value: 2, suffix: "+" },     // Changé à 2+
  // Café supprimé
];

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

      {/* SECTION CHIFFRES CLÉS (Mise à jour) */}
      <section className="py-24 bg-surface/30 border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          {/* Changement ici : grid-cols-3 au lieu de 4 car on a enlevé le café */}
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
                <div className="text-5xl mb-6">{service.icon}</div>
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
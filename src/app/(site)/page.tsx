"use client";

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import Counter from "../../components/ui/Counter";

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
const IconPalette = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
  </svg>
);

// --- 2. CONFIGURATION ---
const services = [
  { title: "Développement Web", desc: "Sites performants et sur-mesure.", icon: <IconWeb className="w-12 h-12 text-blue-500" /> },
  { title: "Marketing Digital", desc: "Campagnes ROIstes sur Google & FB.", icon: <IconRocket className="w-12 h-12 text-orange-500" /> },
  { title: "Branding", desc: "Identité visuelle marquante.", icon: <IconPalette className="w-12 h-12 text-purple-500" /> },
];
const stats = [
  { label: "Projets", value: 10, suffix: "+" },   
  { label: "Clients", value: 98, suffix: "%" },
  { label: "Années", value: 2, suffix: "+" },     
];

// Composant Carte 3D (Effet Tilt)
function Card3D({ children, className }: { children: React.ReactNode, className?: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

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
            className={`relative group ${className}`}
        >
            <div style={{ transform: "translateZ(30px)" }}>{children}</div>
            
            {/* Lueur de fond qui suit la souris (Optionnel) */}
            <motion.div
                 className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                 style={{ transform: "translateZ(-20px)" }}
            />
        </motion.div>
    );
}


export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Parallaxe légère

  return (
    <main className="overflow-hidden">
      
      {/* SECTION HERO */}
      <section className="min-h-screen flex items-center justify-center px-4 relative pt-32 pb-20">
        
        {/* Cercles de fond animés (Décor) */}
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] border border-white/5 rounded-full opacity-20 pointer-events-none border-dashed"
        />
        <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] border border-white/5 rounded-full opacity-20 pointer-events-none border-dashed"
        />

        <motion.div 
            style={{ y }} 
            className="max-w-5xl text-center space-y-8 relative z-10"
        >
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-neon"
          >
            ● Agence Digitale 360°
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-black leading-tight text-gray-900 dark:text-white"
          >
            Agence de <br />
            {/* Texte avec reflet brillant (Shimmer) */}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_auto] animate-shimmer drop-shadow-[0_0_25px_rgba(0,255,255,0.4)]">
              Création Web
            </span>{" "}
            <span className="text-gray-900 dark:text-white">et Marketing Digital</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Nous créons des expériences numériques d'exception qui propulsent votre entreprise vers de nouveaux sommets. Votre transformation digitale commence ici.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8"
          >
            {/* Bouton Principal "Neon" */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="group relative inline-flex items-center justify-center px-10 py-4 bg-primary text-black font-black rounded-full overflow-hidden shadow-neon transition-all hover:shadow-neon-strong">
                   <span className="relative z-10 uppercase tracking-wider">Démarrer un projet</span>
                   {/* Reflet blanc qui passe */}
                   <div className="absolute inset-0 bg-white/40 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                </Link>
            </motion.div>
            
            {/* Bouton Secondaire "Glass" */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/realisations" 
                  className="inline-block px-10 py-4 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold rounded-full hover:bg-white/10 transition-all uppercase tracking-wider backdrop-blur-sm"
                >
                  Voir nos travaux
                </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION CHIFFRES CLÉS (Glassmorphism) */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gray-50/50 dark:bg-white/5 backdrop-blur-md skew-y-3 scale-110 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="space-y-2 p-6 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-500"
              >
                <div className="text-4xl md:text-6xl font-black text-primary flex items-center justify-center drop-shadow-neon">
                  <Counter value={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION SERVICES (Cartes 3D) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-20 text-center space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">Nos expertises <span className="text-primary">clés</span></h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full shadow-neon"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Card3D key={i} className="h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ 
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 },
                        opacity: { duration: 0.5, delay: i * 0.2 }
                    }}
                    className="h-full p-10 rounded-[2.5rem] bg-white dark:bg-surface border border-gray-200 dark:border-white/10 hover:border-primary/50 transition-colors duration-500 shadow-xl dark:shadow-none"
                  >
                    <div className="mb-6 bg-gray-100 dark:bg-white/5 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl">
                        {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.desc}</p>
                  </motion.div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
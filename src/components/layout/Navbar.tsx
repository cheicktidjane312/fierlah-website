"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import ThemeToggle from "../ThemeToggle";

// Icône Cadenas (Admin)
const IconLock = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  
  // Animation de hauteur au scroll (Réduit la taille pour un look plus tech)
  const height = useTransform(scrollY, [0, 100], ["7rem", "5rem"]); // De 112px à 80px
  const bgOpacity = useTransform(scrollY, [0, 100], ["rgba(0,0,0,0)", "rgba(5, 5, 5, 0.8)"]); // Devient sombre au scroll
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(16px)"]);

  // État pour savoir si on a scrollé (pour changer le style CSS si besoin)
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    return scrollY.onChange((latest) => setIsScrolled(latest > 50));
  }, [scrollY]);

  const links = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/realisations" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <motion.nav 
      style={{ height, backgroundColor: isScrolled ? undefined : "transparent" }}
      className={`fixed top-0 w-full z-50 flex items-center transition-all duration-300 border-b ${isScrolled ? "border-gray-200/50 dark:border-white/5 shadow-lg backdrop-blur-xl bg-white/80 dark:bg-black/80" : "border-transparent bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full flex items-center justify-between">
        
        {/* LOGO ANIMÉ (Battement léger) */}
        <motion.div 
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="shrink-0"
        >
          <Link href="/" className="relative block w-32 h-12 md:w-64 md:h-16 transition-all">
            <Image 
              src="/assets/images/logo-fierlah-neon.png" 
              alt="Fierlah Agency Logo" 
              fill 
              className="object-contain object-left" 
              priority 
            />
          </Link>
        </motion.div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center space-x-1">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-all group overflow-hidden rounded-full ${
                pathname === link.href ? "text-primary bg-primary/10" : "text-gray-900 dark:text-gray-300 hover:text-white"
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {/* Effet Hover Liquide */}
              <span className="absolute inset-0 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full"></span>
            </Link>
          ))}

          <div className="h-6 w-px bg-gray-300 dark:bg-gray-800 mx-4"></div>

          <Link 
            href="/studio" 
            target="_blank" 
            className="text-gray-500 hover:text-primary transition-colors p-2 rounded-full hover:bg-white/5"
            title="Connexion Admin"
          >
            <IconLock className="w-5 h-5" />
          </Link>

          <div className="ml-2 mr-4">
             <ThemeToggle />
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
             {/* Lueur arrière bouton */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-200"></div>
            
            <Link 
              href="/contact" 
              className="relative px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-black rounded-full text-sm uppercase tracking-wider flex items-center overflow-hidden"
            >
              {/* Effet Brillance (Shimmer) */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 animate-shimmer" />
              <span className="relative z-10">Demander un devis</span>
            </Link>
          </motion.div>
        </div>

        {/* MOBILE HAMBURGER & TOGGLE */}
        <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-gray-900 dark:text-white text-2xl p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
                {isOpen ? "✕" : "☰"}
            </button>
        </div>
      </div>
      
      {/* MENU MOBILE (Slide Down Futuriste) */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 md:hidden overflow-hidden shadow-2xl"
            >
                <div className="p-6 flex flex-col space-y-4">
                    {links.map((link) => (
                        <Link 
                        key={link.href} 
                        href={link.href} 
                        onClick={() => setIsOpen(false)} 
                        className={`text-lg font-medium transition-colors px-4 py-2 rounded-lg ${
                            pathname === link.href ? "text-primary bg-primary/10" : "text-gray-900 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5"
                        }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    
                    <Link 
                        href="/studio" 
                        target="_blank"
                        onClick={() => setIsOpen(false)} 
                        className="text-lg font-medium text-gray-500 flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-gray-800 px-4"
                    >
                        <IconLock className="w-5 h-5" />
                        <span>Espace Admin</span>
                    </Link>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

// 1. DÉFINITION DE L'ICÔNE CADENAS (Pour l'admin)
const IconLock = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/realisations" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/5 h-28 flex items-center shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        
        {/* LOGO XXL + Animation Flottante */}
        <motion.div 
          animate={{ y: [0, -5, 0] }} // Flotte doucement de haut en bas
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* w-80 = Logo très grand */}
          <Link href="/" className="relative block w-80 h-24">
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
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-all hover:text-primary hover:scale-105 ${
                pathname === link.href ? "text-primary" : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* SÉPARATEUR VERTICAL DISCRET */}
          <div className="h-6 w-px bg-gray-800 mx-2"></div>

          {/* BOUTON ADMIN (Cadenas) */}
          <Link 
            href="/studio" 
            target="_blank" // Ouvre dans un nouvel onglet pour ne pas perdre le site
            className="text-gray-500 hover:text-primary transition-colors p-2"
            title="Connexion Admin"
          >
            <IconLock className="w-5 h-5" />
          </Link>

          {/* BOUTON "VIVANT" */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ boxShadow: ["0px 0px 0px rgba(0,255,255,0)", "0px 0px 20px rgba(0,255,255,0.3)", "0px 0px 0px rgba(0,255,255,0)"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-gradient-to-r from-primary to-blue-600 text-black font-black rounded-full text-sm uppercase tracking-wider"
            >
              Demander un devis
            </Link>
          </motion.div>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
                {isOpen ? "✕" : "☰"}
            </button>
        </div>
      </div>
      
      {/* MENU MOBILE (Si besoin) */}
      {isOpen && (
        <div className="absolute top-28 left-0 w-full bg-black border-b border-white/10 md:hidden p-6 flex flex-col space-y-4">
             {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-200">
                    {link.name}
                </Link>
             ))}
             
             {/* LIEN ADMIN MOBILE */}
             <Link 
                href="/studio" 
                target="_blank"
                onClick={() => setIsOpen(false)} 
                className="text-lg font-medium text-gray-500 flex items-center gap-2 pt-4 border-t border-gray-800"
             >
                <IconLock className="w-5 h-5" />
                <span>Espace Admin</span>
             </Link>
        </div>
      )}
    </nav>
  );
}
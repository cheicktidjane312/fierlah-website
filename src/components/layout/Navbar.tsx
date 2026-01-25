"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

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
        <div className="hidden md:flex items-center space-x-10">
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
        </div>
      )}
    </nav>
  );
}
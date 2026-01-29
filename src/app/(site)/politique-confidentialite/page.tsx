"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Icône de Sécurité
const IconLock = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString("fr-FR", { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <main className="min-h-screen bg-white dark:bg-background text-gray-900 dark:text-white pt-32 pb-20 px-4 md:px-8 transition-colors duration-300 relative overflow-hidden">
      
      {/* Décor d'arrière-plan (Très subtil) */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* HEADER : ICONE + TITRE */}
        <div className="text-center mb-16 space-y-6">
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 shadow-[0_0_30px_rgba(0,255,255,0.2)]"
            >
                <IconLock className="w-10 h-10 text-primary" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h1 className="text-4xl md:text-5xl font-black mb-4">
                    Politique de <span className="text-primary">Confidentialité</span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-mono uppercase tracking-widest">
                    Dernière mise à jour : {currentDate}
                </p>
            </motion.div>
        </div>

        {/* CONTENU : DOCUMENT STYLE "GLASS" */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 dark:bg-surface/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-none"
        >
            <div className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                prose-li:text-gray-600 dark:prose-li:text-gray-300
                prose-strong:text-primary
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            ">
                
                <h2>1. Introduction</h2>
                <p>
                    Bienvenue sur le site de <strong>FIERLAH Agency</strong>. La protection de vos données personnelles est une priorité absolue pour nous. 
                    Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous naviguez sur notre site web.
                </p>

                <h2>2. Données collectées</h2>
                <p>
                    Nous collectons uniquement les données strictement nécessaires au bon fonctionnement de nos services et à la relation commerciale :
                </p>
                <ul>
                    <li><strong>Informations de contact :</strong> Nom, adresse email, numéro de téléphone (via le formulaire de contact).</li>
                    <li><strong>Données techniques :</strong> Adresse IP, type de navigateur, données de navigation (via les cookies analytiques anonymisés).</li>
                </ul>

                <h2>3. Utilisation des données</h2>
                <p>Vos données sont utilisées exclusivement pour :</p>
                <ul>
                    <li>Répondre à vos demandes de devis ou d'information.</li>
                    <li>Améliorer l'expérience utilisateur sur notre site.</li>
                    <li>Vous envoyer des informations sur nos services (uniquement si vous y avez consenti).</li>
                </ul>
                <p>
                    <strong>Nous ne vendons, ne louons et ne partageons jamais vos données personnelles à des tiers.</strong>
                </p>

                <h2>4. Sécurité</h2>
                <p>
                    Nous mettons en œuvre des mesures de sécurité techniques (chiffrement SSL/HTTPS, pare-feu) et organisationnelles pour protéger vos données contre tout accès non autorisé, altération ou destruction.
                </p>

                <h2>5. Cookies</h2>
                <p>
                    Ce site utilise des cookies pour analyser le trafic et améliorer nos services. Vous pouvez configurer votre navigateur pour refuser les cookies à tout moment.
                </p>

                <h2>6. Vos droits</h2>
                <p>
                    Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. 
                    Pour exercer ce droit, contactez-nous à : <a href="mailto:contact@fierlah.com">contact@fierlah.com</a>.
                </p>

            </div>

            {/* Signature Bas de page */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 flex justify-between items-center flex-col md:flex-row gap-4">
                <span className="text-sm text-gray-500 font-mono">ID: SECURE-DOC-2024</span>
                <Link 
                    href="/" 
                    className="px-6 py-2 bg-gray-100 dark:bg-white/5 hover:bg-primary hover:text-black rounded-full text-sm font-bold transition-all duration-300"
                >
                    Retour à l'accueil
                </Link>
            </div>

        </motion.div>

      </div>
    </main>
  );
}
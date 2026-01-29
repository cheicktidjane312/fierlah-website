import { client } from "../../../lib/sanity";
// 👇 IMPORTATION SPÉCIALE pour utiliser Framer Motion dans un Composant Serveur
import * as motion from "framer-motion/client"; 

// --- 1. DÉFINITION DES ICÔNES ---
const IconMail = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);
const IconPhone = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
  </svg>
);
const IconMapPin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

// --- 2. LOGIQUE ---
interface Settings {
  email: string;
  phone: string;
  address: string;
}

async function getSettings() {
  const query = `*[_type == "settings"][0]`;
  return await client.fetch(query);
}

// Pas de "use client" ici, c'est un Composant Serveur (Server Component)
export default async function ContactPage() {
  const settings: Settings = await getSettings();

  return (
    <main className="min-h-screen bg-white dark:bg-background text-gray-900 dark:text-white pt-32 pb-20 px-4 md:px-20 transition-colors duration-300 overflow-hidden relative">
      
      {/* Décors de fond (Cercles flous) */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* En-tête */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-4 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Parlons de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">Projet</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Une idée ? Un besoin spécifique ? Remplissez le formulaire et nous vous répondrons sous 24h.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
        
        {/* COLONNE GAUCHE : Infos (Cartes flottantes) */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
        >
          <div className="bg-gray-50/80 dark:bg-surface/60 backdrop-blur-md p-8 rounded-3xl border border-gray-200 dark:border-white/5 shadow-lg dark:shadow-none hover:border-primary/30 transition-all duration-300">
             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Nos Coordonnées</h2>
             
             <div className="space-y-6">
                {/* EMAIL */}
                <div className="flex items-center space-x-4 group p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors cursor-default">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner border border-primary/20">
                     <IconMail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Email</p>
                    <a href={`mailto:${settings?.email}`} className="text-lg font-medium hover:text-primary transition-colors text-gray-900 dark:text-white block">
                      {settings?.email || "contact@fierlah.com"}
                    </a>
                  </div>
                </div>

                {/* TÉLÉPHONE */}
                <div className="flex items-center space-x-4 group p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors cursor-default">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner border border-primary/20">
                     <IconPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Téléphone</p>
                    <a href={`tel:${settings?.phone}`} className="text-lg font-medium hover:text-primary transition-colors text-gray-900 dark:text-white block">
                      {settings?.phone || "+221 77 000 00 00"}
                    </a>
                  </div>
                </div>

                {/* ADRESSE */}
                <div className="flex items-center space-x-4 group p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors cursor-default">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner border border-primary/20">
                     <IconMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Adresse</p>
                    <p className="text-lg font-medium whitespace-pre-line text-gray-900 dark:text-white">
                      {settings?.address || "Dakar, Sénégal"}
                    </p>
                  </div>
                </div>
             </div>
             
             <div className="pt-8 mt-4 border-t border-gray-200 dark:border-white/10">
                <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2">
                   <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                   Disponibles du Lundi au Dimanche (9h - 22h)
                </p>
             </div>
          </div>
        </motion.div>

        {/* COLONNE DROITE : Formulaire High-Tech */}
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <form 
              action="https://formspree.io/f/xjgyqzqj" 
              method="POST"
              className="space-y-6 bg-white dark:bg-surface/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden group focus-within:border-primary/50 transition-colors duration-500"
            >
              {/* Lueur au focus du formulaire */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] opacity-0 group-focus-within:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="nom" className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider ml-1">Nom</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="nom" 
                    required
                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 shadow-inner"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required
                    className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 shadow-inner"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <label htmlFor="sujet" className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider ml-1">Sujet</label>
                <div className="relative">
                    <select 
                      name="subject"
                      id="sujet"
                      className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer shadow-inner"
                    >
                      <option value="Site Web">Création de Site Web</option>
                      <option value="Ads">Publicité / Marketing</option>
                      <option value="Branding">Design / Branding</option>
                      <option value="Autre">Autre</option>
                    </select>
                    {/* Flèche personnalisée */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider ml-1">Message</label>
                <textarea 
                  name="message"
                  id="message" 
                  rows={5}
                  required
                  className="w-full bg-gray-50 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-4 text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 shadow-inner resize-none"
                  placeholder="Racontez-nous votre projet..."
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full relative overflow-hidden bg-gradient-to-r from-primary to-blue-600 text-black font-black py-5 rounded-xl shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all z-10 group"
              >
                <span className="relative z-10 uppercase tracking-widest text-sm">Envoyer le message</span>
                {/* Reflet Shimmer */}
                <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12"></div>
              </motion.button>
            </form>
        </motion.div>

      </div>
    </main>
  );
}
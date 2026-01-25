import Link from "next/link";
import { motion, Variants } from "framer-motion";
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" }
  }
};
const servicesList = [
  {
    title: "Création de Site Web",
    description: "Vitrine, E-commerce ou sur-mesure. Nous développons des sites rapides, sécurisés et optimisés pour le référencement (SEO).",
    features: ["Design Responsive (Mobile & PC)", "Optimisation Google (SEO)", "Vitesse de chargement ultra-rapide", "Interface d'administration facile"],
    icon: "💻"
  },
  {
    title: "Publicité en Ligne (Ads)",
    description: "Boostez votre visibilité immédiatement sur Facebook, Instagram et Google. Nous gérons vos campagnes pour maximiser le retour sur investissement.",
    features: ["Ciblage précis de l'audience", "Création des visuels publicitaires", "Suivi des conversions (Pixel)", "Rapports de performance mensuels"],
    icon: "🚀"
  },
  {
    title: "SEO & Référencement Naturel",
    description: "Apparaissez en premier sur Google. Une stratégie long terme pour attirer du trafic qualifié sans payer de publicité à chaque clic.",
    features: ["Audit technique complet", "Stratégie de mots-clés", "Optimisation du contenu", "Netlinking & popularité"],
    icon: "🔍"
  },
  {
    title: "Identité Visuelle & Branding",
    description: "Ne passez pas inaperçu. Du logo à la charte graphique complète, nous créons une image de marque qui inspire confiance.",
    features: ["Création de Logo unique", "Charte graphique complète", "Design de cartes de visite", "Visuels pour réseaux sociaux"],
    icon: "🎨"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-white pt-32 pb-20 px-4 md:px-20">
      
      {/* EN-TÊTE DE PAGE */}
      <div className="text-center mb-20 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Nos <span className="text-primary drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">Expertises</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Nous combinons technique et créativité pour propulser votre business.
          Découvrez comment nous pouvons vous aider.
        </p>
      </div>

      {/* LISTE DES SERVICES */}
      <div className="grid gap-12 max-w-6xl mx-auto">
        {servicesList.map((service, index) => (
          <div 
            key={index} 
            className="group relative bg-surface border border-gray-800 rounded-3xl p-8 md:p-12 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.05)]"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              
              {/* Icône */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-4xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Contenu Texte */}
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {service.description}
                </p>
                
                {/* Liste des fonctionnalités (Bullet points) */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
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
                  className="inline-block px-6 py-3 border border-gray-700 rounded-full hover:bg-primary hover:text-black hover:border-primary transition-all font-medium"
                >
                  Demander un devis
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* BANNIÈRE BAS DE PAGE */}
      <div className="mt-24 text-center bg-gradient-to-r from-primary/10 to-blue-600/10 border border-primary/20 rounded-3xl p-12">
        <h3 className="text-3xl font-bold mb-4">Un projet spécifique en tête ?</h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Nous faisons aussi du développement sur-mesure et du conseil stratégique.
        </p>
        <Link 
          href="/contact" 
          className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,255,0.4)]"
        >
          Discutons-en
        </Link>
      </div>

    </main>
  );
}
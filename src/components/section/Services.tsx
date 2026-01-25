"use client";

import Link from "next/link";

const services = [
  {
    title: "Création de Sites Web",
    description: "Des sites ultra-rapides, optimisés pour Google (SEO) et conçus pour convertir vos visiteurs en clients.",
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Publicité en Ligne (Ads)",
    description: "Facebook, Instagram, Google Ads. Nous ciblons précisément vos futurs clients pour maximiser votre ROI.",
    icon: (
      <svg className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: "Identité Visuelle & Branding",
    description: "Logos, chartes graphiques, supports de com. Marquez les esprits avec une identité forte et unique.",
    icon: (
      <svg className="w-10 h-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Ombre colorée d'ambiance */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nos domaines d'<span className="text-primary">expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nous ne faisons pas tout. Nous faisons ce qui rapporte des résultats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-surface border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
            >
              <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <Link href="/services" className="text-white border-b border-primary pb-1 hover:text-primary transition-colors">
                Voir tous nos services →
            </Link>
        </div>

      </div>
    </section>
  );
}
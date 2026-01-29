import { client, urlFor } from "../../../../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import * as motion from "framer-motion/client"; // Import compatible serveur

// Fonction pour récupérer UN SEUL projet
async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0]`;
  return await client.fetch(query, { slug });
}

export const revalidate = 0;

export default async function ProjectDetails({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

  if (!project) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-4">Projet introuvable</h1>
            <Link href="/realisations" className="text-primary hover:underline">Retour au portfolio</Link>
        </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-background text-gray-900 dark:text-white pb-20 transition-colors duration-300">
      
      {/* 1. HERO SECTION IMMERSIVE */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        {/* Image de fond floutée et assombrie */}
        {project.mainImage && (
            <>
                <Image
                    src={urlFor(project.mainImage).url()}
                    alt={project.title}
                    fill
                    className="object-cover blur-md scale-110 opacity-50 dark:opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-background via-transparent to-black/60"></div>
            </>
        )}

        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="inline-block px-4 py-1 mb-6 rounded-full border border-primary/50 bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-neon">
                    {project.category}
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-2xl mb-4">
                    {project.title}
                </h1>
            </motion.div>
        </div>
      </div>

      {/* 2. CONTENU DU PROJET (Glass Panel) */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 -mt-20 relative z-20">
        
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 dark:bg-surface/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
            
            {/* Bouton Retour */}
            <Link href="/realisations" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-10 group">
                <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> 
                Retour aux réalisations
            </Link>

            {/* Image Principale (Nette cette fois) */}
            {project.mainImage && (
                <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-16 border border-gray-200 dark:border-white/10 shadow-lg group">
                    <Image
                        src={urlFor(project.mainImage).url()}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            )}

            {/* Description Riche */}
            <div className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-li:text-gray-600 dark:prose-li:text-gray-300
                prose-strong:text-gray-900 dark:prose-strong:text-white
            ">
                {project.description ? (
                    <PortableText value={project.description} />
                ) : (
                    <p className="text-gray-500 italic border-l-4 border-gray-300 pl-4">Aucune description détaillée disponible.</p>
                )}
            </div>

            {/* Footer de projet : Lien Externe */}
            {project.link && (
                <div className="mt-16 pt-10 border-t border-gray-200 dark:border-white/10 flex justify-center">
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-10 py-5 bg-primary text-black font-black rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all"
                    >
                        <span className="relative z-10 uppercase tracking-widest flex items-center gap-2">
                            Voir le site en ligne 
                            <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </span>
                        {/* Reflet Shimmer */}
                        <div className="absolute inset-0 bg-white/40 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12"></div>
                    </a>
                </div>
            )}

        </motion.div>
      </div>
    </main>
  );
}
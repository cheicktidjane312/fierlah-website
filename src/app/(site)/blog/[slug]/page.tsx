"use client";
import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "../../../../lib/sanity";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { motion } from "framer-motion";

// Animation du titre
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

// 1. Configuration des composants du texte adaptée au mode jour/nuit
const ptComponents: PortableTextComponents = {
  block: {
    // MODIF: text-gray-700 (jour) / text-gray-300 (nuit)
    normal: ({ children }: any) => <p className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{children}</p>,
    // MODIF: text-gray-900 (jour) / text-white (nuit)
    h1: ({ children }: any) => <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5 border-l-4 border-primary pl-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">{children}</h3>,
    blockquote: ({ children }: any) => (
      // MODIF: bg-gray-100 (jour) / bg-surface (nuit)
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-surface/50 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    // MODIF: text-gray-700 (jour) / text-gray-300 (nuit)
    bullet: ({ children }: any) => <ul className="list-disc ml-8 mb-8 space-y-2 text-gray-700 dark:text-gray-300">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal ml-8 mb-8 space-y-2 text-gray-700 dark:text-gray-300">{children}</ol>,
  },
  marks: {
    link: ({ children, value }: any) => {
      return (
        <a 
          href={value?.href || '#'} 
          className="text-primary hover:underline font-medium" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
  },
};

// 2. Fonction pour récupérer l'article
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  return await client.fetch(query, { slug });
}

export const revalidate = 60;

// 3. Le Composant de la Page
export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-40 text-center text-gray-900 dark:text-white px-4 bg-white dark:bg-background">
        <h1 className="text-4xl font-bold mb-4 text-red-500">Oups ! 😕</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Impossible de trouver cet article.</p>
        <Link href="/blog" className="inline-block mt-8 px-6 py-3 bg-primary text-black font-bold rounded-full hover:scale-105 transition-transform">
          Retour au blog
        </Link>
      </div>
    );
  }

  return (
    // MODIF: bg-white (jour) / bg-background (nuit)
    <main className="min-h-screen bg-white dark:bg-background text-gray-900 dark:text-white pt-32 pb-20 px-4 md:px-0 transition-colors duration-300">
      
      <article className="max-w-3xl mx-auto">
        
        {/* Fil d'ariane */}
        <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors mb-8">
          ← Retour aux articles
        </Link>

        {/* En-tête */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span>Publié le {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("fr-FR") : "Date inconnue"}</span>
            <span className="text-primary font-bold">• Fierlah Agency</span>
          </div>
        </header>

        {/* Image principale */}
        {post.mainImage && (
          <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-12 border border-gray-200 dark:border-gray-800">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title || "Image de l'article"}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* CONTENU DU TEXTE - MODIF: Utilisation de prose (jour) / prose-invert (nuit) */}
        <div className="prose dark:prose-invert prose-lg max-w-none">
          {post.body ? (
            <PortableText value={post.body} components={ptComponents} />
          ) : (
            <p className="text-gray-500 italic p-8 border border-dashed border-gray-200 dark:border-gray-800 rounded-lg">
              Contenu en cours de rédaction...
            </p>
          )}
        </div>

        {/* Footer de l'article */}
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Besoin d'aide sur ce sujet ?</h3>
            <Link 
                href="/contact" 
                className="inline-block px-8 py-3 bg-primary text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,255,255,0.3)]"
            >
                Contactez l'agence
            </Link>
        </div>

      </article>
    </main>
  );
}
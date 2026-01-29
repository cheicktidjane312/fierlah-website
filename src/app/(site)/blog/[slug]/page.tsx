import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "../../../../lib/sanity";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import * as motion from "framer-motion/client";

// Configuration des composants texte (Typographie High-Tech)
const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }: any) => <p className="mb-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">{children}</p>,
    h1: ({ children }: any) => <h1 className="text-3xl font-black text-gray-900 dark:text-white mt-12 mb-6 border-b border-primary/20 pb-2 inline-block">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5 flex items-center"><span className="w-2 h-8 bg-primary mr-4 rounded-sm"></span>{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 italic text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-white/5 rounded-r-xl">
        "{children}"
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc ml-6 mb-8 space-y-2 text-gray-700 dark:text-gray-300 marker:text-primary">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal ml-6 mb-8 space-y-2 text-gray-700 dark:text-gray-300 marker:text-primary marker:font-bold">{children}</ol>,
  },
  marks: {
    link: ({ children, value }: any) => {
      return (
        <a 
          href={value?.href || '#'} 
          className="text-primary hover:text-blue-400 underline decoration-primary/30 hover:decoration-primary transition-all font-medium" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
  },
};

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  return await client.fetch(query, { slug });
}

export const revalidate = 60;

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-background text-gray-900 dark:text-white">
        <h1 className="text-4xl font-bold mb-4">Article introuvable</h1>
        <Link href="/blog" className="px-6 py-3 bg-primary text-black rounded-full font-bold">Retour au blog</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-background text-gray-900 dark:text-white pt-32 pb-20 px-4 md:px-0 transition-colors duration-300">
      
      <article className="max-w-4xl mx-auto">
        
        {/* HEADER ARTICLE */}
        <header className="mb-12 text-center px-4">
            <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-8">
                ← Retour aux articles
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-900 dark:text-white drop-shadow-sm">
                {post.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="px-3 py-1 border border-gray-200 dark:border-white/10 rounded-full">
                    Publié le {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("fr-FR") : "Date inconnue"}
                </span>
                <span className="text-primary font-bold">● Fierlah Agency</span>
            </div>
        </header>

        {/* IMAGE PRINCIPALE (Avec effet Glow) */}
        {post.mainImage && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-16 border border-gray-200 dark:border-white/10 shadow-2xl mx-auto max-w-5xl"
          >
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title || "Image de l'article"}
              fill
              className="object-cover"
              priority
            />
            {/* Lueur sous l'image */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 opacity-50"></div>
          </motion.div>
        )}

        {/* CONTENU DU TEXTE */}
        <div className="px-6 md:px-12">
            <div className="prose dark:prose-invert prose-lg max-w-none mx-auto">
                {post.body ? (
                    <PortableText value={post.body} components={ptComponents} />
                ) : (
                    <p className="text-gray-500 italic p-8 border border-dashed border-gray-800 rounded-lg text-center">
                    Contenu en cours de rédaction...
                    </p>
                )}
            </div>
        </div>

        {/* FOOTER ARTICLE */}
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-white/10 text-center px-6">
            <div className="bg-gray-50 dark:bg-surface/50 border border-gray-200 dark:border-white/5 rounded-3xl p-10 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Besoin d'aide sur ce sujet ?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Notre équipe est experte sur ces problématiques. Parlons de votre cas spécifique.
                </p>
                <Link 
                    href="/contact" 
                    className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-blue-500 text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                >
                    Contactez l'agence
                </Link>
            </div>
        </div>

      </article>
    </main>
  );
}
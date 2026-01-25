import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "tuk8a6na", 
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, 
});

// Le constructeur d'URL pour transformer les données Sanity en vraies images
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  // Cette fonction est cruciale pour que l'image s'affiche
  return builder.image(source);
}
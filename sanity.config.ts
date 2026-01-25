import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk' // Si erreur ici, essaie 'structureTool'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schema' // Pointe vers le fichier qu'on va créer juste après

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schema.types,
  },
})
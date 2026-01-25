// sanity/schema.ts
import { type SchemaTypeDefinition } from 'sanity'
import project from './schemas/project'
import post from './schemas/post'
import settings from './schemas/settings' // <--- On importe le nouveau fichier

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, post, settings], // <--- On l'ajoute à la liste
}

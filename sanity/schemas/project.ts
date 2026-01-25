import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Réalisations',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre du Projet',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL de la page interne)',
      description: "Clique sur 'Generate' après avoir mis le titre. C'est ce qui créera l'adresse de la page (ex: /realisations/fierlah-agency)",
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image Principale',
      type: 'image',
      options: { hotspot: true },
    }),
    // 👇 NOUVEAU CHAMP : Pour écrire le contenu de l'étude de cas
    defineField({
      name: 'description',
      title: 'Description détaillée du projet',
      type: 'array', 
      of: [{type: 'block'}], // Cela active l'éditeur de texte riche
    }),
    defineField({
      name: 'link',
      title: 'Lien vers le site live (Optionnel)',
      description: "L'URL externe vers le site du client (pour le bouton 'Voir le site')",
      type: 'url',
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
            { title: 'Site Web', value: 'Web' },
            { title: 'Marketing', value: 'Marketing' },
            { title: 'Ads', value: 'Ads' }
        ]
      }
    }),
  ],
})
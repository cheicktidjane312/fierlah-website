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
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'mainImage',
      title: 'Image Principale',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'link',
      title: 'Lien du projet (URL)',
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
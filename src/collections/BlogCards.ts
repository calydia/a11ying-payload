import type { CollectionConfig } from 'payload'

export const BlogCards: CollectionConfig = {
  slug: 'blogCards',
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'url',
      type: 'text',
      label: 'Blog URL',
      localized: true,
    },
    {
      name: 'date',
      type: 'date',
      label: 'Blog date',
      localized: true,
    },
    {
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
      label: 'Blog image',
      localized: true,
    },
  ],
}

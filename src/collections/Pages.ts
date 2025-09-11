import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      localized: true,
    },
    {
      name: 'pageUrl',
      type: 'text',
      localized: true,
    },
    {
      name: 'lead',
      type: 'richText',
      localized: true,
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      localized: true,
      minLength: 60,
      maxLength: 160,
      required: true,
    },
    {
      name: 'searchLead',
      type: 'textarea',
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
    {
      name: 'searchContent',
      type: 'textarea',
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
  ],
}

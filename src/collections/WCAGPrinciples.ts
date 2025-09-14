import type { CollectionConfig } from 'payload'

export const WCAGPrinciples: CollectionConfig = {
  slug: 'principles',
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  labels: {
    singular: 'WCAG Principle',
    plural: 'WCAG Principles',
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
      name: 'principleNumber',
      type: 'text',
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
      name: 'searchContent',
      type: 'textarea',
      admin: {
        readOnly: true,
        hidden: true,
      },
    },
  ],
}

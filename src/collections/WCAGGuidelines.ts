import type { CollectionConfig } from 'payload'

export const WCAGGuidelines: CollectionConfig = {
  slug: 'guidelines',
  labels: {
    singular: 'WCAG Guideline',
    plural: 'WCAG Guidelines',
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
      name: 'Principle',
      type: 'relationship',
      relationTo: 'principles',
      hasMany: false,
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
  ],
}

import type { CollectionConfig } from 'payload'

export const WCAGPrinciples: CollectionConfig = {
  slug: 'principles',
  labels: {
    singular: 'WCAG Principle',
    plural: 'WCAG Principles',
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

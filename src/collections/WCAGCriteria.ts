import type { CollectionConfig } from 'payload'

export const WCAGCriteria: CollectionConfig = {
  slug: 'criteria',
  labels: {
    singular: 'WCAG Criterion',
    plural: 'WCAG Criteria',
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
      name: 'Guideline',
      type: 'relationship',
      relationTo: 'guidelines',
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

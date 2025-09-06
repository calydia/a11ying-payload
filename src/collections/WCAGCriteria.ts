import type { CollectionConfig } from 'payload'

export const WCAGCriteria: CollectionConfig = {
  slug: 'criteria',
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  labels: {
    singular: 'WCAG Criterion',
    plural: 'WCAG Criteria',
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
      name: 'criterionNumber',
      type: 'text',
    },
    {
      name: 'criterionLevel',
      type: 'text',
    },
    {
      name: 'wcagVersion',
      type: 'text',
    },
    {
      name: 'criterionSort',
      type: 'number',
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
      name: 'cardContent',
      type: 'textarea',
      localized: true,
    },
  ],
}

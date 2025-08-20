import type { CollectionConfig } from 'payload'

export const GlossaryItems: CollectionConfig = {
  slug: 'glossaryItems',
  fields: [
    {
      name: 'term',
      type: 'text',
      label: 'Term',
      localized: true,
    },
    {
      name: 'termDescription',
      type: 'textarea',
      label: 'Term Description',
      localized: true,
    },
    {
      name: 'wcagRelated',
      type: 'checkbox',
      label: 'Term is related to WCAG',
      defaultValue: false,
    },
  ],
}

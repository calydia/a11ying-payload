import { GlobalConfig } from 'payload'

export const WCAGFooter: GlobalConfig = {
  slug: 'WCAGFooterNav',
  label: 'WCAG Footer Navigation',
  fields: [
    {
      name: 'navigationLinks',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'menuLink',
          label: 'Menu Link',
          type: 'relationship',
          relationTo: 'pages',
          required: false,
        },
      ],
    },
  ],
}

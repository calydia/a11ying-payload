import { GlobalConfig } from 'payload'

export const footerNavigation: GlobalConfig = {
  slug: 'footerNav',
  label: 'Footer Navigation',
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

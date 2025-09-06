import { GlobalConfig } from 'payload'

export const ReqFooter: GlobalConfig = {
  slug: 'ReqFooterNav',
  label: 'Req Footer Navigation',
  access: {
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'navigationLinks',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'iconClass',
          label: 'CSS class for the icon',
          type: 'text',
        },
        {
          name: 'menuLink',
          label: 'Menu Link',
          type: 'relationship',
          relationTo: 'reqPages',
          required: false,
        },
      ],
    },
  ],
}

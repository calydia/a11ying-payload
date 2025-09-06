import { GlobalConfig } from 'payload'

export const notFound: GlobalConfig = {
  slug: 'notFound',
  label: '404 content',
  access: {
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
    },
  ],
}

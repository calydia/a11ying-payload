import { GlobalConfig } from 'payload'

export const menuTitles: GlobalConfig = {
  slug: 'menuTitles',
  label: 'Menu Titles',
  access: {
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'list',
      type: 'json',
      required: true,
      localized: true,
    },
  ],
}

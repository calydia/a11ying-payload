import { GlobalConfig } from 'payload'

export const ReqNavigation: GlobalConfig = {
  slug: 'ReqNav',
  label: 'Req Navigation',
  access: {
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'firstLevel',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'element',
          label: 'Type of element',
          type: 'select',
          options: [
            { label: 'Button', value: 'button' },
            { label: 'Link', value: 'link' },
          ],
        },
        {
          name: 'mainPath',
          label: 'Main path',
          type: 'text',
          localized: true,
        },
        {
          name: 'button',
          label: 'Button text',
          type: 'text',
          localized: true,
        },
        {
          name: 'iconClass',
          label: 'CSS class for the icon',
          type: 'text',
        },
        {
          name: 'menuLink',
          label: 'Menu link',
          type: 'relationship',
          relationTo: ['reqPages', 'principles', 'guidelines', 'criteria'],
          required: false,
        },
        {
          name: 'secondLevel',
          type: 'array',
          required: false,
          fields: [
            {
              name: 'element',
              label: 'Type of element',
              type: 'select',
              options: [
                { label: 'Button', value: 'button' },
                { label: 'Link', value: 'link' },
              ],
            },
            {
              name: 'button',
              label: 'Button text',
              type: 'text',
              localized: true,
            },
            {
              name: 'iconClass',
              label: 'CSS class for the icon',
              type: 'text',
            },
            {
              name: 'menuLink',
              label: 'Menu link',
              type: 'relationship',
              relationTo: ['reqPages', 'principles', 'guidelines', 'criteria'],
              required: false,
            },
            {
              name: 'thirdLevel',
              type: 'array',
              required: false,
              fields: [
                {
                  name: 'element',
                  label: 'Type of element',
                  type: 'select',
                  options: [
                    { label: 'Button', value: 'button' },
                    { label: 'Link', value: 'link' },
                  ],
                },
                {
                  name: 'button',
                  label: 'Button text',
                  type: 'text',
                  localized: true,
                },
                {
                  name: 'iconClass',
                  label: 'CSS class for the icon',
                  type: 'text',
                },
                {
                  name: 'menuLink',
                  label: 'Menu link',
                  type: 'relationship',
                  relationTo: ['reqPages', 'principles', 'guidelines', 'criteria'],
                  required: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

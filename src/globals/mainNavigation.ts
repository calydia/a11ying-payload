import { GlobalConfig } from 'payload'

export const mainNavigation: GlobalConfig = {
  slug: 'mainNav',
  label: 'Main Navigation',
  fields: [
    {
      name: 'firstLevel',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'buttonFirst',
          label: 'First level button',
          type: 'text',
        },
        {
          name: 'secondLevel',
          type: 'array',
          required: false,
          fields: [
            {
              name: 'buttonSecond',
              label: 'Second level button',
              type: 'text',
            },
            {
              name: 'secondLevelLinks',
              label: 'Second level links',
              type: 'relationship',
              relationTo: 'pages',
              required: false,
            },
            {
              name: 'thirdLevel',
              type: 'array',
              required: false,
              fields: [
                {
                  name: 'buttonThird',
                  label: 'Third level button',
                  type: 'text',
                },
                {
                  name: 'thirdLevelLinks',
                  label: 'Third level links',
                  type: 'relationship',
                  relationTo: 'pages',
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

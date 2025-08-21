import { GlobalConfig } from 'payload'

export const WCAGNavigation: GlobalConfig = {
  slug: 'WCAGNav',
  label: 'WCAG Navigation',
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
          name: 'firstLevelLinks',
          label: 'First level links',
          type: 'relationship',
          relationTo: 'pages',
          required: false,
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

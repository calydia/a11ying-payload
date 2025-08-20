import { Block } from 'payload'

export const Language: Block = {
  slug: 'language',
  labels: {
    singular: 'Language',
    plural: 'Languages',
  },
  fields: [
    {
      name: 'language',
      type: 'text',
      required: true,
    },
    {
      name: 'languageContent',
      label: 'Language Content',
      type: 'text',
      required: true,
    },
  ],
}

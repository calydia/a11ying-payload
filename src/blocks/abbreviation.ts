import { Block } from 'payload'

export const Abbreviation: Block = {
  slug: 'abbreviation',
  labels: {
    singular: 'Abbreviation definition',
    plural: 'Abbreviation definitions',
  },
  fields: [
    {
      name: 'abbreviation',
      label: 'Abbreviation',
      type: 'text',
      required: true,
    },
    {
      name: 'definition',
      label: 'Definition',
      type: 'text',
      required: false,
    },
  ],
}

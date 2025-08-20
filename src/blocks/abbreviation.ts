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
      type: 'text',
      required: true,
    },
    {
      name: 'definition',
      type: 'text',
      required: true,
    },
  ],
}

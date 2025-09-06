import { Block } from 'payload'

export const QuoteWithCite: Block = {
  slug: 'quote',
  labels: {
    singular: 'Quote with Cite',
    plural: 'Quotes with Cite',
  },
  fields: [
    {
      name: 'quote',
      label: 'Quote',
      type: 'text',
      required: true,
    },
    {
      name: 'cite',
      label: 'Cite',
      type: 'text',
      required: true,
    },
  ],
}

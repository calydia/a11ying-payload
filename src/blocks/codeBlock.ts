import { Block } from 'payload'

export const CodeBlock: Block = {
  slug: 'CodeBlock',
  labels: {
    singular: 'Code Block',
    plural: 'Code Blocks',
  },
  fields: [
    {
      name: 'renderField',
      type: 'checkbox',
      label: 'Render the HTML content',
      defaultValue: false,
    },
    {
      type: 'text',
      name: 'HTMLContent',
    },
  ],
}

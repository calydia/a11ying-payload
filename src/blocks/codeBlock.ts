import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

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
      type: 'richText',
      name: 'HTMLContent',
      label: 'HTML Content',
      editor: lexicalEditor({}),
    },
  ],
}

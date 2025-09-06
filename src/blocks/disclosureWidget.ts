import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const DisclosureWidget: Block = {
  slug: 'DisclosureWidget',
  labels: {
    singular: 'Disclosure Widget',
    plural: 'Disclosure Widgets',
  },
  fields: [
    {
      type: 'text',
      name: 'heading',
    },
    {
      type: 'richText',
      name: 'content',
      editor: lexicalEditor({}),
    },
  ],
}

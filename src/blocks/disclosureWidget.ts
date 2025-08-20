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
      name: 'Disclosure Widget Heading',
    },
    {
      type: 'richText',
      name: 'Disclosure Widget Content',
      editor: lexicalEditor({}),
    },
  ],
}

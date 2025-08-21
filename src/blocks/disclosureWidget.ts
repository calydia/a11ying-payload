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
      label: 'Disclosure Widget Heading',
    },
    {
      type: 'richText',
      name: 'content',
      label: 'Disclosure Widget Content',
      editor: lexicalEditor({}),
    },
  ],
}

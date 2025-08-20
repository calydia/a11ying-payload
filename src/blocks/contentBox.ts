import { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const ContentBox: Block = {
  slug: 'ContentBox',
  labels: {
    singular: 'Content Box',
    plural: 'Content Boxes',
  },
  fields: [
    {
      type: 'text',
      name: 'Content Box Heading',
    },
    {
      type: 'select',
      name: 'cssClass',
      label: 'CSS Class',
      options: [
        {
          label: 'Border: gradient',
          value: 'gradient',
        },
        {
          label: 'Border: solid',
          value: 'bordered',
        },
        {
          label: 'Heading underline',
          value: 'underlined',
        },
      ],
    },
    {
      type: 'richText',
      name: 'Content Box Content',
      editor: lexicalEditor({}),
    },
  ],
}

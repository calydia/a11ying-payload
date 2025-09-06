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
      name: 'heading',
    },
    {
      type: 'select',
      name: 'cssClass',
      label: 'CSS Class',
      options: [
        {
          label: 'Border: gradient',
          value: 'box-gradient',
        },
        {
          label: 'Border: solid',
          value: 'box-bordered',
        },
        {
          label: 'Heading underline',
          value: 'box-underlined',
        },
      ],
    },
    {
      type: 'richText',
      name: 'boxContent',
      editor: lexicalEditor({}),
    },
  ],
}

import { Block } from 'payload'
import { BlocksFeature, FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

// Blocks and inline blocks
import { Abbreviation } from './abbreviation'
import { Language } from './language'
import { CodeBlock } from './codeBlock'
import { DisclosureWidget } from './disclosureWidget'

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
      editor: lexicalEditor({
        features: ({ defaultFeatures, rootFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature({
            applyToFocusedEditor: true,
          }),
          BlocksFeature({
            blocks: [CodeBlock, DisclosureWidget],
            inlineBlocks: [Abbreviation, Language],
          }),
        ],
      }),
    },
  ],
}

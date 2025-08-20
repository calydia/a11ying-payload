// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { BlocksFeature, FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { GlossaryItems } from './collections/GlossaryItems'
import { WCAGPrinciples } from './collections/WCAGPrinciples'
import { WCAGGuidelines } from './collections/WCAGGuidelines'
import { WCAGCriteria } from './collections/WCAGCriteria'

import { Abbreviation } from './blocks/abbreviation'
import { Language } from './blocks/language'
import { CodeBlock } from './blocks/codeBlock'
import { ContentBox } from './blocks/contentBox'
import { DisclosureWidget } from './blocks/disclosureWidget'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Pages, GlossaryItems, WCAGPrinciples, WCAGGuidelines, WCAGCriteria, Users, Media],
  editor: lexicalEditor({
    features: ({ defaultFeatures, rootFeatures }) => [
      ...defaultFeatures,
      FixedToolbarFeature({
        applyToFocusedEditor: true,
      }),
      BlocksFeature({
        blocks: [CodeBlock, ContentBox, DisclosureWidget],
        inlineBlocks: [Abbreviation, Language],
      }),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  localization: {
    locales: [
      {
        label: 'English',
        code: 'en',
      },
      {
        label: 'Finnish',
        code: 'fi',
      },
    ],
    defaultLocale: 'en',
  },
})

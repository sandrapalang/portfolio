import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { studioDataset, studioProjectId, studioTitle } from '@/environment'

import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: studioTitle,

  projectId: studioProjectId,
  dataset: studioDataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { studioDataset, studioProjectId, studioTitle } from '@/environment'
import structure from '@/lib/structure'

import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: studioTitle,

  projectId: studioProjectId,
  dataset: studioDataset,

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

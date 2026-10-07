import { documentInternationalization } from '@sanity/document-internationalization'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { studioDataset, studioProjectId, studioTitle } from '@/environment'
import structure from '@/lib/structure'

import { schemaTypes } from './schemaTypes'

const multitonTypes = new Set(['workItem'])
const singletonTypes = new Set(['header', 'homePage'])
const singletonActions = new Set(['publish', 'unpublish', 'discardChanges'])

export default defineConfig({
  name: 'default',
  title: studioTitle,

  projectId: studioProjectId,
  dataset: studioDataset,

  plugins: [
    structureTool({ structure }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: 'en', title: 'English' },
        { id: 'sv', title: 'Swedish' },
      ],
      schemaTypes: ['workItem'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'document') {
        return prev
      }
      if (
        creationContext.type === 'global' ||
        creationContext.type === 'structure'
      ) {
        return prev.filter((template) => multitonTypes.has(template.templateId))
      }
      return prev
    },
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})

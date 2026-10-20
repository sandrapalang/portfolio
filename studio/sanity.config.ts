import { documentInternationalization } from '@sanity/document-internationalization'
import { visionTool } from '@sanity/vision'
import { defineConfig, type ReferenceFilterResolver } from 'sanity'
import { structureTool } from 'sanity/structure'
import { linkField } from 'sanity-plugin-link-field'

import { studioDataset, studioProjectId, studioTitle } from '@/environment'
import { linkableSchemaTypes } from '@/lib/config'
import structure from '@/lib/structure'

import { schemaTypes } from './schemaTypes'

const multitonTypes = new Set(['workItem'])
const singletonTypes = new Set(['header', 'homePage', 'stringTranslation'])
const singletonActions = new Set(['publish', 'unpublish', 'discardChanges'])

// workItem har ett `language`-fält (document-internationalization); homePage
// har det inte, och ska gå att länka till oavsett vilket dokument som redigeras.
const linkReferenceFilter: ReferenceFilterResolver = ({ document }) => {
  const language = (document as { language?: string })?.language
  if (!language) return {}
  return {
    filter: '!defined(language) || language == $lang',
    params: { lang: language },
  }
}

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
    linkField({
      linkableSchemaTypes,
      referenceFilterOptions: { filter: linkReferenceFilter },
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

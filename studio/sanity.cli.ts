import path from 'path'
import { defineCliConfig } from 'sanity/cli'

import { studioDataset, studioProjectId } from '@/environment'

export default defineCliConfig({
  api: {
    projectId: studioProjectId,
    dataset: studioDataset,
  },
  deployment: {
    autoUpdates: true,
  },
  schemaExtraction: {
    enabled: true,
  },
  typegen: {
    enabled: true,
    path: '../app/src/**/*.{ts,tsx,js,jsx}',
    schema: './schema.json',
    generates: '../app/src/lib/sanity/types.ts',
    overloadClientMethods: true,
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  },
})

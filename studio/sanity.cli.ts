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
})

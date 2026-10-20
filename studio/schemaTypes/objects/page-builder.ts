import { defineType } from 'sanity'

export const title = 'Page builder'
export const type = 'pageBuilder'

export default defineType({
  name: type,
  title,
  type: 'array',
  of: [],
})

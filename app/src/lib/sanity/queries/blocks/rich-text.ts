import { richTextObjectQuery } from '../objects/rich-text'

export const richTextQuery = `
  content { ${richTextObjectQuery()} }
`

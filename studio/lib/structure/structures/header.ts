import type { StructureBuilder } from 'sanity/structure'

import { icon, title, type } from '@/schemaTypes/documents/header'

const headerStructure = (S: StructureBuilder) =>
  S.listItem()
    .title(title)
    .icon(icon)
    .child(S.document().schemaType(type).documentId(type))

export default headerStructure

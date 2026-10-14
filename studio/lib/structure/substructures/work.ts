import { Newspaper } from 'lucide-react'
import type { StructureBuilder } from 'sanity/structure'

import { titlePlural, type } from '@/schemaTypes/documents/work-item'

const icon = Newspaper
const title = 'Work'

const workStructure = (S: StructureBuilder) =>
  S.listItem()
    .title(title)
    .icon(icon)
    .child(S.documentTypeList(type).title(titlePlural))

export default workStructure

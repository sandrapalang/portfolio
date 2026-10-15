import { Settings } from 'lucide-react'
import { StructureBuilder, StructureResolverContext } from 'sanity/structure'

import stringTranslationStructure from '@/lib/structure/substructures/string-translation'

const settingsStructure = (
  S: StructureBuilder,
  context: StructureResolverContext,
) =>
  S.listItem()
    .title('Settings')
    .icon(Settings)
    .child(
      S.list()
        .title('Settings')
        .items([stringTranslationStructure(S, context)]),
    )

export default settingsStructure

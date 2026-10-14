import { StructureBuilder, StructureResolverContext } from 'sanity/structure'

import headerStructure from '@/lib/structure/substructures/header'
import homeStructure from '@/lib/structure/substructures/home'
import workStructure from '@/lib/structure/substructures/work'

const structure = (S: StructureBuilder, context: StructureResolverContext) =>
  S.list()
    .title('Content')
    .items([
      homeStructure(S, context),
      workStructure(S),
      S.divider(),
      headerStructure(S),
    ])

export default structure

import { StructureBuilder, StructureResolverContext } from 'sanity/structure'

import headerStructure from '@/lib/structure/structures/header'
import homeStructure from '@/lib/structure/structures/home'
import workStructure from '@/lib/structure/structures/work'

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

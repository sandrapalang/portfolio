import { StructureBuilder, StructureResolverContext } from 'sanity/structure'

import headerStructure from '@/lib/structure/structures/header'
import homeStructure from '@/lib/structure/structures/home'

const structure = (S: StructureBuilder, context: StructureResolverContext) =>
  S.list()
    .title('Content')
    .items([homeStructure(S, context), S.divider(), headerStructure(S)])

export default structure

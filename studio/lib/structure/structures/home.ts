import { map } from 'rxjs/operators'
import { SanityDocument } from 'sanity'
import { StructureBuilder, StructureResolverContext } from 'sanity/structure'

import { icon, title, type } from '@/schemaTypes/documents/home-page'

const homeStructure = (
  S: StructureBuilder,
  context: StructureResolverContext,
) =>
  S.listItem()
    .title(title)
    .icon(icon)
    .child(() =>
      context.documentStore
        .listenQuery(
          '*[_type == $type]{ _id, _type, title, language }',
          { type },
          { perspective: 'drafts' },
        )
        .pipe(
          map((docs) =>
            S.list()
              .title(title)
              .items(
                docs.map((doc: SanityDocument) =>
                  S.documentListItem()
                    .icon(icon)
                    .schemaType(type)
                    .id(doc._id)
                    .title(title),
                ),
              ),
          ),
        ),
    )

export default homeStructure

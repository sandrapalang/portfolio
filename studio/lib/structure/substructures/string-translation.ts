import { map } from 'rxjs/operators'
import { SanityDocument } from 'sanity'
import { StructureBuilder, StructureResolverContext } from 'sanity/structure'

import {
  icon,
  titlePlural,
  type,
} from '@/schemaTypes/documents/string-translation'

const stringTranslationStructure = (
  S: StructureBuilder,
  context: StructureResolverContext,
) =>
  S.listItem()
    .title(titlePlural)
    .icon(icon)
    .child(() =>
      context.documentStore
        .listenQuery(
          '*[_type == $type]{ _id, _type, language }',
          { type },
          { perspective: 'drafts' },
        )
        .pipe(
          map((docs) =>
            S.list()
              .title(titlePlural)
              .items(
                docs.map((doc: SanityDocument) =>
                  S.documentListItem().schemaType(type).id(doc._id),
                ),
              ),
          ),
        ),
    )

export default stringTranslationStructure

import { workMetaQuery } from './blocks/work-meta'

export const pageBuilderQuery = `
  pageBuilder[!defined(settings.hideBlockFromPage) || settings.hideBlockFromPage != true] {
    _type,
    _key,
    _type == "workMeta" => { ${workMetaQuery} },
    "paddingTop": settings.paddingTop,
    "paddingBottom": settings.paddingBottom,
  }
`

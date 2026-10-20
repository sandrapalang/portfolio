export const pageBuilderQuery = `
  pageBuilder[!defined(settings.hideBlockFromPage) || settings.hideBlockFromPage != true] {
    _type,
    _key,
    "paddingTop": settings.paddingTop,
    "paddingBottom": settings.paddingBottom,
  }
`

export const workMetaQuery = `
  "projectType": ^.projectType->title[$locale],
  "category": ^.category->title[$locale],
  "contribution": ^.contribution[]->title[$locale],
`

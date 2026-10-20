import richText from './blocks/rich-text'
import richTextField from './blocks/rich-text-advanced'
import workMeta from './blocks/work-meta'
import category from './documents/category'
import contribution from './documents/contribution'
import header from './documents/header'
import homePage from './documents/home-page'
import projectType from './documents/project-type'
import skill from './documents/skill'
import stringTranslation from './documents/string-translation'
import workItem from './documents/work-item'
import pageBuilder from './objects/page-builder'
import seoSettings from './objects/seo-settings'

export const schemaTypes = [
  category,
  contribution,
  header,
  homePage,
  pageBuilder,
  projectType,
  richText,
  richTextField,
  seoSettings,
  skill,
  stringTranslation,
  workItem,
  workMeta,
]

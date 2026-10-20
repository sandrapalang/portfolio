import { defineField, defineType } from 'sanity'

import {
  LargeHeadingPreview,
  LargeParagraphPreview,
  SmallHeadingPreview,
  SmallParagraphPreview,
} from '@/components/rich-text-preview'

export const title = 'Rich Text Advanced'
export const type = 'richTextAdvanced'

const richText = {
  type: 'block',
  lists: [],
  styles: [
    { title: 'Large heading', value: 'h4', component: LargeHeadingPreview },
    { title: 'Small heading', value: 'h6', component: SmallHeadingPreview },
    { title: 'Large paragraph', value: 'h5', component: LargeParagraphPreview },
    {
      title: 'Small paragraph',
      value: 'normal',
      component: SmallParagraphPreview,
    },
  ],
  marks: {
    decorators: [
      { title: 'Strong', value: 'strong' },
      { title: 'Italic', value: 'em' },
    ],
    annotations: [{ name: 'link', type: 'link' }],
  },
}

export default defineType({
  name: type,
  title,
  type: 'object',
  fields: [
    defineField({
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [richText],
    }),
  ],
})

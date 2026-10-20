import { defineField } from 'sanity'

const paddingOptions = [
  { title: 'None', value: 'none' },
  { title: 'Small', value: 'sm' },
  { title: 'Medium', value: 'md' },
  { title: 'Large', value: 'lg' },
]

type BaseBlockSettingsOptions = {
  paddingBottom?: string
  paddingTop?: string
}

const baseBlockSettings = ({
  paddingBottom = 'none',
  paddingTop = 'none',
}: BaseBlockSettingsOptions = {}) =>
  defineField({
    name: 'settings',
    title: 'Settings',
    type: 'object',
    group: 'settings',
    fields: [
      defineField({
        name: 'paddingTop',
        title: 'Top block padding',
        type: 'string',
        options: { list: paddingOptions },
        initialValue: paddingTop,
      }),
      defineField({
        name: 'paddingBottom',
        title: 'Bottom block padding',
        type: 'string',
        options: { list: paddingOptions },
        initialValue: paddingBottom,
      }),
      defineField({
        name: 'hideBlockFromPage',
        title: 'Hide block from page',
        type: 'boolean',
        initialValue: false,
      }),
    ],
  })

export default baseBlockSettings

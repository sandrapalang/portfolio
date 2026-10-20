import { type ComponentType } from 'react'

import WorkMeta from '@/components/blocks/work-meta'

type PageBuilderBlock = { _key: string; _type: string } & Record<
  string,
  unknown
>

type PageBuilderProps = {
  blocks?: PageBuilderBlock[] | null
}

const blockComponents: Record<string, ComponentType<PageBuilderBlock>> = {
  workMeta: WorkMeta as ComponentType<PageBuilderBlock>,
}

const PageBuilder = ({ blocks }: PageBuilderProps) => {
  if (!blocks?.length) return null

  return (
    <>
      {blocks.map((block) => {
        const Component = blockComponents[block._type]

        if (!Component) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`no component found for block type "${block._type}"`)
          }
          return null
        }

        return <Component key={block._key} {...block} />
      })}
    </>
  )
}

export default PageBuilder

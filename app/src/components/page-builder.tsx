import { type ComponentType, type CSSProperties } from 'react'

import WorkMeta from '@/components/blocks/work-meta'

type PageBuilderBlock = {
  _key: string
  _type: string
  paddingTop?: string | null
  paddingBottom?: string | null
} & Record<string, unknown>

type PageBuilderProps = {
  blocks?: PageBuilderBlock[] | null
}

const blockComponents: Record<string, ComponentType<PageBuilderBlock>> = {
  workMeta: WorkMeta as ComponentType<PageBuilderBlock>,
}

const space = (token?: string | null) =>
  token ? `var(--space-${token})` : undefined

const blockPadding = (block: PageBuilderBlock): CSSProperties => ({
  paddingTop: space(block.paddingTop ?? 'none'),
  paddingBottom: space(block.paddingBottom ?? 'none'),
})

const PageBuilder = ({ blocks }: PageBuilderProps) => {
  if (!blocks?.length) return null

  return (
    <>
      {blocks.map((block) => {
        const Component = blockComponents[block._type]
        if (!Component) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(`No component for block type "${block._type}"`)
          }
          return null
        }

        return (
          <div key={block._key} style={blockPadding(block)}>
            <Component {...block} />
          </div>
        )
      })}
    </>
  )
}

export default PageBuilder

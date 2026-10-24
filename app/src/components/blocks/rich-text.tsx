import { type PortableTextBlock } from '@portabletext/react'

import GridContainer from '@/components/layout/grid-container'
import RichText from '@/components/rich-text'

import styles from './rich-text.module.scss'

type RichTextBlockProps = {
  content?: { text?: PortableTextBlock[] | null } | null
}

const RichTextBlock = ({ content }: RichTextBlockProps) => {
  return (
    <GridContainer className={styles.gridColumnsLayout}>
      <RichText className={styles.gridItem} content={content?.text} />
    </GridContainer>
  )
}

export default RichTextBlock

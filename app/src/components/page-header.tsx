import GridContainer from '@/components/layout/grid-container'

import styles from './page-header.module.scss'

type PageHeaderProps = {
  title?: string
  variant?: 'default' | 'workItem'
}

const PageHeader = ({ title, variant = 'default' }: PageHeaderProps) => {
  const sectionClass =
    variant === 'workItem' ? styles.sectionWorkItem : styles.section
  const itemClass = variant === 'workItem' ? styles.itemWorkItem : styles.item

  return (
    <GridContainer className={sectionClass}>
      <h1 className={itemClass}>{title}</h1>
    </GridContainer>
  )
}

export default PageHeader

import GridContainer from '@/components/layout/grid-container'

import styles from './page-header.module.scss'

type PageHeaderProps = {
  title?: string
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <GridContainer className={styles.section}>
      <h1 className={styles.item}>{title}</h1>
    </GridContainer>
  )
}

export default PageHeader

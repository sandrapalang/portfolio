import { useTranslations } from 'next-intl'

import GridContainer from '@/components/layout/grid-container'

import styles from './work-meta.module.scss'

type WorkMetaProps = {
  category?: string | null
  contribution?: (string | null)[] | null
  projectType?: string | null
}

const WorkMeta = ({ category, contribution, projectType }: WorkMetaProps) => {
  const t = useTranslations('work')
  const contributions =
    contribution?.filter((item): item is string => Boolean(item)) ?? []

  return (
    <GridContainer className={styles.gridColumnsLayout}>
      <div className={styles.gridColumnsLayoutRow}>
        <div className={styles.gridItemContainer}>
          <div className={styles.gridItem}>
            <h6>{t('typeOfWork')}</h6>
            {projectType && <h5>{projectType}</h5>}
          </div>
        </div>
        <div className={styles.gridItemContainer}>
          <div className={styles.gridItem}>
            <h6>{t('category')}</h6>
            {category && <h5>{category}</h5>}
          </div>
        </div>
        <div className={styles.gridItemContainer}>
          <div className={styles.gridItem}>
            <h6>{t('contribution')}</h6>
            {contributions.length > 0 && (
              <ul>
                {contributions.map((text) => (
                  <li key={text}>
                    <h5>{text}</h5>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </GridContainer>
  )
}

export default WorkMeta

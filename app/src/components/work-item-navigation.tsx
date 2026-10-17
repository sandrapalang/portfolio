import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import GridContainer from '@/components/layout/grid-container'
import { localizeUrlPath } from '@/lib/utils'

import styles from './work-item-navigation.module.scss'

export type WorkItemNavigationLink = {
  urlPath: string
}

type WorkItemNavigationProps = {
  next: WorkItemNavigationLink | null
  previous: WorkItemNavigationLink | null
}

const WorkItemNavigation = ({ next, previous }: WorkItemNavigationProps) => {
  const locale = useLocale()
  const t = useTranslations('work')

  if (!previous && !next) return null

  return (
    <GridContainer className={styles.section}>
      <nav className={styles.nav}>
        {previous && (
          <Link
            className={styles.previous}
            href={localizeUrlPath(previous.urlPath, locale)}
          >
            <h5>{t('previousWork')}</h5>
          </Link>
        )}
        {next && (
          <Link
            className={styles.next}
            href={localizeUrlPath(next.urlPath, locale)}
          >
            <h5>{t('nextWork')}</h5>
          </Link>
        )}
      </nav>
    </GridContainer>
  )
}

export default WorkItemNavigation

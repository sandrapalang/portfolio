import type { ReactNode } from 'react'

import styles from './section-wrapper.module.scss'

type SectionWrapperProps = {
  children: ReactNode
  title: string
}

const SectionWrapper = ({ children, title }: SectionWrapperProps) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  )
}

export default SectionWrapper

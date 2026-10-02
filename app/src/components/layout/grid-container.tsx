import type { ReactNode } from 'react'

import styles from './grid-container.module.scss'

type GridContainerProps = {
  children: ReactNode
  className?: string
}

const GridContainer = ({ children, className = '' }: GridContainerProps) => {
  return <div className={`${styles.grid} ${className}`.trim()}>{children}</div>
}

export default GridContainer

import type { ReactNode } from 'react'

import styles from './horizontal-scroll.module.scss'

type HorizontalScrollProps = {
  children: ReactNode
}

const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  return <div className={styles.track}>{children}</div>
}

export default HorizontalScroll

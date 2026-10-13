'use client'

import { type ReactNode, type RefObject, useRef } from 'react'

import useHorizontalGalleryScroll from '@/hooks/use-horizontal-gallery-scroll'

import styles from './horizontal-scroll.module.scss'

type HorizontalScrollProps = {
  children: ReactNode
  pinRef: RefObject<HTMLElement | null>
}

const HorizontalScroll = ({ children, pinRef }: HorizontalScrollProps) => {
  const viewportRef = useRef<HTMLDivElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)

  useHorizontalGalleryScroll({ pinRef, viewportRef, stripRef })

  return (
    <div className={styles.wrapper} ref={viewportRef}>
      <div className={styles.strip} ref={stripRef}>
        {children}
      </div>
    </div>
  )
}

export default HorizontalScroll

'use client'

import { type RefObject, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Avoid expensive refresh when iOS shows/hides the URL bar (viewport height flicker).
ScrollTrigger.config({ ignoreMobileResize: true })

type UseHorizontalGalleryScrollParams = {
  /** Whole WorkSection — pinned while scrubbing. */
  pinRef: RefObject<HTMLElement | null>
  /** Clip window; width baseline for scroll distance. */
  viewportRef: RefObject<HTMLElement | null>
  /** Card row translated on x. */
  stripRef: RefObject<HTMLElement | null>
}

function useHorizontalGalleryScroll({
  pinRef,
  viewportRef,
  stripRef,
}: UseHorizontalGalleryScrollParams) {
  useEffect(() => {
    const pin = pinRef.current
    const viewport = viewportRef.current
    const strip = stripRef.current
    if (!pin || !viewport || !strip) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    let pinWrapWidth = 0
    let horizontalScrollLength = 0

    const refresh = () => {
      gsap.set(strip, { x: 0 })
      pinWrapWidth = strip.scrollWidth
      horizontalScrollLength = Math.max(0, pinWrapWidth - viewport.offsetWidth)
    }

    const ctx = gsap.context(() => {
      refresh()

      gsap.to(strip, {
        x: () => -horizontalScrollLength,
        ease: 'none',
        scrollTrigger: {
          scrub: 0.5,
          trigger: pin,
          pin: true,
          start: 'center center',
          end: () => `+=${pinWrapWidth}`,
          invalidateOnRefresh: true,
        },
      })
    }, pin)

    ScrollTrigger.addEventListener('refreshInit', refresh)
    ScrollTrigger.refresh()

    // Mobile images often finish after first measure — remasure when they load.
    const images = strip.querySelectorAll('img')
    const onImageLoad = () => ScrollTrigger.refresh()
    images.forEach((img) => {
      if (!img.complete) img.addEventListener('load', onImageLoad)
    })

    return () => {
      images.forEach((img) => img.removeEventListener('load', onImageLoad))
      ScrollTrigger.removeEventListener('refreshInit', refresh)
      ctx.revert()
    }
  }, [pinRef, viewportRef, stripRef])
}

export default useHorizontalGalleryScroll

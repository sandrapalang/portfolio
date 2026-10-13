'use client'

import { type ReactNode, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis, useLenis } from 'lenis/react'

import 'lenis/dist/lenis.css'

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.config({ ignoreMobileResize: true })

type LenisScrollProviderProps = {
  children: ReactNode
}

/** Keep ScrollTrigger in sync whenever Lenis scrolls. */
function LenisScrollTriggerBridge() {
  useLenis(() => {
    ScrollTrigger.update()
  })

  useEffect(() => {
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [])

  return null
}

export function LenisScrollProvider({ children }: LenisScrollProviderProps) {
  return (
    <ReactLenis
      options={{
        autoRaf: true,
        lerp: 0.2, // smoothness (lower = softer / more lag)
        wheelMultiplier: 0.9, // slower trackpad / mouse wheel
        touchMultiplier: 0.9, // slower touch swipe
        syncTouch: true, // required for Lenis smooth scroll on iPhone
      }}
      root
    >
      <LenisScrollTriggerBridge />
      {children}
    </ReactLenis>
  )
}

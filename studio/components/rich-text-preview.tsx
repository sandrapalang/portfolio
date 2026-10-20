import { type PropsWithChildren } from 'react'

export const LargeHeadingPreview = ({ children }: PropsWithChildren) => (
  <span style={{ fontSize: '24px', fontWeight: 450, letterSpacing: '0.025em' }}>
    {children}
  </span>
)

export const SmallHeadingPreview = ({ children }: PropsWithChildren) => (
  <span
    style={{
      fontSize: '16px',
      fontWeight: 500,
      letterSpacing: '0.025em',
      lineHeight: '24px',
      textTransform: 'uppercase',
    }}
  >
    {children}
  </span>
)

export const LargeParagraphPreview = ({ children }: PropsWithChildren) => (
  <span style={{ fontSize: '20px', fontWeight: 300, lineHeight: '24px' }}>
    {children}
  </span>
)

export const SmallParagraphPreview = ({ children }: PropsWithChildren) => (
  <span style={{ fontSize: '16px', fontWeight: 300 }}>{children}</span>
)

import { type ReactNode } from 'react'
import { PortableText, type PortableTextBlock } from '@portabletext/react'
import { useLocale } from 'next-intl'

import { localizeUrlPath } from '@/lib/utils'

import Link, { type LinkType } from './ui/link'

type RichTextBlockHeading = 'h4' | 'h5' | 'h6'

type RichTextHeadings = Partial<
  Record<
    RichTextBlockHeading,
    { as?: RichTextBlockHeading | 'p'; className?: string }
  >
>

type RichTextLinkValue = {
  type?: LinkType
  internalLink?: { _type: string; urlPath?: string | null } | null
  url?: string | null
  email?: string | null
  phone?: string | null
  blank?: boolean
}

type RichTextProps = {
  content?: PortableTextBlock[] | null
  className?: string
  headings?: RichTextHeadings
}

const RichTextLink = ({
  value,
  children,
}: {
  value?: RichTextLinkValue
  children?: ReactNode
}) => {
  const locale = useLocale()

  if (!value) return <>{children}</>

  if (value.type === 'external' && value.url) {
    return (
      <Link
        blank={value.blank}
        href={value.url}
        type="external"
        variant="inline"
      >
        {children}
      </Link>
    )
  }

  if (value.type === 'email' && value.email) {
    return (
      <Link email={value.email} type="email" variant="inline">
        {children}
      </Link>
    )
  }

  if (value.type === 'phone' && value.phone) {
    return (
      <Link phone={value.phone} type="phone" variant="inline">
        {children}
      </Link>
    )
  }

  if (value.type === 'internal' && value.internalLink?.urlPath) {
    return (
      <Link
        href={localizeUrlPath(value.internalLink.urlPath, locale)}
        type="internal"
        variant="inline"
      >
        {children}
      </Link>
    )
  }

  return <>{children}</>
}

const RichTextParagraph = ({ children }: { children?: ReactNode }) => (
  <p>{children}</p>
)

const RichTextStrong = ({ children }: { children?: ReactNode }) => (
  <strong>{children}</strong>
)

const RichTextEm = ({ children }: { children?: ReactNode }) => (
  <em>{children}</em>
)

const createHeading = (
  level: RichTextBlockHeading,
  headings?: RichTextHeadings,
) => {
  const override = headings?.[level]
  const As = override?.as ?? level

  const Heading = ({ children }: { children?: ReactNode }) => (
    <As className={override?.className}>{children}</As>
  )
  Heading.displayName = `RichTextHeading(${level})`

  return Heading
}

const RichText = ({ content, className, headings }: RichTextProps) => {
  if (!content) return null

  return (
    <div className={className}>
      <PortableText
        components={{
          block: {
            normal: RichTextParagraph,
            h4: createHeading('h4', headings),
            h5: createHeading('h5', headings),
            h6: createHeading('h6', headings),
          },
          marks: {
            strong: RichTextStrong,
            em: RichTextEm,
            link: RichTextLink,
          },
        }}
        value={content}
      />
    </div>
  )
}

export default RichText

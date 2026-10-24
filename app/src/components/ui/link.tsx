import { type ReactNode } from 'react'
import NextLink from 'next/link'

import styles from './link.module.scss'

type LinkVariant = 'standalone' | 'inline'

type LinkBaseProps = {
  children?: ReactNode
  className?: string
  variant?: LinkVariant
}

type EmailLinkProps = LinkBaseProps & {
  type: 'email'
  email: string
}

type ExternalLinkProps = LinkBaseProps & {
  type: 'external'
  href: string
  blank?: boolean
}

type InternalLinkProps = LinkBaseProps & {
  type: 'internal'
  href: string
}

type PhoneLinkProps = LinkBaseProps & {
  type: 'phone'
  phone: string
}

export type LinkProps =
  EmailLinkProps | ExternalLinkProps | InternalLinkProps | PhoneLinkProps

export type LinkType = LinkProps['type']

const Link = (props: LinkProps) => {
  const { type, children, className, variant = 'standalone' } = props
  const classes = [styles[variant], styles[type], className]
    .filter(Boolean)
    .join(' ')

  if (type === 'internal') {
    return (
      <NextLink className={classes} href={props.href}>
        {children}
      </NextLink>
    )
  }

  if (type === 'external') {
    return (
      <a
        className={classes}
        href={props.href}
        rel={props.blank ? 'noopener noreferrer' : undefined}
        target={props.blank ? '_blank' : undefined}
      >
        {children}
      </a>
    )
  }

  if (type === 'email') {
    return (
      <a className={classes} href={`mailto:${props.email}`}>
        {children}
      </a>
    )
  }

  return (
    <a className={classes} href={`tel:${props.phone}`}>
      {children}
    </a>
  )
}

export default Link

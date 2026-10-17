import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import Pill from '@/components/pill'
import { localizeUrlPath } from '@/lib/utils'

import styles from '@/components/work-card.module.scss'

export type WorkCardImage = {
  src: string
  alt: string
}

type WorkCardProps = {
  category: string | null
  projectType: string | null
  image: WorkCardImage
  heading: string | null
  urlPath: string | null
  techStack: string[]
  isPublished: boolean
  priority?: boolean
}

const WorkCard = ({
  image,
  heading,
  urlPath,
  category,
  projectType,
  techStack,
  isPublished,
  priority = false,
}: WorkCardProps) => {
  const locale = useLocale()
  const t = useTranslations('work')

  const hasTechStack = techStack?.length > 0
  const href = localizeUrlPath(urlPath, locale)

  const content = (
    <div className={styles.imageWrapper}>
      {image.src && (
        <Image
          alt={image.alt ?? ''}
          className={`${styles.image} ${!isPublished ? styles.imageUnpublished : ''}`}
          fill
          priority={priority}
          sizes="(min-width: 768px) 67vw, 100vw"
          src={image.src}
        />
      )}

      <div className={styles.pills}>
        <div className={styles.pillsDefault}>
          {projectType && <Pill label={projectType} />}
          {category && <Pill label={category} />}
        </div>

        {hasTechStack && (
          <div className={styles.pillsHover}>
            {techStack.map((skill) => (
              <Pill key={skill} label={skill} />
            ))}
          </div>
        )}
      </div>

      <h3 className={styles.heading}>
        {isPublished ? heading : t('comingSoon')}
      </h3>
    </div>
  )

  return (
    <div className={styles.card}>
      {isPublished ? (
        <Link className={styles.link} href={href}>
          {content}
        </Link>
      ) : (
        <div className={styles.nonLink}>{content}</div>
      )}
    </div>
  )
}

export default WorkCard

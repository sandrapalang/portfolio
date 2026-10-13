import Image from 'next/image'

import Pill from '@/components/pill'
import { Link } from '@/lib/i18n/navigation'

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
  slug: string | null
  techStack: string[]
  isPublished: boolean
  priority?: boolean
}

const WorkCard = ({
  image,
  heading,
  slug,
  category,
  projectType,
  techStack,
  isPublished,
  priority = false,
}: WorkCardProps) => {
  const hasTechStack = techStack?.length > 0

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
        {/* TODO: use string translations instead of hardcoding */}
        {isPublished ? heading : 'Coming soon'}
      </h3>
    </div>
  )

  return (
    <div className={styles.card}>
      {isPublished ? (
        <Link className={styles.link} href={`/work/${slug ?? ''}`}>
          {content}
        </Link>
      ) : (
        <div className={styles.nonLink}>{content}</div>
      )}
    </div>
  )
}

export default WorkCard

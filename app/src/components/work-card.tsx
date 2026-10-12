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
}

const WorkCard = ({
  image,
  heading,
  slug,
  category,
  projectType,
}: WorkCardProps) => {
  return (
    <div className={styles.card}>
      <Link className={styles.link} href={`/work/${slug ?? ''}`}>
        <div className={styles.imageWrapper}>
          {image.src && (
            <Image
              alt={image.alt ?? ''}
              className={styles.image}
              fill
              sizes="(min-width: 768px) 67vw, 100vw"
              src={image.src}
            />
          )}

          <div className={styles.pills}>
            <div className={styles.pillsDefault}>
              {projectType && <Pill label={projectType} />}
              {category && <Pill label={category} />}
            </div>
          </div>

          <h3 className={styles.heading}>{heading}</h3>
        </div>
      </Link>
    </div>
  )
}

export default WorkCard

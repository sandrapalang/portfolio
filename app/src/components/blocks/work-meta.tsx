import { useTranslations } from 'next-intl'

import GridContainer from '@/components/layout/grid-container'

type WorkMetaProps = {
  category?: string | null
  contribution?: (string | null)[] | null
  projectType?: string | null
}

const WorkMeta = ({ category, contribution, projectType }: WorkMetaProps) => {
  const t = useTranslations('work')
  const contributions =
    contribution?.filter((item): item is string => Boolean(item)) ?? []

  return (
    <GridContainer>
      <div>
        <div>
          <h6>{t('typeOfWork')}</h6>
          {projectType && <h5>{projectType}</h5>}
        </div>
      </div>
      <div>
        <div>
          <h6>{t('category')}</h6>
          {category && <h5>{category}</h5>}
        </div>
      </div>
      <div>
        <div>
          <h6>{t('contribution')}</h6>
          {contributions.length > 0 && (
            <ul>
              {contributions.map((text) => (
                <li key={text}>
                  <h5>{text}</h5>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </GridContainer>
  )
}

export default WorkMeta

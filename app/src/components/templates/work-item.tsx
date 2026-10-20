import PageBuilder from '@/components/page-builder'
import PageHeader from '@/components/page-header'
import WorkItemNavigation, {
  type WorkItemNavigationLink,
} from '@/components/work-item-navigation'

type WorkItemTemplateProps = {
  workItem: {
    next?: WorkItemNavigationLink
    previous?: WorkItemNavigationLink
    pageBuilder?: { _key: string; _type: string }[]
    title?: string
  }
}

const WorkItemTemplate = ({ workItem }: WorkItemTemplateProps) => {
  return (
    <main>
      <PageHeader title={workItem.title} variant="workItem" />
      {workItem.pageBuilder && <PageBuilder blocks={workItem.pageBuilder} />}
      <WorkItemNavigation
        next={workItem.next ?? null}
        previous={workItem.previous ?? null}
      />
    </main>
  )
}

export default WorkItemTemplate

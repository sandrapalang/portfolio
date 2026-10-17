import PageHeader from '@/components/page-header'
import WorkItemNavigation, {
  type WorkItemNavigationLink,
} from '@/components/work-item-navigation'

type WorkItemTemplateProps = {
  workItem: {
    next?: WorkItemNavigationLink
    previous?: WorkItemNavigationLink
    title?: string
  }
}

const WorkItemTemplate = ({ workItem }: WorkItemTemplateProps) => {
  return (
    <main>
      <PageHeader title={workItem.title} variant="workItem" />
      <WorkItemNavigation
        next={workItem.next ?? null}
        previous={workItem.previous ?? null}
      />
    </main>
  )
}

export default WorkItemTemplate

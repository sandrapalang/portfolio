import PageHeader from '@/components/page-header'

type WorkItemTemplateProps = {
  workItem: {
    title?: string
  }
}

const WorkItemTemplate = ({ workItem }: WorkItemTemplateProps) => {
  return (
    <main>
      <PageHeader title={workItem.title} variant="workItem" />
    </main>
  )
}

export default WorkItemTemplate

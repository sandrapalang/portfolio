type WorkItemTemplateProps = {
  workItem: {
    title?: string
  }
}

const WorkItemTemplate = ({ workItem }: WorkItemTemplateProps) => {
  return (
    <main>
      <h1>{workItem?.title}</h1>
    </main>
  )
}

export default WorkItemTemplate

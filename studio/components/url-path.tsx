import { useEffect } from 'react'
import type { SanityDocument, StringInputProps } from 'sanity'
import { useDocumentOperation, useFormValue } from 'sanity'

import { studioAppUrl } from '@/environment'
import { singletonContentTypes } from '@/lib/config'
import { getContentTypeSlug, getLanguageSlug, getParentSlug } from '@/lib/utils'

const UrlPath = (props: StringInputProps) => {
  const { value } = props
  const document = useFormValue([]) as SanityDocument
  const slug = useFormValue(['slug']) as { current?: string } | undefined
  const docId = document._id.replace('drafts.', '')
  const { patch } = useDocumentOperation(docId, document._type)

  useEffect(() => {
    if (document._type === 'homePage') return

    if (singletonContentTypes.includes(document._type)) {
      const fullSlug = getContentTypeSlug(document)
      if (value !== fullSlug) patch.execute([{ set: { urlPath: fullSlug } }])
      return
    }

    if (!slug?.current) {
      if (value) patch.execute([{ unset: ['urlPath'] }])
      return
    }

    async function buildSlug() {
      const parentSlug = await getParentSlug(document)
      const fullSlug = parentSlug
        ? `${parentSlug}/${slug!.current}`
        : `/${slug!.current}`
      if (value !== fullSlug) patch.execute([{ set: { urlPath: fullSlug } }])
    }

    buildSlug()
  }, [slug, patch, value, document])

  if (document._type === 'homePage') {
    const fullUrl = `${studioAppUrl}${getLanguageSlug(document)}`
    return (
      <a href={fullUrl} rel="noreferrer" target="_blank">
        {fullUrl}
      </a>
    )
  }

  if (!value) return null

  const fullUrl = `${studioAppUrl}${getLanguageSlug(document)}${value}`

  return (
    <a href={fullUrl} rel="noreferrer" target="_blank">
      {fullUrl}
    </a>
  )
}

export default UrlPath

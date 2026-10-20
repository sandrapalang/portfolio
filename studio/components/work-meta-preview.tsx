import { Box, Text } from '@sanity/ui'
import {
  type ArrayOfObjectsInputProps,
  type ArrayOfObjectsMember,
  type FieldProps,
  type InputProps,
  type ObjectInputProps,
  type ObjectItem,
  useFormValue,
} from 'sanity'

const ignoreChange = () => {}

const filledMessage =
  'These values come from the Work Item fields. Close this window and scroll up to change the values shown in the fields below.'

const emptyMessage =
  'To use this Work Meta block, you need to add values in these fields. Close this window and scroll up to add the values shown in the fields below.'

type ReferenceValue = ObjectItem & {
  _ref: string
}

const isArrayOfObjectsInput = (
  props: InputProps,
): props is ArrayOfObjectsInputProps => props.schemaType.jsonType === 'array'

const isObjectInput = (props: InputProps): props is ObjectInputProps =>
  props.schemaType.jsonType === 'object'

const isReferenceValue = (value: unknown): value is ReferenceValue =>
  typeof value === 'object' &&
  value !== null &&
  '_ref' in value &&
  typeof value._ref === 'string'

// Array inputs draw their rows from `members`, which Studio builds from the
// stored field. These fields are not stored, so the parent references are
// turned into members before the default input renders them.
export const ReadOnlyParentInput = (props: InputProps) => {
  const fieldName = props.path.at(-1)
  const parentValue = useFormValue(
    typeof fieldName === 'string' ? [fieldName] : [],
  )

  if (typeof fieldName !== 'string') return props.renderDefault(props)

  if (isArrayOfObjectsInput(props)) {
    const items = Array.isArray(parentValue)
      ? parentValue.filter(isReferenceValue)
      : []
    const memberSchemaType = props.schemaType.of[0]
    const references = items.map((item, index) => ({
      ...item,
      _key: item._key ?? item._ref ?? `${index}`,
    }))
    const members = references.map((item, index) => {
      const key = item._key

      return {
        kind: 'item',
        key,
        index,
        collapsed: true,
        collapsible: false,
        open: false,
        parentSchemaType: props.schemaType,
        item: {
          __unstable_computeDiff: () => [],
          changed: false,
          changedFromBaseVariant: false,
          hasBaseVariant: false,
          hasUpstreamVersion: false,
          id: `${props.id}-${key}`,
          schemaType: memberSchemaType,
          level: props.level + 1,
          path: [...props.path, { _key: key }],
          presence: [],
          validation: [],
          value: item,
          readOnly: true,
          focused: false,
          focusPath: [],
          groups: [],
          members: [],
        },
      } as unknown as ArrayOfObjectsMember
    })

    return props.renderDefault({
      ...props,
      members,
      onChange: ignoreChange,
      readOnly: true,
      value: references,
    } as ArrayOfObjectsInputProps)
  }

  if (isObjectInput(props)) {
    return props.renderDefault({
      ...props,
      onChange: ignoreChange,
      readOnly: true,
      value: isReferenceValue(parentValue) ? parentValue : undefined,
    })
  }

  return props.renderDefault(props)
}

export const WorkMetaFieldsNote = (props: FieldProps) => {
  const projectType = useFormValue(['projectType'])
  const category = useFormValue(['category'])
  const contribution = useFormValue(['contribution'])
  const hasValues =
    isReferenceValue(projectType) ||
    isReferenceValue(category) ||
    (Array.isArray(contribution) && contribution.some(isReferenceValue))

  return (
    <>
      <Box marginBottom={4}>
        <Text muted size={1}>
          {hasValues ? filledMessage : emptyMessage}
        </Text>
      </Box>
      {props.renderDefault(props)}
    </>
  )
}

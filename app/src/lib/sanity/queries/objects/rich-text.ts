type RichTextObjectQuery<FieldName extends string> =
  `${FieldName}[]{..., markDefs[]{..., _type == "link" => {..., internalLink->{_type, urlPath, title}}}}`

interface RichTextObjectQueryFunction {
  (): RichTextObjectQuery<'text'>
  <const FieldName extends string>(
    fieldName: FieldName,
  ): RichTextObjectQuery<FieldName>
}

// Typed like linkQuery: defineQuery() only infers a query's result type when
// the query itself is a string literal, so this returns the fragment's
// literal type instead. The type must match the string below exactly.
export const richTextObjectQuery = ((fieldName = 'text') =>
  `${fieldName}[]{..., markDefs[]{..., _type == "link" => {..., internalLink->{_type, urlPath, title}}}}`) as RichTextObjectQueryFunction

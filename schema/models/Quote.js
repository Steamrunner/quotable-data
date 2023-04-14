import { types } from '../types.js'

export const properties = {
  _id: types.id,
  content: types.nonEmptyString,
  author: types.nonEmptyString,
  tags: { type: 'array', items: types.title },
}

export const computedProperties = {
  authorSlug: types.slug,
  authorId: types.id,
  length: { type: 'integer' },
  dateAdded: types.nonEmptyString,
  dateModified: types.nonEmptyString,
}

/**
 * Schema for a single `Quote` (source)
 * This is the schema for quotes in the source data (`data/source`). Source
 * data does not include computed properties.
 */
export const QuoteSource = {
  title: 'Quote',
  type: 'object',
  properties,
  required: Object.keys(properties),
  additionalProperties: false,
}

/**
 * Schema for a single `Quote`
 * This is the schema for a single Quote in the generated data files files
 * that are synced with the mongodb database. It includes additional computed
 * properties that not included in the source data.
 */
export const Quote = {
  title: 'Quote',
  type: 'object',
  properties: { ...properties, ...computedProperties },
  required: [...Object.keys(properties), ...Object.keys(computedProperties)],
  additionalProperties: false,
}

export const quotes = {
  type: 'array',
  items: Quote,
}

// Named Exports
// export { QuoteSource }
// export { Quote }
// export { quotes }
// export { properties }
// export { computedProperties }

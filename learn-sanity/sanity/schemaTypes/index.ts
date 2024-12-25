import { type SchemaTypeDefinition } from 'sanity'
import pet from '../blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet],
}
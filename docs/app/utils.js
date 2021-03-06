import _ from 'lodash/fp'
import * as semanticUIReact from 'src'
import { META } from 'src/lib'

export const typeOrder = [
  META.TYPES.ELEMENT,
  META.TYPES.COLLECTION,
  META.TYPES.VIEW,
  META.TYPES.MODULE,
  META.TYPES.ADDON,
]

export const parentComponents = _.flow(
  _.filter(META.isParent),
  _.sortBy('_meta.name')
)(semanticUIReact)

/**
 * Get the Webpack Context for all doc site examples.
 */
export const exampleContext = require.context('docs/app/Examples/', true, /\.js$/)

export const repoURL = 'https://github.com/Semantic-Org/Semantic-UI-React'

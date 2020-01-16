// pure server GraphQL API queries
import {
  EVENT_DETAIL_DATA,
  ADDRESS_DETAIL_DATA,
  GET_EVENTS,
  GET_EVENTS_WITH_DISTANCE,
  GET_EVENT_BY_ID,
} from './events.query.js'
import USERS from './users.query.js'

// mixed server and client GraphQL API queries

// local state - client GraphQL API typeDefs, resolvers, and queries
import {typeDefs} from './localState'
import USER_LOCATION from './userLocation.query.js'
import GET_LOCAL_STATE from './getLocalState.query.js'
import GET_CACHE from './getCache.query.js'

// re-export as modules
export {
  typeDefs,
  EVENT_DETAIL_DATA,
  ADDRESS_DETAIL_DATA,
  GET_EVENTS,
  GET_EVENTS_WITH_DISTANCE,
  GET_EVENT_BY_ID,
  USER_LOCATION,
  USERS,
  GET_CACHE,
  GET_LOCAL_STATE,
}
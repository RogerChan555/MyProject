import fetch from 'node-fetch'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'
import introspectionQueryResultData from '../fragmentTypes.json'
import clientConfig from '../plugins/client-config.js'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: clientConfig.graphqlUrl,
  fetch,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({ fragmentMatcher }),
})

// module.exports = apolloClient;
export default apolloClient

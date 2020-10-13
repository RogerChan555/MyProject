// import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { setContext } from 'apollo-link-context'
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory'
import introspectionQueryResultData from '../fragmentTypes.json'
import clientConfig from './client-config.js'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
})

// make sure to export default
export default () => {
  // HTTP connection to the API
  const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: clientConfig.graphqlUrl,
    fetch,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // Error Handling
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      const Unauthorized = graphQLErrors[0].extensions.category === 'validation'
      if (Unauthorized) {
        // auth.actions.logout()
      }

      return false
    }
    if (networkError) {
      // Handle network error here!
    }
  })

  const middlewareLink = setContext((request, previousContext) => {
    // Get user token
    const token = process.browser ? localStorage.getItem('apollo-token') : null
    return {
      headers: {
        // Make sure you include any existing headers!
        ...previousContext.headers,
        authorization: `Bearer ${token}`
      }
    }
  })

  // Create Apollo Link
  const link = new ApolloLink.from([errorLink, middlewareLink, httpLink])
  // here you can place your middleware. ctx has the context forwarded from Nuxt

  // return the an object with additional apollo-client options
  return {
    link,
    cache: new InMemoryCache({ fragmentMatcher }),
    connectToDevTools: true,
    defaultHttpLink: false // this should do the trick
  }
}

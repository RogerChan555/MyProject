// import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { setContext } from 'apollo-link-context'
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory'
import introspectionQueryResultData from '~/fragmentTypes.json'
import clientConfig from '~/client-config.js'

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
})

// make sure to export default
export default () => {
  // HTTP connection to the API
  const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: clientConfig.graphqlUrl,
    fetch: fetch
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  })

  // Error Handling
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      )
    }
    if (networkError) {
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }
  })

  /**
   * Middleware operation
   * If we have a session token in localStorage, add it to the GraphQL request as a Session header.
   */
  const middlewareLink = setContext((request, previousContext) => {
    /**
     * If session data exist in local storage, set value as session header.
     */
    const session = process.browser ? localStorage.getItem('woo-session') : null
    return {
      headers: {
        // Make sure you include any existing headers!
        ...previousContext.headers,
        'woocommerce-session': `Session ${session}`
      }
    }
  })

  /**
   * Afterware operation.
   *
   * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
   */
  const afterwareLink = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {
      /**
       * Check for session header and update session in local storage accordingly.
       */
      const {
        response: { headers }
      } = operation.getContext()
      if (headers) {
        const session = headers.get('woocommerce-session')

        if (session) {
          const wooSession = process.browser
            ? localStorage.getItem('woo-session')
            : null
          console.log(wooSession)
          // Remove session data if session destroyed.
          if (session === 'false') {
            process.browser ? localStorage.removeItem('woo-session') : null
            // Update session new data if changed.
          } else if (wooSession !== session) {
            process.browser
              ? localStorage.setItem(
                  'woo-session',
                  headers.get('woocommerce-session')
                )
              : null
          }
        }
      }

      return response
    })
  })

  // Create Apollo Link
  const link = new ApolloLink.from([
    errorLink,
    afterwareLink,
    middlewareLink,
    httpLink
  ])

  // here you can place your middleware. ctx has the context forwarded from Nuxt

  // return the an object with additional apollo-client options
  return {
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link,
    cache: new InMemoryCache({ fragmentMatcher }),
    defaultHttpLink: false // this should do the trick
  }
}

import fetch from 'node-fetch'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

// const link = createHttpLink({ uri: '/graphql', fetch: fetch });

const middlewareLink = setContext(() => ({
  headers: {
    // 'X-Api-Key': 'YOUR_API_KEY'
  },
}))

const httpLink = new HttpLink({
  uri: 'http://localhost:4001/graphql',
  fetch: fetch,
})

const link = middlewareLink.concat(httpLink)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

export default client

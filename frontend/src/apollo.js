import Cookies from 'universal-cookie'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink, concat } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'

export const httpLink = new HttpLink({
  uri: '/graphql/',
  credentials: 'same-origin'
})

export const authMiddleware = new ApolloLink((operation, forward) => {
  const cookies = new Cookies()
  operation.setContext({
    headers: {
      'x-csrftoken': cookies.get('csrftoken') || null
    }
  })
  return forward(operation)
})

export const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
})

import gql from 'graphql-tag'

export const AppUserQuery = gql`
  query AppUserQuery {
    user {
      id
      username
      firstName
      lastName
      ledgers {
        edges {
          node {
            id
            name
            isActive
          }
        }
      }
    }
  }
`

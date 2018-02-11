import gql from 'graphql-tag'

export const userQuery = gql`
  query userQuery {
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

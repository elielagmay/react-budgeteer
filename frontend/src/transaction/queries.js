import gql from 'graphql-tag'

export const transactionQuery = gql`
  query transactionQuery (
    $ledgerId: ID!
    $cursor: String!
  ) {
    ledger (ledgerId: $ledgerId) {
      transactions (after: $cursor, first: 50) @connection(key: "transactions") {
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            id
            date
            payee
            description
          }
        }
      }
    }
  }
`

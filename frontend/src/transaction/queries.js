import gql from 'graphql-tag'

export const transactionQuery = gql`
  query transactionQuery (
    $ledgerId: ID!
    $cursor: String!
  ) {
    transactionList (
      ledgerId: $ledgerId,
      after:
      $cursor,
      first: 50
    ) @connection (key: "transactions") {
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
`

import React from 'react'
import { compose, graphql } from 'react-apollo'
import { withStyles } from 'material-ui/styles'
import Transaction from './Transaction'
import { transactionQuery } from './queries'
import { styles } from './styles'

export class TransactionList extends React.Component {
  fetchMore () {
    const { data, match } = this.props
    return data.fetchMore({
      query: transactionQuery,
      notifyOnNetworkStatusChange: true,
      variables: {
        ledgerId: match.params.id,
        cursor: data.ledger.transactions.pageInfo.endCursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.ledger.transactions.edges
        const pageInfo = fetchMoreResult.ledger.transactions.pageInfo
        return newEdges.length ? {
          ledger: {
            __typename: previousResult.ledger.__typename,
            transactions: {
              __typename: previousResult.ledger.transactions.__typename,
              pageInfo,
              edges: [
                ...previousResult.ledger.transactions.edges,
                ...newEdges
              ]
            }
          },
        } : previousResult
      }
    })
  }

  render () {
    const { classes, data } = this.props
    const transactionList = data.ledger
      ? data.ledger.transactions.edges.map(e => e.node)
      : []

    return (
      <div className={classes.root}>
        {transactionList.map(transaction => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
          />
        ))}
        <div className={classes.fetcher}>
          {data.loading ? (
            <span>Loading transactions ...</span>
          ) : (
            <button onClick={this.fetchMore.bind(this)}>Load more</button>
          )}
        </div>
      </div>
    )
  }
}

const options = (props) => ({
  notifyOnNetworkStatusChange: true,
  variables: {
    ledgerId: props.match.params.id,
    cursor: ''
  }
})

export default compose(
  graphql(transactionQuery, {options}),
  withStyles(styles)
)(TransactionList)

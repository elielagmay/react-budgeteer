import React from 'react'
import { compose, graphql } from 'react-apollo'
import injectSheet from 'react-jss'
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
        {data.loading ? (
          <div className={classes.spinner}>Loading transactions ...</div>
        ) : (
          <div className={classes.fetcher}>
            <button onClick={this.fetchMore.bind(this)}>Load more</button>
          </div>
        )}
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
  injectSheet(styles)
)(TransactionList)

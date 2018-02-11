import React from 'react'
import { compose, graphql } from 'react-apollo'
import Transaction from './Transaction'
import TransactionEmpty from './TransactionEmpty'
import TransactionLoadMore from './TransactionLoadMore'
import { TransactionListQuery } from './queries'

export class TransactionList extends React.Component {
  fetchMore () {
    const { data, match } = this.props
    return data.fetchMore({
      query: TransactionListQuery,
      notifyOnNetworkStatusChange: true,
      variables: {
        ledgerId: match.params.id,
        cursor: data.transactionList.pageInfo.endCursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newEdges = fetchMoreResult.transactionList.edges
        const pageInfo = fetchMoreResult.transactionList.pageInfo
        return newEdges.length ? {
          transactionList: {
            __typename: previousResult.transactionList.__typename,
            pageInfo,
            edges: [
              ...previousResult.transactionList.edges,
              ...newEdges
            ]
          },
        } : previousResult
      }
    })
  }

  render () {
    const { data } = this.props
    const transactionList = data.transactionList
      ? data.transactionList.edges.map(e => e.node)
      : []

    const fetchMore = this.fetchMore.bind(this)
    const create = null

    return (
      <div>
        {transactionList.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
        {transactionList.length === 0 ? (
          <TransactionEmpty loading={data.loading} onClick={create} />
        ) : (
          <TransactionLoadMore loading={data.loading} onClick={fetchMore} />
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
  graphql(TransactionListQuery, {options})
)(TransactionList)

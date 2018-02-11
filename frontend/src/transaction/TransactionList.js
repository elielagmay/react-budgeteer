import React from 'react'
import { compose, graphql } from 'react-apollo'
import { Button, CircularProgress } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import Transaction from './Transaction'
import { transactionQuery } from './queries'

export const styles = (theme) => ({
  root: {
    position: 'relative'
  },
  fetchMore: {
    paddingTop: `${theme.spacing.unit * 3}px`,
    position: 'relative',
    textAlign: 'center'
  },
  fetchInitProgress: {
    position: 'absolute',
    top: 'calc(50vh - 96px)',
    left: 'calc(50% - 32px)',
  },
  fetchMoreProgress: {
    position: 'absolute',
    top: '50%',
    left: 'calc(50% - 12px)',
  }
})

export class TransactionList extends React.Component {
  fetchMore () {
    const { data, match } = this.props
    return data.fetchMore({
      query: transactionQuery,
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
    const { classes, data } = this.props
    const transactionList = data.transactionList
      ? data.transactionList.edges.map(e => e.node)
      : []

    return (
      <div className={classes.root}>
        {transactionList.map(transaction => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
          />
        ))}
        {transactionList.length === 0 ? (
          <CircularProgress size={64} className={classes.fetchInitProgress} />
        ) : (
          <div className={classes.fetchMore}>
            <Button
              onClick={this.fetchMore.bind(this)}
              disabled={data.loading}
            >
              Load more
            </Button>
            {!data.loading ? null : (
              <CircularProgress size={24} className={classes.fetchMoreProgress} />
            )}
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
  withStyles(styles)
)(TransactionList)

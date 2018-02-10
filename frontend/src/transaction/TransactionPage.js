import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import Transaction from './Transaction'
import { initialize } from './actions'
import { getTransactionList } from './reducers'
import { styles } from './styles'

class TransactionPage extends React.Component {
  componentWillMount () {
    this.props.initialize()
  }

  render () {
    const { classes, transactionList } = this.props
    return (
      <div className={classes.page}>
        <div className={classes.head}></div>
        <div className={classes.list}>
          {transactionList.map(transaction => (
            <Transaction
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  transactionList: getTransactionList(state)
})

const mapDispatchToProps = {
  initialize
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectSheet(styles)
)(TransactionPage)
export { TransactionPage }

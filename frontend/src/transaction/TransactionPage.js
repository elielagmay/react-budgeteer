import React from 'react'
import injectSheet from 'react-jss'
import Transaction from './Transaction'
import { styles } from './styles'

class TransactionPage extends React.Component {
  componentWillMount () {
    // todo - fetch transactions
  }

  render () {
    return (
      <div className={this.props.classes.page}>
        <Transaction />
        <Transaction />
        <Transaction />
      </div>
    )
  }
}

export default injectSheet(styles)(TransactionPage)
export { TransactionPage }

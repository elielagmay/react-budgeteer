import moment from 'moment-timezone'
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { expandTransaction, collapseTransaction } from './actions'
import { getExpanded } from './reducers'
import { styles } from './styles'

export class Transaction extends React.Component {
  expand () {
    this.props.expandTransaction(this.props.transaction.id)
  }

  collapse () {
    this.props.collapseTransaction(this.props.transaction.id)
  }

  render () {
    const { classes, transaction, isExpanded } = this.props
    const date = moment.tz(transaction.date, moment.ISO_8601, 'UTC')

    return (
      <div
        className={classes.transaction + (isExpanded ? ' isExpanded' : '')}
        onClick={isExpanded ? null : this.expand.bind(this)}
        aria-expanded={isExpanded}
        role='button'
        tabindex='0'
      >
        <div className={classes.fields}>
          <input
            className={classes.input}
            defaultValue={date.format('DD MMM YYYY')}
            readOnly={!isExpanded}
          />
          <input
            className={classes.input}
            defaultValue={transaction.payee}
            readOnly={!isExpanded}
            placeholder='Payee'
          />
          <input
            className={classes.input}
            defaultValue={transaction.description}
            readOnly={!isExpanded}
            placeholder='Description'
          />
          <i
            className='material-icons'
            onClick={isExpanded ? this.collapse.bind(this) : null}
          >
            {isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          </i>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  isExpanded: getExpanded(state, props.transaction.id)
})

const mapDispatchToProps = {
  expandTransaction,
  collapseTransaction
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectSheet(styles)
)(Transaction)

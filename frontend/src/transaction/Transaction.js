import moment from 'moment-timezone'
import React from 'react'
import injectSheet from 'react-jss'
import Entry from './Entry'
import { styles } from './styles'

class Transaction extends React.Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isExpanded: false
    }
  }

  toggle (isExpanded) {
    return (event) => {
      event.stopPropagation()
      this.setState({isExpanded})
    }
  }

  render () {
    const { transaction, classes } = this.props
    const { isExpanded } = this.state
    const date = moment.tz(transaction.date, moment.ISO_8601, 'UTC')

    return (
      <div
        className={classes.transaction + (isExpanded ? ' isExpanded' : '')}
        onClick={this.toggle(true)}
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
            onClick={isExpanded ? this.toggle(false) : null}
          >
            {isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          </i>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Transaction)
export { Transaction }

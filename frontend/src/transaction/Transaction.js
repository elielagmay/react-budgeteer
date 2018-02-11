import moment from 'moment-timezone'
import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Typography,
  Button
} from 'material-ui'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import TextField from '../ui/TextField'
import { expandTransaction, collapseTransaction } from './actions'
import { getExpanded } from './reducers'

export const styles = (theme) => ({
  fields: {
    alignItems: 'center',
    display: 'flex',
    width: '100%'
  },
  date: {
    color: theme.palette.text.secondary,
    flex: '0 0 auto',
    marginRight: `${theme.spacing.unit * 2}px`,
    whiteSpace: 'nowrap',
    width: '120px'
  },
  payee: {
    flex: '0 0 33%',
    marginRight: `${theme.spacing.unit * 2}px`,
    maxWidth: '360px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  description: {
    color: theme.palette.text.secondary,
    flex: '1 1 auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
})

export class Transaction extends React.Component {
  onToggle (event, expanded) {
    if (expanded) {
      this.props.expandTransaction(this.props.transaction.id)
    } else {
      this.props.collapseTransaction(this.props.transaction.id)
    }
  }

  onCollapse () {
    this.props.collapseTransaction(this.props.transaction.id)
  }

  render () {
    const { classes, transaction, expanded } = this.props
    const date = moment.tz(transaction.date, moment.ISO_8601, 'UTC')

    const icon = <ExpandMoreIcon />
    const dateId = `txn-date-${transaction.id}`
    const payeeId = `txn-payee-${transaction.id}`
    const descriptionId = `txn-description-${transaction.id}`

    return (
      <ExpansionPanel expanded={expanded} onChange={this.onToggle.bind(this)}>
        <ExpansionPanelSummary expandIcon={icon}>
          {expanded ? (
            <Typography variant='body2'>
              Edit Transaction
            </Typography>
          ) : (
            <div className={classes.fields}>
              <Typography className={classes.date}>
                {date.format('DD MMM YYYY')}
              </Typography>
              <Typography className={classes.payee}>
                {transaction.payee}
              </Typography>
              <Typography className={classes.description}>
                {transaction.description}
              </Typography>
            </div>
          )}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.fields}>
            <div className={classes.date}>
              <TextField
                type='date'
                label='Date'
                id={dateId}
                defaultValue={date.format('YYYY-MM-DD')}
                fullWidth
                required
              />
            </div>
            <div className={classes.payee}>
              <TextField
                type='text'
                label='Payee'
                id={payeeId}
                defaultValue={transaction.payee}
                fullWidth
              />
            </div>
            <div className={classes.description}>
              <TextField
                type='text'
                label='Description'
                id={descriptionId}
                defaultValue={transaction.description}
                fullWidth
              />
            </div>
          </div>
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <Button size='small' onClick={this.onCollapse.bind(this)}>
            Cancel
          </Button>
          <Button size='small' color='primary'>
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expanded: getExpanded(state, props.transaction.id)
})

const mapDispatchToProps = {
  expandTransaction,
  collapseTransaction
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Transaction)

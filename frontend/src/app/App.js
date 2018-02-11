import React from 'react'
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom'
import { compose, graphql } from 'react-apollo'
import { Reboot, withStyles } from 'material-ui'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import BudgetPage from '../budget/BudgetPage'
import TransactionList from '../transaction/TransactionList'
import NotFoundPage from '../notFound/NotFoundPage'
import { AppUserQuery } from './queries'

export const styles = (theme) => ({
  '@global': {
    body: {
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize
    }
  },
  root: {
    marginLeft: '320px',
    marginTop: '64px',
    padding: '24px'
  }
})

export const App = ({ classes, data }) => {
  if (data.loading) {
    return null // todo - add loading indicator
  }

  const user = data.user
  const ledger = user.ledgers.edges.length > 0
    ? user.ledgers.edges[0].node
    : null

  if (!user || !ledger) {
    return null
  }

  return (
    <BrowserRouter>
      <div>
        <Reboot />
        <Navbar user={data.user} />
        <Sidebar ledger={ledger} />
        <div className={classes.root}>
          <Switch>
            <Route path='/ledger/:id/budgets' component={BudgetPage} />
            <Route path='/ledger/:id/transactions' component={TransactionList} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default compose(
  graphql(AppUserQuery),
  withStyles(styles)
)(App)

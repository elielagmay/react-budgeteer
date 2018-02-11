import React from 'react'
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom'
import { compose, graphql } from 'react-apollo'
import injectSheet from 'react-jss'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import BudgetPage from '../budget/BudgetPage'
import TransactionPage from '../transaction/TransactionPage'
import NotFoundPage from '../notFound/NotFoundPage'
import { userQuery } from './queries'
import { styles } from './styles'

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
      <div className={classes.root}>
        <div className={classes.head}>
          <Navbar user={data.user} />
        </div>
        <div className={classes.side}>
          <Sidebar ledger={ledger} />
        </div>
        <div className={classes.main}>
          <Switch>
            <Route path='/settings' component={NotFoundPage} />
            <Route path='/ledgers' component={NotFoundPage} />
            <Route path='/ledger/:id/budgets' component={BudgetPage} />
            <Route path='/ledger/:id/transactions' component={TransactionPage} />
            <Route path='/ledger/:id/accounts' component={NotFoundPage} />
            <Route path='/ledger/:id/reports' component={NotFoundPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default compose(
  graphql(userQuery),
  injectSheet(styles)
)(App)

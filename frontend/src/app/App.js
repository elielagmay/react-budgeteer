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

class App extends React.Component {
  render () {
    const { classes, data } = this.props

    if (data.loading) {
      return null // todo - add loading indicator
    }

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <div className={classes.head}>
            <Navbar user={data.user} />
          </div>
          <div className={classes.side}>
            <Sidebar />
          </div>
          <div className={classes.main}>
            <Switch>
              <Redirect exact from='/' to='/budgets' />
              <Route path='/budgets' component={BudgetPage} />
              <Route path='/transactions' component={TransactionPage} />
              <Route path='/reports' component={NotFoundPage} />
              <Route path='/account/:id' component={NotFoundPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default compose(
  graphql(userQuery),
  injectSheet(styles)
)(App)
export { App }

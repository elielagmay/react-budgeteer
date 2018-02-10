import React from 'react'
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom'
import injectSheet from 'react-jss'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import BudgetPage from '../budget/BudgetPage'
import TransactionPage from '../transaction/TransactionPage'
import NotFoundPage from '../notFound/NotFoundPage'
import { styles } from './styles'

class App extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <div className={classes.head}>
            <Navbar />
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

export default injectSheet(styles)(App)
export { App }

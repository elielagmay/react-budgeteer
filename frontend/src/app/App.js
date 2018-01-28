import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import injectSheet from 'react-jss'
import Sidebar from '../sidebar/Sidebar'
import NotFoundPage from '../notFound/NotFoundPage'
import { styles } from './styles'

class App extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <BrowserRouter>
        <div className={classes.app}>
          <div className={classes.side}>
            <Sidebar />
          </div>
          <div className={classes.main}>
            <Switch>
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

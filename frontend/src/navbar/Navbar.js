import React from 'react'
import injectSheet from 'react-jss'
import { styles } from './styles'

class Navbar extends React.Component {
  render () {
    const { classes, user } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.logo}>Budgeteer</div>
        <div className={classes.user}>
          Hello {user.firstName}!
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Navbar)
export { Navbar }

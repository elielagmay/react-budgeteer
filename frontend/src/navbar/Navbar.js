import React from 'react'
import injectSheet from 'react-jss'
import { styles } from './styles'

class Navbar extends React.Component {
  componentWillMount () {
    // get current user
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <span className={classes.logo}>Budgeteer</span>
      </div>
    )
  }
}

export default injectSheet(styles)(Navbar)
export { Navbar }

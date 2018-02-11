import React from 'react'
import { AppBar, Toolbar, Typography } from 'material-ui'
import { withStyles  } from 'material-ui/styles'
import { styles } from './styles'

class Navbar extends React.Component {
  render () {
    const { classes, user } = this.props
    return (
      <AppBar position='static' color='primary' className={classes.root}>
        <Toolbar>
          <Typography variant='title' color='inherit' className={classes.logo}>
            Budgeteer
          </Typography>
          <Typography variant='subheading' color='inherit'>
            Hello {user.firstName}!
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Navbar)
export { Navbar }

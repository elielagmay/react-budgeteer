import React from 'react'
import { AppBar, Toolbar, Typography } from 'material-ui'
import { withStyles  } from 'material-ui/styles'

export const styles = {
  logo: {
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginRight: 'auto'
  }
}

export class Navbar extends React.Component {
  render () {
    const { classes, user } = this.props
    return (
      <AppBar position='fixed' color='secondary'>
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

import React from 'react'
import { Typography, Button, CircularProgress } from 'material-ui'
import { withStyles } from 'material-ui/styles'

export const styles = (theme) => ({
  root: {
    display: 'flex',
    height: 'calc(100vh - 128px)'
  },
  empty: {
    margin: 'auto',
    textAlign: 'center'
  },
  emptyText: {
    color: theme.palette.text.secondary,
    marginBottom: `${theme.spacing.unit * 3}px`
  },
  progress: {
    margin: 'auto'
  }
})

export const TransactionEmpty = ({ classes, loading, onClick }) => (
  <div className={classes.root}>
    {loading ? (
      <CircularProgress size={64} className={classes.progress} />
    ) : (
      <div className={classes.empty}>
        <Typography variant='subheading' className={classes.emptyText}>
          You don't have any transactions yet.
        </Typography>
        <Button variant='raised' color='primary' onClick={onClick}>
          Get Started
        </Button>
      </div>
    )}
  </div>
)

export default withStyles(styles)(TransactionEmpty)

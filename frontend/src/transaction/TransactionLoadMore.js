import React from 'react'
import { Button, CircularProgress } from 'material-ui'
import { withStyles } from 'material-ui/styles'

export const styles = (theme) => ({
  root: {
    paddingTop: `${theme.spacing.unit * 3}px`,
    position: 'relative',
    textAlign: 'center'
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: 'calc(50% - 12px)'
  }
})

export class TransactionLoadMore extends React.Component {
  render () {
    const { classes, loading, onClick } = this.props

    return (
      <div className={classes.root}>
        <Button onClick={onClick} disabled={loading}>
          Load more
        </Button>
        {!loading ? null : (
          <CircularProgress size={24} className={classes.progress} />
        )}
      </div>
    )
  }
}

export default withStyles(styles)(TransactionLoadMore)

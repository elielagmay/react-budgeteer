import React from 'react'
import { Typography, Button, CircularProgress } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import classnames from 'classnames'

export const styles = (theme) => ({
  root: {
    display: 'flex',
    minHeight: 'calc(100vh - 128px)'
  },
  '@keyframes txnMockShimmer': {
    '0%': {
      backgroundPosition: '0 0'
    },
    '100%': {
      backgroundPosition: `calc(100vw - ${theme.spacing.unit * 46}px) 0`
    }
  },
  mockWrapper: {
    boxShadow: [
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2)',
      '0px 1px 1px 0px rgba(0, 0, 0, 0.14)',
      '0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
    ].join(', '),
    width: '100%'
  },
  mockItem: {
    background: theme.palette.common.white,
    padding: `${theme.spacing.unit * 1.5}px ${theme.spacing.unit * 3}px`,
    width: '100%',
    '&:not(:last-child)': {
      borderBottom: `1px ${theme.palette.divider} solid`
    }
  },
  mockBackground: {
    background: theme.palette.grey[200],
    height: `${theme.spacing.unit * 3}px`,
    position: 'relative',
  },
  mockAnimate: {
    animationDuration: '1.2s',
    animationFillMode: 'forwards',
    animationIterationCount: 'infinite',
    animationName: 'txnMockShimmer',
    animationTimingFunction: 'linear',
    background: [
      'linear-gradient(to right',
      `${theme.palette.grey[200]} 0%`,
      `${theme.palette.grey[300]} 10%`,
      `${theme.palette.grey[200]} 20%)`
    ].join(', '),
    backgroundPosition: '0 0',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    fallbacks: [
      {background: theme.palette.grey[200]}
    ]
  },
  mockMask: {
    background: theme.palette.common.white,
    height: '100%',
    position: 'absolute',
    top: '0'
  },
  mockMask1: {
    left: '120px',
    width: '16px'
  },
  mockMask2: {
    left: '488px',
    width: '16px'
  },
  mockMask3: {
    right: '24px',
    width: '16px'
  },
  emptyWrapper: {
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
      <div className={classes.mockWrapper}>
        {[...Array(20).keys()].map(i => (
          <div key={i} className={classes.mockItem}>
            <div className={classes.mockBackground}>
              <div className={classes.mockAnimate}>
                <div className={classnames([classes.mockMask, classes.mockMask1])} />
                <div className={classnames([classes.mockMask, classes.mockMask2])} />
                <div className={classnames([classes.mockMask, classes.mockMask3])} />
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className={classes.emptyWrapper}>
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

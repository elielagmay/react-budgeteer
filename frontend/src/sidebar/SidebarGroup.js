import React from 'react'
import { withStyles } from 'material-ui/styles'

export const styles = (theme) => ({
  root: {
    padding: '8px 0',
    '&:not(:last-child)': {
      borderBottom: `1px ${theme.palette.divider} solid`
    }
  },
  title: {
    color: theme.palette.text.secondary,
    cursor: 'default',
    fontWeight: '500',
    height: '48px',
    lineHeight: '48px',
    padding: '0 16px',
    userSelect: 'none'
  }
})

const SidebarGroup = ({ classes, title, children }) => (
  <div className={classes.root}>
    {!title ? null : <div className={classes.title}>{title}</div>}
    {children}
  </div>
)

export default withStyles(styles)(SidebarGroup)
export { SidebarGroup }

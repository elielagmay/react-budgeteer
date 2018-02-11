import React from 'react'
import { withStyles } from 'material-ui/styles'
import { styles } from './styles'

const SidebarGroup = ({ classes, title, children }) => (
  <div className={classes.group}>
    {!title ? null : <div className={classes.groupTitle}>{title}</div>}
    {children}
  </div>
)

export default withStyles(styles)(SidebarGroup)
export { SidebarGroup }

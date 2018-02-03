import React from 'react'
import injectSheet from 'react-jss'
import { styles } from './styles'

const SidebarGroup = ({ classes, title, children }) => (
  <div className={classes.group}>
    {!title ? null : <div className={classes.groupTitle}>{title}</div>}
    {children}
  </div>
)

export default injectSheet(styles)(SidebarGroup)
export { SidebarGroup }

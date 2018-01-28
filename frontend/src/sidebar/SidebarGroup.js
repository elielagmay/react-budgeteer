import React from 'react'
import injectSheet from 'react-jss'
import { getAccounts } from './reducers'
import { styles } from './styles'

class SidebarGroup extends React.Component {
  render () {
    const { classes, title, children } = this.props

    return (
      <div className={classes.group}>
        {!title ? null : <div className={classes.groupTitle}>{title}</div>}
        {children}
      </div>
    )
  }
}

export default injectSheet(styles)(SidebarGroup)
export { SidebarGroup }

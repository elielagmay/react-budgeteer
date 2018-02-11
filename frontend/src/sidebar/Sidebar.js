import React from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import SidebarGroup from './SidebarGroup'
import { styles } from './styles'

export const SIDEBAR_LINKS = [
  {url: 'budgets', icon: 'flag', title: 'Budgets'},
  {url: 'transactions', icon: 'compare_arrows', title: 'Transactions'},
  {url: 'accounts', icon: 'account_balance', title: 'Accounts'},
  {url: 'reports', icon: 'pie_chart', title: 'Reports'}
]

export const Sidebar = ({ classes, ledger }) => (
  <div className={classes.root}>
    <SidebarGroup>
      {SIDEBAR_LINKS.map(link => (
        <NavLink
          key={link.url}
          to={'/ledger/' + ledger.id + '/' + link.url}
          className={classes.link}
          activeClassName='isActive'
          exact={true}
        >
          <i className='material-icons'>{link.icon}</i>
          <span>{link.title}</span>
        </NavLink>
      ))}
    </SidebarGroup>
  </div>
)

export default withRouter(withStyles(styles)(Sidebar))

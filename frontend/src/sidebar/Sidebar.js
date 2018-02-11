import React from 'react'
import { withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import SidebarGroup from './SidebarGroup'

export const SIDEBAR_GROUPS = [{
  id: 1,
  links: [
    {url: 'budgets', icon: 'flag', title: 'Budgets'},
    {url: 'transactions', icon: 'compare_arrows', title: 'Transactions'},
    {url: 'reports', icon: 'pie_chart', title: 'Reports'}
  ]
}, {
  id: 2,
  links: [
    {url: 'accounts', icon: 'account_balance', title: 'Accounts'},
    {url: 'commodities', icon: 'attach_money', title: 'Commodities'}
  ]
}, {
  id: 3,
  links: [
    {url: 'settings', icon: 'settings', title: 'Settings'}
  ]
}]

export const styles = (theme) => ({
  root: {
    position: 'fixed',
    top: '80px',
    width: '280px'
  },
  link: {
    color: theme.palette.text.primary,
    cursor: 'pointer',
    display: 'block',
    fontWeight: '500',
    height: '48px',
    lineHeight: '48px',
    overflow: 'hidden',
    padding: '0 16px',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    transition: 'all 150ms ease-in-out',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    '&:hover': {
      background: theme.palette.grey['200']
    },
    '&.isActive': {
      color: theme.palette.primary.main
    },
    '& .material-icons': {
      color: theme.palette.text.secondary,
      marginRight: '36px',
      transition: 'all 150ms ease-in-out',
      verticalAlign: 'middle'
    },
    '&.isActive .material-icons': {
      color: theme.palette.primary.main
    }
  }
})

export const Sidebar = ({ classes, ledger }) => (
  <div className={classes.root}>
    {SIDEBAR_GROUPS.map(group => (
      <SidebarGroup key={group.id} title={group.title}>
        {group.links.map(link => (
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
    ))}
  </div>
)

export default withRouter(withStyles(styles)(Sidebar))

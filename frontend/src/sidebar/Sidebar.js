import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'
import SidebarGroup from './SidebarGroup'
import { getPages, getAccounts } from './reducers'
import { initialize } from './actions'
import { styles } from './styles'

class Sidebar extends React.Component {
  componentWillMount () {
    this.props.initialize()
  }

  render () {
    const { pages, accounts, classes } = this.props

    return (
      <div className={classes.sidebar}>
        <SidebarGroup>
          {pages.map(page => (
            <NavLink
              key={page.url}
              to={'/' + page.url}
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              {page.title}
            </NavLink>
          ))}
        </SidebarGroup>
        <SidebarGroup title='Accounts'>
          {accounts.map(account => (
            <NavLink
              key={account.id}
              to={'/account/' + account.id}
              className={classes.sublink}
              activeClassName={classes.activeSublink}
            >
              {account.title}
            </NavLink>
          ))}
        </SidebarGroup>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pages: getPages(state),
  accounts: getAccounts(state)
})

const mapDispatchToProps = {
  initialize
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectSheet(styles)
)(Sidebar)
export { Sidebar }

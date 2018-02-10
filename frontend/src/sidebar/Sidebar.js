import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
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
      <div className={classes.root}>
        <SidebarGroup>
          {pages.map(page => (
            <NavLink
              key={page.url}
              to={'/' + page.url}
              className={classes.link}
              activeClassName='isActive'
              exact={true}
            >
              <i className='material-icons'>{page.icon}</i>
              <span>{page.title}</span>
            </NavLink>
          ))}
        </SidebarGroup>
        <SidebarGroup title='Accounts'>
          {accounts.map(account => (
            <NavLink
              key={account.id}
              to={'/account/' + account.id}
              className={classes.link}
              activeClassName='isActive'
              exact={true}
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
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  injectSheet(styles)
)(Sidebar)
export { Sidebar }

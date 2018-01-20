import React from 'react'
import { connect } from 'react-redux'
import { initialize } from './actions'
import { getMessage } from './reducers'

class App extends React.Component {
  componentDidMount () {
    setTimeout(this.props.initialize, 2000)
  }

  render () {
    return <h1>{this.props.message}</h1>
  }
}

const mapStateToProps = (state) => ({
  message: getMessage(state)
})

const mapDispatchToProps = {
  initialize
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
export { App }

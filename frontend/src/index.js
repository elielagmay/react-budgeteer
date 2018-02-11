import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { MuiThemeProvider } from 'material-ui/styles'
import { client } from './apollo'
import { store } from './store'
import { theme } from './theme'
import App from './app/App'

const node = (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ApolloProvider>
  </Provider>
)

ReactDOM.render(node, document.getElementById('root'))

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { client } from './apollo'
import { store } from './store'
import App from './app/App'

const node = (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
)

ReactDOM.render(node, document.getElementById('root'))

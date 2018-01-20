import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './app/App'

const node = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(node, document.getElementById('root'))

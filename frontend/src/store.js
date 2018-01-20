import { createStore } from 'redux'
import appReducer from './app/reducers'

export const store = createStore(appReducer)

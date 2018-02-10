import { combineReducers } from 'redux'
import sidebar from '../sidebar/reducers'
import transaction from '../transaction/reducers'

export default combineReducers({
  sidebar,
  transaction
})

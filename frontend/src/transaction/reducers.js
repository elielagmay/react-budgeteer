import moment from 'moment-timezone'
import * as actions from './actions'

export const initialState = {
  expanded: {}
}

export default (state = initialState, action) => {
  const mapping = {
    [actions.TXN_LIST_EXPAND]: (payload) => ({
      ...state,
      expanded: {
        [payload.transactionId]: true
      }
    }),

    [actions.TXN_LIST_COLLAPSE]: (payload) => ({
      ...state,
      expanded: {
        [payload.transactionId]: false
      }
    })
  }

  const reducerFunc = mapping[action.type]
  return reducerFunc ? reducerFunc(action.payload) : state
}

export const getRootState = (state) => state.transaction

export const getExpanded = (state, id) => getRootState(state).expanded[id]

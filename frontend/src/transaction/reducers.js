import moment from 'moment-timezone'
import * as actions from './actions'

export const initialState = {
  transactionList: []
}

export default (state = initialState, action) => {
  const mapping = {
    [actions.TRANSACTION_INIT]: () => ({
      ...state,
      transactionList: [...Array(50).keys()].map(x => ({
        id: x,
        date: moment().subtract(x * x, 'day'),
        payee: 'Payee ' + x,
        description: (x % 7) ? 'Description ' + x : '',
        entries: []
      }))
    })
  }

  const reducerFunc = mapping[action.type]
  return reducerFunc ? reducerFunc(action.payload) : state
}

export const getRootState = (state) => state.transaction

export const getTransactionList = (state) => getRootState(state).transactionList

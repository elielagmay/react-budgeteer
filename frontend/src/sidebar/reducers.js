import * as actions from './actions'

export const initialState = {
  pages: [],
  accounts: []
}

export default (state = initialState, action) => {
  const mapping = {
    [actions.SIDEBAR_INIT]: () => ({
      ...state,
      pages: [
        {url: 'budgets', icon: 'mail', title: 'Budgets'},
        {url: 'transactions', icon: 'inbox', title: 'Transactions'},
        {url: 'reports', icon: 'pie_chart', title: 'Reports'}
      ],
      accounts: [
        {id: 1, title: 'Cash'},
        {id: 2, title: 'Checking Account'},
        {id: 3, title: 'Savings Account'},
        {id: 4, title: 'Credit Card'},
        {id: 5, title: 'Retirement'},
        {id: 6, title: 'Brokerage'},
      ]
    })
  }

  const reducerFunc = mapping[action.type]
  return reducerFunc ? reducerFunc(action.payload) : state
}

export const getRootState = (state) => state.sidebar

export const getPages = (state) => getRootState(state).pages
export const getAccounts = (state) => getRootState(state).accounts

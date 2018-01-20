import { APP_INIT } from './actions'

export const initialState = {
  message: 'Loading...'
}

export default (state = initialState, action) => {
  const mapping = {
    [APP_INIT]: () => ({
      ...state,
      message: 'Hello World!'
    })
  }

  const reducerFunc = mapping[action.type]
  return reducerFunc ? reducerFunc(action.payload) : state
}

export const getRootState = (state) => state
export const getMessage = (state) => getRootState(state).message

export const TXN_LIST_EXPAND = 'TXN_LIST_EXPAND'
export const TXN_LIST_COLLAPSE = 'TXN_LIST_COLLAPSE'

export const expandTransaction = (transactionId) => ({
  type: TXN_LIST_EXPAND,
  payload: {
    transactionId
  }
})

export const collapseTransaction = (transactionId) => ({
  type: TXN_LIST_COLLAPSE,
  payload: {
    transactionId
  }
})

export const border = '1px #CCCCCC solid'

export const styles = {
  page: {
    height: '100vh',
    padding: '24px'
  },
  transaction: {
    borderTop: border,
    marginBottom: '12px'
  },
  transactionFields: {
    borderBottom: border,
    display: 'flex'
  },
  transactionField: {
    backgroundColor: '#FFFFFF',
    borderRight: border,
    flex: '0 0 auto',
    '&:disabled': {
      backgroundColor: '#FFFFFF'
    },
    '&:focus': {
      background: '#E0F7FA'
    }
  },
  transactionDate: {
    extend: 'transactionField',
    borderLeft: border,
    width: 120
  },
  transactionPayee: {
    extend: 'transactionField',
    width: 640
  },
  transactionDescription: {
    extend: 'transactionField',
    flex: '1 1 auto'
  },
  transactionEntries: {
    borderLeft: border,
    marginLeft: 119
  },
  entryFields: {
    extend: 'transactionFields'
  },
  entryField: {
    extend: 'transactionField'
  },
  entryAccount: {
    extend: 'entryField',
    width: 240
  },
  entryAmount: {
    extend: 'entryField',
    width: 160
  },
  entryCommodity: {
    extend: 'entryField',
    width: 80
  },
  entryPrice: {
    extend: 'entryField',
    width: 160
  },
  entryDescription: {
    extend: 'entryField',
    flex: '1 1 auto'
  }
}

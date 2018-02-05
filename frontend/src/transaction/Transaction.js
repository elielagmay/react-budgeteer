import React from 'react'
import injectSheet from 'react-jss'
import Entry from './Entry'
import { styles } from './styles'

const Transaction = ({ classes }) => (
  <div className={classes.transaction}>
    <div className={classes.transactionFields}>
      <input
        placeholder='date'
        className={classes.transactionDate}
        disabled={true}
      />
      <input
        placeholder='payee'
        className={classes.transactionPayee}
        disabled={true}
      />
      <input
        placeholder='description'
        className={classes.transactionDescription}
        disabled={true}
      />
    </div>
    <div className={classes.transactionEntries}>
      <Entry />
      <Entry />
    </div>
  </div>
)

export default injectSheet(styles)(Transaction)
export { Transaction }

import React from 'react'
import injectSheet from 'react-jss'
import { styles } from './styles'

const Entry = ({ classes }) => (
  <div className={classes.entryFields}>
    <input
      placeholder='account'
      className={classes.entryAccount}
      disabled={true}
    />
    <input
      placeholder='amount'
      className={classes.entryAmount}
      disabled={true}
    />
    <input
      placeholder='commodity'
      className={classes.entryCommodity}
      disabled={true}
    />
    <input
      placeholder='conversion'
      className={classes.entryPrice}
      disabled={true}
    />
    <input
      placeholder='description'
      className={classes.entryDescription}
      disabled={true}
    />
  </div>
)

export default injectSheet(styles)(Entry)
export { Entry }

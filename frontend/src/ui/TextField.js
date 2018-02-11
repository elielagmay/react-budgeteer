import React from 'react'
import { TextField } from 'material-ui'
import { withStyles } from 'material-ui/styles'

export const styles = (theme) => ({
  native: {
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none'
    }
  },
  input: {
    fontSize: `${theme.typography.fontSize}px`
  },
  label: {
    fontSize: `${theme.typography.fontSize}px`
  }
})

export const CustomTextField = ({ classes, ...otherProps }) => (
  <TextField
    inputProps={{className: classes.native}}
    InputProps={{className: classes.input}}
    InputLabelProps={{className: classes.label, shrink: true}}
    {...otherProps}
  />
)

export default withStyles(styles)(CustomTextField)

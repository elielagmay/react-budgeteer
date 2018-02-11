import { createMuiTheme } from 'material-ui/styles'
import primary from 'material-ui/colors/cyan'
import secondary from 'material-ui/colors/pink'
import error from 'material-ui/colors/red'

export const theme = createMuiTheme({
  palette: {
    primary,
    secondary,
    error
  },
  spacing: {
    unit: 8
  }
})

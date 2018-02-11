import { createMuiTheme } from 'material-ui/styles'
import primary from 'material-ui/colors/cyan'
import secondary from 'material-ui/colors/blueGrey'
import error from 'material-ui/colors/red'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary[500],
      dark: primary[700],
      light: primary[300],
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: secondary[700],
      dark: secondary[900],
      light: secondary[500],
      contrastText: '#FFFFFF'
    },
    error
  },
  spacing: {
    unit: 8
  }
})

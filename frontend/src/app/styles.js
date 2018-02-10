export const styles = {
  '@global': {
    html: {
      padding: '0',
      margin: '0'
    },
    body: {
      background: '#FAFAFA',
      fontFamily: 'Roboto',
      fontSize: '14px',
      lineHeight: '16px',
      margin: '0',
      padding: '0',
    },
    '*': {
      boxSizing: 'border-box'
    },
    input: {
      fontFamily: 'Roboto',
      fontSize: '14px',
      height: '24px',
      lineHeight: '24px',
      outline: '0',
      width: '100%'
    }
  },
  app: {
    display: 'flex'
  },
  side: {
    flex: '0 0 280px',
    height: '100vh',
    width: '280px'
  },
  main: {
    flex: '1 1 auto',
    height: '100vh',
    overflow: 'auto'
  }
}

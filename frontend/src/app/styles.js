export const styles = {
  '@global': {
    body: {
      background: '#FAFAFA',
      fontFamily: 'Roboto',
      fontSize: '14px',
      lineHeight: '16px'
    }
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100vh'
  },
  head: {
    flex: '0 0 100vw',
    height: '64px'
  },
  side: {
    flex: '0 0 280px',
    height: 'calc(100vh - 64px)',
    width: '280px'
  },
  main: {
    flex: '1 1 auto',
    height: 'calc(100vh - 64px)',
    overflow: 'auto'
  }
}

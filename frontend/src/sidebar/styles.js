export const styles = {
  sidebar: {
    background: '#37474F',
    fontSize: '0.875em',
    height: '100vh',
    overflow: 'hidden',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      background: '#37474F',
      height: '12px',
      width: '12px'
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#B0BEC5',
      border: '3px #37474F solid',
      borderRadius: '6px'
    }
  },
  group: {
    padding: '16px 0',
    '&:not(:first-child)': {
      borderTop: '1px #455A64 solid'
    },
    '&:not(:last-child)': {
      borderBottom: '1px #263238 solid'
    }
  },
  groupTitle: {
    color: '#ECEFF1',
    cursor: 'default',
    fontSize: '0.8125em',
    fontWeight: 500,
    letterSpacing: '0.8px',
    padding: '8px 24px',
    textTransform: 'uppercase',
    userSelect: 'none'
  },
  baseLink: {
    color: '#B0BEC5',
    cursor: 'pointer',
    display: 'block',
    padding: '8px 24px',
    textDecoration: 'none',
    transition: 'all 0.12s ease-in-out',
    userSelect: 'none',
    '&:hover': {
      color: '#ECEFF1'
    }
  },
  link: {
    extend: 'baseLink',
    fontWeight: 500,
    letterSpacing: '0.5px',
    textTransform: 'uppercase'
  },
  activeLink: {
    extend: 'link',
    color: '#ECEFF1',
    background: '#263238'
  },
  sublink: {
    extend: 'baseLink',
    padding: '6px 24px'
  },
  activeSublink: {
    extend: 'sublink',
    color: '#ECEFF1',
    background: '#263238'
  }
}

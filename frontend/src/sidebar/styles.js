const border = '1px #E0E0E0 solid'

export const styles = {
  root: {
    height: '100%',
    overflow: 'hidden',
    overflowY: 'auto'
  },
  group: {
    padding: '8px 0',
    '&:not(:last-child)': {
      borderBottom: border
    }
  },
  groupTitle: {
    color: 'rgba(0,0,0,0.54)',
    cursor: 'default',
    fontWeight: '500',
    height: '48px',
    lineHeight: '48px',
    padding: '0 16px',
    userSelect: 'none'
  },
  link: {
    color: 'rgba(0,0,0,0.87)',
    cursor: 'pointer',
    display: 'block',
    fontWeight: '500',
    height: '48px',
    lineHeight: '48px',
    overflow: 'hidden',
    padding: '0 16px',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    transition: 'all 150ms ease-in',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    '&:hover': {
      background: '#EEEEEE',
    },
    '&.isActive': {
      color: '#00BCD4'
    },
    '& .material-icons': {
      color: 'rgba(0,0,0,0.54)',
      marginRight: '36px',
      verticalAlign: 'middle'
    },
    '&.isActive .material-icons': {
      color: '#00BCD4'
    }
  }
}

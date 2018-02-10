export const styles = {
  page: {},
  head: {
    background: '#37474F',
    // borderBottom: '1px #E0E0E0 solid',
    color: '#FFFFFF',
    fontSize: '1rem',
    fontWeight: '500',
    height: '64px',
    lineHeight: '64px',
    padding: '0 24px',
    position: 'sticky',
    top: '0',
    textOverflow: 'ellipsis',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    zIndex: '1000',
  },
  list: {
    padding: '24px'
  },
  transaction: {
    background: '#FFFFFF',
    boxShadow: [
      '0 1px 3px 0 rgba(0,0,0,0.24)',
      '0 1px 1px 0 rgba(0,0,0,0.12)',
      '0 2px 1px -1px rgba(0,0,0,0.12)'
    ].join(', '),
    cursor: 'pointer',
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingRight: '24px',
    paddingLeft: '24px',
    position: 'relative',
    transition: 'all 160ms ease-in-out',
    '&:before': {
      backgroundColor: '#E0E0E0',
      content: '""',
      opacity: '1',
      position: 'absolute',
      top: '-1px',
      left: '0',
      right: '0',
      height: '1px'
    },
    '&:last-child': {
      borderRadius: '0 0 4px 4px'
    },
    '&:first-child': {
      borderRadius: '4px 4px 0 0'
    },
    '&:first-child:before': {
      opacity: '0'
    },
    '&.isExpanded:before': {
      opacity: '0'
    },
    '&.isExpanded:not(:first-child)': {
      marginTop: '16px'
    },
    '&.isExpanded:not(:last-child)': {
      marginBottom: '16px'
    },
    '&.isExpanded': {
      cursor: 'default',
      paddingTop: '24px',
      paddingBottom: '24px',
    },
  },
  fields: {
    display: 'flex',
    alignItems: 'center',
    '&> .material-icons': {
      color: 'rgba(0,0,0,0.54)',
      cursor: 'pointer',
      flex: '0 0 auto'
    }
  },
  input: {
    background: 'transparent',
    border: '0',
    color: 'rgba(0,0,0,0.87)',
    borderBottom: '1px #E0E0E0 solid',
    marginRight: '24px',
    overflow: 'hidden',
    transition: 'all 160ms linear',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    ':not(.isExpanded) > $fields > &': {
      cursor: 'pointer',
    },
    '&::placeholder': {
      color: 'rgba(0,0,0,0.54)'
    },
    '&:read-only': {
      color: 'rgba(0,0,0,0.54)',
      cursor: 'inherit',
      borderBottomColor: 'transparent',
      '&::placeholder': {
        color: 'transparent'
      }
    },
    '&:nth-child(1)': {
      flex: '0 0 auto',
      width: '100px',
    },
    '&:nth-child(2)': {
      color: 'rgba(0,0,0,0.87)',
      flex: '0 0 auto',
      width: '320px'
    },
    '&:nth-child(3)': {
      flex: '1 1 auto'
    },
    '&:focus': {
      borderBottomColor: '#00BCD4'
    },
  }
}

export const dateWidth = 120
export const payeeWidth = 360

export const styles = (theme) => ({
  root: {
    padding: `${theme.spacing.unit * 3}px`
  },
  fetcher: {
    height: '48px',
    padding: `${theme.spacing.unit * 2}px 0`,
    textAlign: 'center'
  },
  fields: {
    alignItems: 'center',
    display: 'flex',
    width: '100%'
  },
  editTitle: {
    fontWeight: theme.typography.fontWeightMedium
  },
  date: {
    color: theme.palette.text.secondary,
    flex: '0 0 auto',
    marginRight: `${theme.spacing.unit * 2}px`,
    whiteSpace: 'nowrap',
    width: `${dateWidth}px`
  },
  payee: {
    flex: '0 0 33%',
    marginRight: `${theme.spacing.unit * 2}px`,
    maxWidth: `${payeeWidth}px`,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  description: {
    color: theme.palette.text.secondary,
    flex: '1 1 auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
})

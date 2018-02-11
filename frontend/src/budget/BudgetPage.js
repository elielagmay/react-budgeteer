import React from 'react'

export const BudgetPage = ({ match }) => (
  <div className='BudgetPage'>Budget Page - {match.params.id}</div>
)

export default BudgetPage

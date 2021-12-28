import React, { useContext } from 'react'
import { GobalContext } from '../Context/Gobalstate'

import Transaction from './Transaction'
const Balance = () => {
  const { transaction } = useContext(GobalContext)
  console.log(transaction + 'fro bal')
  const amount = transaction.map((transac) => transac.amount)
  //   console.log()
  const total = parseFloat(
    amount.reduce((acc, item) => (acc += item), 0),
  ).toFixed(2)

  const income = parseFloat(
    amount.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0),
  ).toFixed(2)
  const expense = parseFloat(
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0),
  ).toFixed(2)
  return (
    <div>
      <h2>Balance</h2>
      <h3 className={total < 0 ? 'totalfig-red' : 'totalfig-green'}>
        ₹{total}
      </h3>
      <div className="iande">
        <h3>Income </h3>
        <h3>Expense</h3>
      </div>
      <div className="amount">
        <h4 className="income">₹{income}</h4>
        <h4 className="expense">₹{expense}</h4>
      </div>
    </div>
  )
}

export default Balance

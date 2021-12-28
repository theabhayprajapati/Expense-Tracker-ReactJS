import React, { useContext } from 'react'
import { GobalContext } from '../Context/Gobalstate'
const TransactionList = () => {
  const { transaction } = useContext(GobalContext)
  console.log(transaction)

  return (
    <div>
      <div className="listTran">
        {transaction.map((trans) => {
          return (
            <div key={trans.id}>
              <p className="listheading" id="number">
                {trans.id}
              </p>
              <p className="listheading" id="tranname">
                {trans.text}
              </p>
              <p
                className={
                  trans.amount < 0 ? 'listheading-red' : 'listheading-green'
                }
              >
                {trans.amount >= 0 ? '+' : '-'}₹{Math.abs(trans.amount)}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TransactionList

import React from 'react'

const Addtransaction = () => {
  return (
    <div>
      <h3>Add transaction</h3>
      <form placeholder="Add transaction reason">
        <input type="text" placeholder="Add reason" />

        <input type="number" placeholder="Add Amount" />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  )
}

export default Addtransaction

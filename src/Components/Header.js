import React from 'react'
import { GobalProvider } from '../Context/Gobalstate'
import Addtransaction from './Addtransaction'
import Balance from './Balance'
import Transaction from './Transaction'
import TransactionList from './TransactionList'

const Header = () => {
  return (
    <GobalProvider>
      <h1>Expense Tracker</h1>
      <Balance />
      <Transaction />
      <TransactionList />
      <Addtransaction />
    </GobalProvider>
  )
}

export default Header

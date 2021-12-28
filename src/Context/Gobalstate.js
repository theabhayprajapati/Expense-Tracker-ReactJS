import React, { createContext, useReducer } from 'react'
import { Children } from 'react/cjs/react.production.min'
import AppReducer from './AppReducer'
//   Iniital state
const initialState = {
  transaction: [
    {
      id: 1,
      text: 'flower',
      amount: -23,
    },
    {
      id: 2,
      text: 'flower',
      amount: 34,
    },
    {
      id: 3,
      text: 'flower',
      amount: 0,
    },
    {
      id: 4,
      text: 'flower',
      amount: -232,
    },
  ],
}

// Create context

export const GobalContext = createContext(initialState)

//  provider

export const GobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <GobalContext.Provider value={{ transaction: state.transaction }}>
      {children}
    </GobalContext.Provider>
  )
}

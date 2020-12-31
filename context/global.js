import React, { createContext, useReducer, useContext } from 'react'
import { GET_ARTICLES } from './types'

//Define Conext
const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

//Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case GET_ARTICLES: {
      return {
        ...state,
        currentTheme: action.theme,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

//Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    articles: [],
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

//custom hooks for when we want to use our global state
export const useGlobalStateContext = () => useContext(GlobalStateContext)

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)

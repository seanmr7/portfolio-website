import { createContext, useReducer } from "react";
import themeReducer from './ThemeReducer'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  // Set initial state from local storage or as empty string
  let initialState
  if(localStorage.getItem('theme')) {
    initialState = {
      theme: localStorage.getItem('theme')
    }
  } else {
    initialState = {
      theme: ''
    } 
  }

  const [state, dispatch] = useReducer(themeReducer, initialState)

  return <ThemeContext.Provider value={{
    ...state,
    dispatch,
  }}>
    {children}
  </ThemeContext.Provider>
}

export default ThemeContext
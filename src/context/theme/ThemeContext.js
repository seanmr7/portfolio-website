import { createContext, useReducer } from "react";
import themeReducer from './ThemeReducer'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
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

  const changeTheme = (theme) => {
    dispatch({
      type: 'CHANGE_THEME',
      payload: theme,
    })
  }

  return <ThemeContext.Provider value={{
    ...state,
    changeTheme,
  }}>
    {children}
  </ThemeContext.Provider>
}

export default ThemeContext
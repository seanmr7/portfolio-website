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

  const setThemeOnLoad = () => {
    document.addEventListener('DOMContentLoaded', () => {
      if(localStorage.getItem('theme')) {
        document.querySelector('[data-theme]').setAttribute('data-theme', initialState.theme)
      }
    })
  }

  const changeTheme = (theme) => {
    dispatch({
      type: 'CHANGE_THEME',
      payload: theme,
    })
    const element = document.querySelector('[data-theme]')
    element.setAttribute('data-theme', theme)
    storeTheme(theme)
  }

  const storeTheme = (theme) => {
    localStorage.setItem('theme', theme)
  }

  return <ThemeContext.Provider value={{
    ...state,
    changeTheme,
    setThemeOnLoad
  }}>
    {children}
  </ThemeContext.Provider>
}

export default ThemeContext
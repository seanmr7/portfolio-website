
export const setThemeOnLoad = (initialTheme) => {
  document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('theme')) {
      document.querySelector('[data-theme]').setAttribute('data-theme', initialTheme)
    }
  })
}

export const changeTheme = (theme) => {
  const element = document.querySelector('[data-theme]')
  element.setAttribute('data-theme', theme)
  storeTheme(theme)
}

const storeTheme = (theme) => {
  localStorage.setItem('theme', theme)
}
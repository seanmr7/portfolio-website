import { useEffect, useContext } from 'react'
import Home from '../sections/Home'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Skills from '../sections/Skills'
import ContactMe from '../sections/ContactMe'
import ThemeContext from '../context/theme/ThemeContext'
import { setThemeOnLoad } from '../context/theme/ThemeActions'
import ProjectContext from '../context/project/ProjectContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { formatReposNames, sortRepos } from '../context/project/ProjectActions'

function LandingPage() {
  const { theme } = useContext(ThemeContext)
  const { getRepos, repos } = useContext(ProjectContext)

  useEffect(() => {
    getRepos()
    formatReposNames(repos)
    sortRepos(repos)
    setThemeOnLoad(theme)
  }, [getRepos, repos])

  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Skills />
      <ContactMe />

      <ToastContainer theme={theme === 'dark' ? 'dark' : 'light'} />
    </div>
  )
}

export default LandingPage

import { useEffect, useContext } from "react";
import Home from "../sections/Home";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import ContactMe from "../sections/ContactMe";
import ThemeContext from "../context/theme/ThemeContext";
import { setThemeOnLoad } from "../context/theme/ThemeActions";
import ProjectContext from "../context/project/ProjectContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function LandingPage() {
  const { theme } = useContext(ThemeContext)
  const { getRepos } = useContext(ProjectContext)

  useEffect(() => {
    getRepos()
    setThemeOnLoad(theme)
  }, [])

  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Skills />
      <ContactMe />

      <ToastContainer 
        theme={theme === 'dark' ? 'dark' : 'light'}
      />
    </div>
  )
}

export default LandingPage

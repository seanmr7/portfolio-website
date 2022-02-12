import { useEffect, useContext } from "react";
import Home from "../sections/Home";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import ContactMe from "../sections/ContactMe";
import ThemeContext from "../context/theme/ThemeContext";

function LandingPage() {
  const { theme, setThemeOnLoad } = useContext(ThemeContext)
  useEffect(() => {
    setThemeOnLoad()
  }, [])

  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Skills />
      <ContactMe />
    </div>
  )
}

export default LandingPage

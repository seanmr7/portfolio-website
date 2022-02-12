import { useEffect, useContext } from "react";
import Home from "../sections/Home";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import ContactMe from "../sections/ContactMe";
import ThemeContext from "../context/theme/ThemeContext";
import { setThemeOnLoad } from "../context/theme/ThemeActions";

function LandingPage() {
  const { theme } = useContext(ThemeContext)
  useEffect(() => {
    setThemeOnLoad(theme)
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

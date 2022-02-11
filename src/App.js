import { useEffect, useContext } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import ContactMe from "./sections/ContactMe";
import { ThemeProvider } from "./context/theme/ThemeContext";
import ThemeContext from "./context/theme/ThemeContext";

function App() {
  // const { theme, setThemeFromLocalStorage } = useContext(ThemeContext)
  // useEffect(() => {
  //   setThemeFromLocalStorage()
  // }, [])  

  return (
    <ThemeProvider>
      <div >
        <Home />
        <About />
        <Projects />
        <Skills />
        <ContactMe />
      </div>
    </ThemeProvider>
  );
}

export default App;

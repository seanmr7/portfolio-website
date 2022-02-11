import { useState, useEffect } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import ContactMe from "./sections/ContactMe";

function App() {
  const [theme, setTheme] = useState('cupcake')

  useEffect(() => {
    if(localStorage.getItem('theme')) {
      const storedTheme = localStorage.getItem('theme')
      setTheme(storedTheme)
    }
  }, [])

  const handleClick = () => {
    if(theme === 'cupcake') {
      setTheme('dark')
    } else {
      setTheme('cupcake')
    }
  }
  

  return (
    <div >
      <Home handleClick={handleClick}/>
      <About />
      <Projects />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;

import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import ContactMe from "./sections/ContactMe";
import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "./context/theme/ThemeContext";

function App() {

  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;

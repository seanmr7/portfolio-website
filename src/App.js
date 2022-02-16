import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "./context/theme/ThemeContext";
import { ProjectProvider } from "./context/project/ProjectContext";
import Footer from "./components/Footer";

function App() {

  return (
    <ProjectProvider>
      <ThemeProvider>
        <LandingPage />
        <Footer />
      </ThemeProvider>
    </ProjectProvider>
  );
}

export default App;

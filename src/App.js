import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "./context/theme/ThemeContext";
import { ProjectProvider } from "./context/project/ProjectContext";

function App() {

  return (
    <ProjectProvider>
      <ThemeProvider>
        <LandingPage />
      </ThemeProvider>
    </ProjectProvider>
  );
}

export default App;

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

import { Suspense, lazy } from 'react'
import LandingPage from './pages/LandingPage'
import { ThemeProvider } from './context/theme/ThemeContext'
import { ProjectProvider } from './context/project/ProjectContext'
// import Footer from './components/Footer'
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <ProjectProvider>
      <ThemeProvider>
        <LandingPage />
        <Suspense fallback={<div>Loading...</div>}>
          <Footer />
        </Suspense>
      </ThemeProvider>
    </ProjectProvider>
  )
}

export default App

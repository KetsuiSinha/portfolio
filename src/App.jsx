import './App.css'
import Navbar from './components/Navbar.jsx'
import AboutUs from './components/AboutUs.jsx'
import FluidCursor from './components/Cursor.jsx'
import AdvancedDashboard from './components/Dashboard'
import Projects from './components/Projects.jsx'

function App() {
  return (
    <>
    <FluidCursor/>
    <AdvancedDashboard>
      <Navbar/>
      <AboutUs/>
      <Projects/>
      </AdvancedDashboard>
    </>
  )
}

export default App

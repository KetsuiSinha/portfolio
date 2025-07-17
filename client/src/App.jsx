import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FluidCursor from './components/Cursor.jsx';
import AdvancedDashboard from './components/Dashboard';
import Navbar from './components/Navbar.jsx';
import AboutUs from './components/AboutUs.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <Router>
      <FluidCursor />
      <AdvancedDashboard>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AdvancedDashboard>
    </Router>
  );
}

export default App;

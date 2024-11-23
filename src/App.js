import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Pendulum from './pages/Projects/Pendulum';
import School from './pages/School';
import Navbar from './components/Navbar';
import Cmake from './pages/School/Cmake';
import Networks from './pages/School/Networks'

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="School" element={<School />} />
        <Route path="projects/pendulum" element={<Pendulum />} />
        <Route path="school/cmake" element={<Cmake />} />
        <Route path="school/networks" element={<Networks />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

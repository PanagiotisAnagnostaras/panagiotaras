import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import RLGarage from './pages/Projects/RLGarage';
import Sandbox from './pages/Projects/Sandbox';
import MasterThesis from './pages/Projects/MasterThesis';
import SemesterProject from './pages/Projects/SemesterProject';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/rlgarage" element={<RLGarage />} />
        <Route path="/projects/sandbox" element={<Sandbox />} />
        <Route path="/projects/masterthesis" element={<MasterThesis />} />
        <Route path="/projects/semesterproject" element={<SemesterProject />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Pendulum from './pages/Projects/Pendulum';
import Sandbox from './pages/Projects/Sandbox';
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
        <Route path="/projects/pendulum" element={<Pendulum />} />
        <Route path="/projects/sandbox" element={<Sandbox />} />
      </Routes>
    </div>
    </>
  );
}

export default App;

import './styles/App.css';
import NavbarMobile from './components/NavbarMobile';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Interest from './pages/Interest';
import Journey from './pages/Journey';
import Skills from './pages/Skills';
import PageNotFound from './pages/PageNotFound';

const navLinks = [
  'About', //don't change the order of these links
  'Projects',
  'Education',
  'Interest',
  'Journey',
  'Skills',
];

function App() {
  return (
    <>
      <NavbarMobile userName='Tenzin Kunchok' navLinks={navLinks} />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/education' element={<Education />} />
        <Route path='/interest' element={<Interest />} />
        <Route path='/journey' element={<Journey />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

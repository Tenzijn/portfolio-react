import './styles/App.css';
import NavbarMobile from './components/NavbarMobile';
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Interest from './pages/Interest';
import Journey from './pages/Journey';
import Skills from './pages/Skills';
import { useEffect, useState } from 'react';

const navLinks = [
  'About',
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
        <Route path='/About' element={<About />} />
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

const PageNotFound = () => {
  const [count, setCount] = useState(3); // [0, function
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      console.log('Redirecting to About page...');
      navigate('/About');
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  }, [count]);

  return (
    <div>
      <h1>Error 404</h1>
      <h1>Page Not Found</h1>
      <h1>Redirecting to About page... {count}</h1>
    </div>
  );
};

export default App;

/* React Router */
import { Routes, Route } from 'react-router-dom';

/* Styles */
import './styles/App.scss';
/* Components */
import ProtectedRoutes from './components/ProtectedRoutes.jsx';
/* Pages */
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Interest from './pages/Interest';
import Journey from './pages/Journey';
import Skills from './pages/Skills';
import CvPage from './pages/CvPage.jsx';
import PageNotFound from './pages/PageNotFound';
import Admin from './pages/Admin.jsx';
import Public from './routers/Public.jsx';

/* Images */

/* Data */
import {
  aboutMe,
  myJourney,
  projects,
  education,
  experience,
  hobbies,
} from './data/data.js';

function App() {
  return (
    <Routes>
      <Route element={<Public />}>
        <Route path='/' element={<About data={aboutMe} />} />
        <Route path='/journey' element={<Journey data={myJourney} />} />
        <Route path='/education' element={<Education data={education} />} />
        <Route path='/skills' element={<Skills data={experience} />} />
        <Route path='/interest' element={<Interest data={hobbies} />} />
        <Route path='/projects' element={<Projects data={projects} />} />
        <Route path='/cv' element={<CvPage />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path='/admin' element={<Admin />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

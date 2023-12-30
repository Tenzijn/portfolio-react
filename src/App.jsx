/* React Router */
import { Routes, Route } from 'react-router-dom';
/* Chakra UI */
import { Flex, Grid, GridItem, Hide } from '@chakra-ui/react';
/* Styles */
import './styles/App.scss';
/* Components */
import NavbarMobile from './components/NavbarMobile';
import SidebarNav from './components/SidebarNav';
/* Pages */
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Interest from './pages/Interest';
import Journey from './pages/Journey';
import Skills from './pages/Skills';
import Home from './pages/Home.jsx';
import PageNotFound from './pages/PageNotFound';

/* Images */
import profilePic from '/tenzinkunchok.webp';

/* Data */
import {
  aboutMe,
  myJourney,
  projects,
  education,
  experience,
  hobbies,
} from './data/data.js';

const navLinks = [
  //don't change the order of these links as it will affect the order of the navbar
  'About',
  'Journey',
  'Education',
  'Skills',
  'Interest',
  'Projects',
];

function App() {
  return (
    <Grid templateColumns={'repeat(12,1fr)'}>
      <GridItem colSpan={12}>
        <NavbarMobile
          userName='Tenzin Kunchok'
          navLinks={navLinks}
          userImg={profilePic}
        />
      </GridItem>
      <Hide below='lg'>
        <GridItem
          colSpan={2}
          h={'100dvh'}
          className='sidebarNav'
          maxWidth={'270px'}
        >
          <SidebarNav navLinks={navLinks} profilePic={profilePic} />
        </GridItem>
      </Hide>
      <GridItem colSpan={{ base: 12, lg: 10 }}>
        <Flex alignItems='center' m={6} h={{ lg: '100dvh' }}>
          {/*
           * React Router for Navigation with all the pages
           */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About aboutMe={aboutMe} />} />
            <Route
              path='/projects'
              element={<Projects projects={projects} />}
            />
            <Route
              path='/education'
              element={<Education education={education} />}
            />
            <Route path='/interest' element={<Interest hobbies={hobbies} />} />
            <Route
              path='/journey'
              element={<Journey myJourney={myJourney} />}
            />
            <Route
              path='/skills'
              element={<Skills experience={experience} />}
            />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;

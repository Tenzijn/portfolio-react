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
import PageNotFound from './pages/PageNotFound';

/* Images */
import profilePic from '/tenzinkunchok.jpeg';

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
        <GridItem colSpan={2} className='sidebarNav' maxWidth={'270px'}>
          <SidebarNav navLinks={navLinks} profilePic={profilePic} />
        </GridItem>
      </Hide>
      <GridItem
        colSpan={{ base: 12, lg: 10 }}
        h={{ lg: '100dvh' }}
        overflow={{ lg: 'auto' }}
      >
        {/* flex has problem : top overflow and can't see so made it grid */}
        <Flex
          display={'grid'}
          alignItems='center'
          maxW={{ lg: '1500px' }}
          mx={6}
          my={{ base: 6, lg: 0 }}
          h={'100%'}
        >
          {/*
           * Routing/Navigation to all the pages
           */}
          <Routes>
            <Route path='/' element={<About data={aboutMe} />} />
            <Route path='/journey' element={<Journey data={myJourney} />} />
            <Route path='/education' element={<Education data={education} />} />
            <Route path='/skills' element={<Skills data={experience} />} />
            <Route path='/interest' element={<Interest data={hobbies} />} />
            <Route path='/projects' element={<Projects data={projects} />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;

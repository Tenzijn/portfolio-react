/* React Router */
import { Routes, Route } from 'react-router-dom';
/* Chakra UI */
import { Container, Grid, GridItem, Hide } from '@chakra-ui/react';
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
import profilePic from '/me.webp';

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
    <>
      <Grid templateColumns={'repeat(6,1fr)'} h='100dvh'>
        <GridItem colSpan={6}>
          <NavbarMobile userName='Tenzin Kunchok' navLinks={navLinks} />
        </GridItem>
        <Hide below='lg'>
          <GridItem
            colSpan={1}
            h={'100dvh'}
            className='sidebarNav'
            maxWidth={'200px'}
          >
            <SidebarNav navLinks={navLinks} profilePic={profilePic} />
          </GridItem>
        </Hide>
        <GridItem colSpan={5} h={'100dvh'} pt='65px'>
          <Container maxW='container.xl'>
            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/education' element={<Education />} />
              <Route path='/interest' element={<Interest />} />
              <Route path='/journey' element={<Journey />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Container>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

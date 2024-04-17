import { Outlet } from 'react-router-dom';
import { Grid, GridItem, Flex, Hide } from '@chakra-ui/react';
import NavbarMobile from '../components/NavbarMobile';
import SidebarNav from '../components/SidebarNav';
import FloatingBtn from '../components/FloatingBtn';
import profilePic from '/tenzinkunchok.jpeg';

const navLinks = [
  //don't change the order of these links as it will affect the order of the navbar
  'About',
  'Journey',
  'Education',
  'Skills',
  'Interest',
  'Projects',
];

function Public() {
  return (
    <Grid templateColumns={'repeat(12,1fr)'} overflow={'hidden'}>
      <GridItem colSpan={12}>
        <NavbarMobile
          userName='Tenzin Kunchok'
          navLinks={navLinks}
          userImg={profilePic}
        />
      </GridItem>
      <Hide below='lg'>
        <GridItem colSpan={2} className='sidebarNav' maxWidth={'270px'}>
          <FloatingBtn />
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
          <Outlet />
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default Public;

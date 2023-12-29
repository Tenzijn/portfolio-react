import '../styles/Navbar.scss';
import { Flex, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

const SidebarNav = (props) => {
  const { navLinks, profilePic } = props;
  return (
    <Flex
      flexDirection={'column'}
      justifyContent={'center'}
      h={'100%'}
      alignItems='center'
      gap={3}
    >
      <Image
        src={profilePic}
        borderRadius='full'
        alt='profile pic'
        boxSize='150px'
        bg={'gray.100'}
        border='5px solid'
        mb={4}
      />

      {navLinks.map((link) => (
        <NavLink key={link} to={`/${link.toLowerCase()}`} className='nav-link'>
          {link}
        </NavLink>
      ))}
    </Flex>
  );
};

SidebarNav.propTypes = {
  navLinks: propTypes.array.isRequired,
  profilePic: propTypes.string.isRequired,
};

export default SidebarNav;

import '../styles/Navbar.scss';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

const SidebarNav = (props) => {
  const { navLinks, profilePic } = props;
  return (
    <>
      <Flex
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        h={'100%'}
        alignItems='center'
        pt={6}
        gap={3}
      >
        <NavLink to='/'>
          <Image
            src={profilePic}
            borderRadius='full'
            alt='profile pic'
            boxSize='150px'
            bg={'gray.100'}
            border='5px solid'
            mb={4}
            onMouseEnter={(e) => e.target.classList.add('flip-vertical-left')}
            onMouseLeave={(e) =>
              e.target.classList.remove('flip-vertical-left')
            }
          />
        </NavLink>

        {navLinks.map((link) =>
          link === 'About' ? (
            <NavLink key={link} to={`/`} className='nav-link'>
              {link}
            </NavLink>
          ) : (
            <NavLink
              key={link}
              to={`/${link.toLowerCase()}`}
              className='nav-link'
            >
              {link}
            </NavLink>
          )
        )}
        {/* This box should be end of the page all the time */}
        <Box bgColor={'gray.800'} p={'1rem'} mt={'auto'}>
          <Text fontSize='sm' color='gray.200' textAlign='center'>
            © 2024 Tibet.Dev | བོད་ཀྱི་དྲྭ་མཉེན་བཟོ་སྐྲུན་ཁང་། | All Rights
            Reserved
          </Text>
        </Box>
      </Flex>
    </>
  );
};

SidebarNav.propTypes = {
  navLinks: propTypes.array.isRequired,
  profilePic: propTypes.string.isRequired,
};

export default SidebarNav;

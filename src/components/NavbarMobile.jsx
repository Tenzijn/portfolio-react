import {
  Flex,
  Spacer,
  Text,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Hide,
  Avatar,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import '../styles/Navbar.scss';
import ReactPropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavbarMobile = (props) => {
  const { userName, navLinks, userImg } = props;
  return (
    <Hide above='lg'>
      <Accordion className='navbar' allowToggle>
        <AccordionItem>
          <Flex
            justifyContent='space-between'
            alignItems='center'
            width={'100%'}
            gap={2}
          >
            <Avatar
              name={userName}
              src={userImg}
              size='md'
              m={3}
              border={'1px solid white'}
              bg={'gray.100'}
            />
            <Spacer />
            <AccordionButton w={20}>
              <AccordionIcon
                as={HamburgerIcon}
                w={12}
                h={8}
                color='white'
                border={'1px solid rgba(255, 255, 255, 0.2)'}
                borderRadius='md'
                _hover={{ bg: 'rgba(255, 255, 255, 0.2)' }}
              />
            </AccordionButton>
          </Flex>
          <AccordionPanel>
            <Flex flexDirection={'column'} gap={2}>
              {navLinks.map((link) => (
                <NavLink
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className='nav-link'
                >
                  {link}
                </NavLink>
              ))}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Hide>
  );
};

NavbarMobile.propTypes = {
  userName: ReactPropTypes.string.isRequired,
  navLinks: ReactPropTypes.array.isRequired,
  userImg: ReactPropTypes.string.isRequired,
};

export default NavbarMobile;

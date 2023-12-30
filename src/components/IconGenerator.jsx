import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Icon, Wrap, WrapItem } from '@chakra-ui/react';

const IconGenerator = ({ icons }) => {
  return (
    <Wrap spacing='20px'>
      {icons.map((social, index) => {
        const iconName = `Fa${Object.keys(social)[0]}`;
        const IconComponent = getIconComponent(iconName);
        return (
          <WrapItem key={index}>
            <Icon
              as={IconComponent}
              boxSize='16'
              bg='gray.800'
              p={4}
              borderRadius={18}
              onClick={() => {
                // to open the link in new tab
                window.open(social[Object.keys(social)[0]]);
              }}
              cursor={'pointer'}
              _hover={{
                bg: 'gray.700',
              }}
            />
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'FaLinkedin':
      return FaLinkedin;
    case 'FaTwitter':
      return FaTwitter;
    case 'FaFacebook':
      return FaFacebook;
    case 'FaYoutube':
      return FaYoutube;
    case 'FaInstagram':
      return FaInstagram;
    case 'FaGithub':
      return FaGithub;
    default:
      return null;
  }
};

export default IconGenerator;

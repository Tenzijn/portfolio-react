import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaHtml5,
  FaCss3,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaWordpress,
  FaGit,
  FaFigma,
  FaBootstrap,
  FaLinux,
  FaWindows,
  FaApple,
  FaDocker,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiAdobe,
  SiMaterialdesignicons,
  SiVite,
  SiWebpack,
  SiChakraui,
  SiNetlify,
  SiTypescript,
  SiGraphql,
  SiKubernetes,
  SiMysql,
} from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { TbBrandNextjs } from 'react-icons/tb';
import { Icon, Wrap, WrapItem } from '@chakra-ui/react';
import propTypes from 'prop-types';

const IconGenerator = ({ icons }) => {
  return (
    <Wrap spacing='20px'>
      {icons.map((social, index) => {
        const iconName = Object.keys(social)[0];
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
                const url = social[Object.keys(social)[0]];
                const urlPattern =
                  /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
                if (urlPattern.test(url)) {
                  window.open(url);
                }
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
    case 'FaHtml5':
      return FaHtml5;
    case 'FaCss3':
      return FaCss3;
    case 'FaSass':
      return FaSass;
    case 'FaJs':
      return FaJs;
    case 'FaReact':
      return FaReact;
    case 'FaNodeJs':
      return FaNodeJs;
    case 'FaDatabase':
      return FaDatabase;
    case 'FaWordpress':
      return FaWordpress;
    case 'FaGit':
      return FaGit;
    case 'FaFigma':
      return FaFigma;
    case 'FaBootstrap':
      return FaBootstrap;
    case 'FaLinux':
      return FaLinux;
    case 'FaWindows':
      return FaWindows;
    case 'FaApple':
      return FaApple;
    case 'FaDocker':
      return FaDocker;
    case 'FaGitAlt':
      return FaGitAlt;
    case 'SiAdobe':
      return SiAdobe;
    case 'SiMaterialdesignicons':
      return SiMaterialdesignicons;
    case 'IoLogoFirebase':
      return IoLogoFirebase;
    case 'SiVite':
      return SiVite;
    case 'SiWebpack':
      return SiWebpack;
    case 'SiChakraui':
      return SiChakraui;
    case 'SiNetlify':
      return SiNetlify;
    case 'TbBrandNextjs':
      return TbBrandNextjs;
    case 'SiTypescript':
      return SiTypescript;
    case 'SiGraphql':
      return SiGraphql;
    case 'SiKubernetes':
      return SiKubernetes;
    case 'SiMysql':
      return SiMysql;
    default:
      return null;
  }
};

IconGenerator.propTypes = {
  icons: propTypes.array,
};

export default IconGenerator;

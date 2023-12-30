import { Box, HStack, Heading, Text } from '@chakra-ui/react';
import '../styles/About.scss';
import IconGenerator from '../components/IconGenerator';
import propTypes from 'prop-types';

const About = ({ aboutMe }) => {
  return (
    <>
      {aboutMe &&
        aboutMe.map((info, index) => (
          <Box key={index}>
            <Heading as='h1' fontSize={{ base: '2xl', lg: '4xl' }}>
              <Text as='span' className='accent-gray'>
                {info.firstName.toUpperCase()} &nbsp;
              </Text>
              <Text as='span' className='accent-orange'>
                {info.lastName.toUpperCase()}
              </Text>
            </Heading>
            <Heading fontSize={{ lg: 'xl' }} mt='2'>
              {info.add.toUpperCase()} {info.phone} &nbsp;
              <Text as='span' className='accent-orange'>
                {info.email.toUpperCase()}
              </Text>
            </Heading>
            <Text mt='4' fontSize={'lg'}>
              {info.about}
            </Text>
            <HStack mt='8' spacing='5'>
              <IconGenerator key={index} icons={info.socials} />
            </HStack>
          </Box>
        ))}
    </>
  );
};

About.propTypes = {
  aboutMe: propTypes.array,
};

export default About;

import { Box, HStack } from '@chakra-ui/react';
import '../styles/About.scss';
import IconGenerator from '../components/IconGenerator';
import propTypes from 'prop-types';
import ContentLayout from '../components/ContentLayout';
import PageHeading from '../components/PageHeading';
import Subtitle from '../components/Subtitle';

const About = ({ data }) => {
  return (
    <>
      {data &&
        data.map((info, index) => (
          <Box key={index}>
            {/* Displaying first-name and last-name */}
            <PageHeading
              firstHeading={info.firstName}
              secondHeading={info.lastName}
            />
            {/* Displaying address,email */}
            <Subtitle subtitle={`📍${info.add}`} />
            <br />
            <Subtitle subtitle={`📨${info.email}`} />
            {/* Displaying about */}
            <ContentLayout data={info.about} />
            {/* Displaying Social links */}
            <HStack mt='8' spacing='5'>
              <IconGenerator key={index} icons={info.socials} />
            </HStack>
          </Box>
        ))}
    </>
  );
};

About.propTypes = {
  data: propTypes.array,
};

export default About;

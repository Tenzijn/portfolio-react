import { useState, useEffect } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import '../styles/About.scss';
import IconGenerator from '../components/IconGenerator';
import propTypes from 'prop-types';
import ContentLayout from '../components/ContentLayout';
import PageHeading from '../components/PageHeading';
import Subtitle from '../components/Subtitle';
import { client } from '../client';

const About = ({ data }) => {
  const [sanityData, setSanityData] = useState(null);

  useEffect(() => {
    (async () => {
      await client
        .fetch(
          `*[_type == "about"]{firstName,lastName,location->{location},email,bio,social}`
        )
        .then((res) => {
          setSanityData(res);
        })
        .catch(console.error);
    })();
  }, []);

  return (
    <>
      {data &&
        data.map((info, index) => (
          <Box key={index}>
            {/* Displaying first-name and last-name */}
            <PageHeading
              firstHeading={sanityData && sanityData[0].firstName}
              secondHeading={sanityData && sanityData[0].lastName}
            />
            <Subtitle subtitle={`👨‍💻 Junior Full-stack Engineer @ Homerun.co`} />
            <br />
            {/* Displaying address,email */}
            <Subtitle
              subtitle={`📍${sanityData && sanityData[0].location.location}`}
            />
            <br />
            <Subtitle subtitle={`📨${sanityData && sanityData[0].email}`} />
            {/* Displaying about */}
            <ContentLayout
              data={sanityData && sanityData[0].bio[0].children[0].text}
            />
            {/* Displaying Social links  : coming from local data*/}
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

import { Flex, Spacer, Box } from '@chakra-ui/react';
import propTypes from 'prop-types';
import ContentLayout from '../components/ContentLayout';
import PageHeading from '../components/PageHeading';
import Title from '../components/Title';
import Date from '../components/Date';
import Subtitle from '../components/Subtitle';

const Journey = ({ data }) => {
  return (
    <Flex flexDirection={'column'}>
      {/* displaying page header */}
      <PageHeading firstHeading='My Journey' />
      {data.map((journey) => (
        <Flex key={journey.id} flexDir={'column'} mb={9}>
          {/* displaying title and date  */}
          <Box display={{ lg: 'flex' }}>
            <Title title={journey.title} />
            <Spacer />
            <Date date={journey.date} />
          </Box>
          {/* displaying subtitle  */}
          <Subtitle subtitle={journey.subtitle} linkUrl={journey.link} />
          {/* displaying content paragraph */}
          <ContentLayout data={journey.content} />
        </Flex>
      ))}
    </Flex>
  );
};

Journey.propTypes = {
  data: propTypes.array,
};

export default Journey;

import { Flex, Box } from '@chakra-ui/react';
import propTypes from 'prop-types';
import ContentLayout from '../components/ContentLayout';
import PageHeading from '../components/PageHeading';
import Title from '../components/Title';

const Interest = ({ data }) => {
  return (
    <Flex flexDirection={'column'}>
      {/* displaying page header */}
      <PageHeading firstHeading='Interest' />
      {data.map((journey) => (
        <Flex key={journey.id} flexDir={'column'} mb={9}>
          {/* displaying title */}
          <Box display={{ lg: 'flex' }}>
            <Title title={journey.title} />
          </Box>
          {/* displaying content paragraph */}
          <ContentLayout data={journey.content} />
        </Flex>
      ))}
    </Flex>
  );
};

Interest.propTypes = {
  data: propTypes.array,
};

export default Interest;

import { Heading, Text } from '@chakra-ui/react';
import propTypes from 'prop-types';
const PageHeading = ({ firstHeading, secondHeading }) => {
  return (
    <Heading
      as='h1'
      fontSize={{ base: '4xl', lg: '6xl' }}
      my={{ base: '5', lg: '10' }}
    >
      {firstHeading && (
        <Text as='span' className='accent-gray'>
          {firstHeading.toUpperCase()} &nbsp;
        </Text>
      )}
      {secondHeading && (
        <Text as='span' className='accent-orange'>
          {secondHeading.toUpperCase()}
        </Text>
      )}
    </Heading>
  );
};

PageHeading.propTypes = {
  firstHeading: propTypes.string,
  secondHeading: propTypes.string,
};

export default PageHeading;

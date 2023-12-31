import { Heading } from '@chakra-ui/react';
import propTypes from 'prop-types';
const Title = ({ title }) => {
  {
    return (
      title && (
        <Heading fontSize='3xl' className='accent-gray'>
          {title.toUpperCase()}
        </Heading>
      )
    );
  }
};

Title.propTypes = {
  title: propTypes.string,
};

export default Title;

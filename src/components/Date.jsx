import { Text } from '@chakra-ui/react';
import propTypes from 'prop-types';
const Date = ({ date }) => {
  {
    return (
      date && (
        <Text size='md' className='accent-orange'>
          {date}
        </Text>
      )
    );
  }
};

Date.propTypes = {
  date: propTypes.string,
};

export default Date;

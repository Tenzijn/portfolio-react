import { Box, Flex, Spacer } from '@chakra-ui/react';
import PageHeading from '../components/PageHeading';
import Title from '../components/Title';
import propTypes from 'prop-types';
import Date from '../components/Date';
import Subtitle from '../components/Subtitle';
import ContentLayout from '../components/ContentLayout';
const Education = ({ data }) => {
  return (
    <Box>
      <PageHeading firstHeading='Education 🎓' />
      {data &&
        data.map((info, index) => (
          <Flex key={index} flexDir={'column'} mb={9}>
            <Box key={index} display={{ lg: 'flex' }}>
              <Title title={info.schoolName} />
              <Spacer />
              <Date date={info.date} />
            </Box>
            <Subtitle subtitle={info.course} />
            <ContentLayout data={info.content} />
          </Flex>
        ))}
    </Box>
  );
};

Education.propTypes = {
  data: propTypes.array,
};
export default Education;

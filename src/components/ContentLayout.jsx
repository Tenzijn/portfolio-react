import { Text } from '@chakra-ui/react';
import propTypes from 'prop-types';
const ContentLayout = ({ data }) => {
  {
    return data ? (
      <Text
        as='p'
        fontSize='lg'
        fontWeight={500}
        pt={5}
        dangerouslySetInnerHTML={{ __html: data }}
      ></Text>
    ) : (
      <>
        <Text as='p' fontSize='lg' fontWeight={500} pt={5}>
          Information Coming Soon...
        </Text>
      </>
    );
  }
};

ContentLayout.propTypes = {
  data: propTypes.string,
};

export default ContentLayout;

import { NavLink } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons';

function DownloadCv() {
  return (
    <>
      <NavLink to='/cv'>
        <Box
          display={'flex'}
          bgColor={'blue.900'}
          alignItems={'center'}
          justifyContent={'center'}
          p={2}
        >
          <AttachmentIcon />
          <Text pl={2} fontWeight={'bold'}>
            Download CV
          </Text>
        </Box>
      </NavLink>
    </>
  );
}

export default DownloadCv;

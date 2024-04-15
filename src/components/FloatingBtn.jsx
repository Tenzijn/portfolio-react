import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function FloatingBtn() {
  const [btnText, setBtnText] = useState('CV');
  return (
    <Link to='/cv'>
      <Box
        bgColor={'orange.600'}
        position={'absolute'}
        p={'1rem'}
        bottom={'2rem'}
        right={'0'}
        borderLeft={'5px solid white'}
        borderTopLeftRadius={'1rem'}
        _hover={{
          transform: 'translateX(-20px)',
          transition: 'transform 0.5s ease-in-out',
        }}
        cursor={'pointer'}
        onMouseEnter={() => {
          setBtnText('Download / View CV');
        }}
        onMouseLeave={() => {
          setBtnText('CV');
        }}
      >
        <Text color={'white'}>{btnText}</Text>
      </Box>
    </Link>
  );
}

export default FloatingBtn;

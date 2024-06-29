import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

function FloatingBtn() {
  const [btnText, setBtnText] = useState('CV');
  return (
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
      onClick={() => {
        window.open(
          'https://app.enhancv.com/share/24111ab0/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic',
          '_blank'
        );
      }}
    >
      <Text color={'white'}>{btnText}</Text>
    </Box>
  );
}

export default FloatingBtn;

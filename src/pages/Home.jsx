import { Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react';

function Home() {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      <GridItem colSpan={{ base: 3, lg: 1 }}>
        <Flex alignItems='center' justifyContent='center' h='100%'>
          <Heading as='h1' size='4xl'>
            Tenzin
          </Heading>
        </Flex>
      </GridItem>
      <GridItem colSpan={{ base: 3, lg: 2 }}>
        <Image src='/tenzin-profile.png' alt='Tenzin Profile' />
      </GridItem>
    </Grid>
  );
}

export default Home;

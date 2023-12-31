import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Button,
  Divider,
} from '@chakra-ui/react';

import propTypes from 'prop-types';

const CardComponent = ({ project }) => {
  return (
    <Card maxW='md'>
      <CardBody>
        <Image src={project.image} alt={project.title} borderRadius='lg' />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{project.title}</Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          variant='solid'
          colorScheme='blue'
          onClick={() => window.open(project.link, '_blank')}
        >
          Visit
        </Button>
      </CardFooter>
    </Card>
  );
};

CardComponent.propTypes = {
  project: propTypes.object,
};

export default CardComponent;

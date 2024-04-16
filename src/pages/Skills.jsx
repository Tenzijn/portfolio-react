import { Box, Flex, List, ListIcon, ListItem } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import PageHeading from '../components/PageHeading';
import Title from '../components/Title';
import propTypes from 'prop-types';
import Subtitle from '../components/Subtitle';
import IconGenerator from '../components/IconGenerator';
const Skills = ({ data }) => {
  return (
    <Box>
      <PageHeading firstHeading='Skills 👨🏻‍💻 ' />
      {data &&
        data.map((info, index) => {
          switch (Object.keys(info)[0]) {
            case 'languagesAndTools':
              return (
                <Flex flexDir='column' gap={5} key={index} mb={10}>
                  <Subtitle subtitle='Languages' />
                  <IconGenerator icons={info.languagesAndTools} />
                </Flex>
              );
            case 'tools':
              return (
                <Flex flexDir='column' gap={5} key={index} mb={10}>
                  <Subtitle subtitle='Tools' />
                  <IconGenerator icons={info.tools} />
                </Flex>
              );
            case 'os':
              return (
                <Flex flexDir='column' gap={5} key={index} mb={10}>
                  <Subtitle subtitle='OS' />
                  <IconGenerator icons={info.os} />
                </Flex>
              );
            case 'learning':
              return (
                <Flex flexDir='column' gap={5} key={index} mb={10}>
                  <Subtitle subtitle='Learning now ' />
                  <IconGenerator icons={info.learning} />
                </Flex>
              );
            case 'workFlow':
              return (
                <Flex flexDir='column' gap={5} key={index} mb={10}>
                  <Subtitle subtitle='Work Flow' />
                  <List spacing={3}>
                    {info.workFlow.map((item, index) => (
                      <ListItem key={index}>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </Flex>
              );
            default:
              return (
                <Flex key={index}>
                  <Title title='I have nothing' />
                </Flex>
              );
          }
        })}
    </Box>
  );
};

Skills.propTypes = {
  data: propTypes.array,
};
export default Skills;

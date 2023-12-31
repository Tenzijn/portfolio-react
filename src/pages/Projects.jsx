import { Wrap, WrapItem } from '@chakra-ui/react';
import propTypes from 'prop-types';
import PageHeading from '../components/PageHeading';
import CardComponent from '../components/CardComponent';

const Projects = ({ data }) => {
  return (
    <>
      <PageHeading firstHeading='Projects' />
      <Wrap>
        {/* displaying page header */}
        {data.map((project, index) => (
          <WrapItem key={index}>
            <CardComponent project={project} />
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

Projects.propTypes = {
  data: propTypes.array,
};

export default Projects;

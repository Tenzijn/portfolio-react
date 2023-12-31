import { Heading, IconButton } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import propTypes from 'prop-types';
const Subtitle = ({ subtitle, linkUrl }) => {
  return (
    subtitle && (
      <Heading as='h3' size='sm'>
        {subtitle.toUpperCase()}
        {linkUrl && (
          <IconButton
            as='a'
            href={linkUrl}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='External Link'
            icon={<ExternalLinkIcon />}
            ml={2}
            size={'xs'}
          />
        )}
      </Heading>
    )
  );
};

Subtitle.propTypes = {
  subtitle: propTypes.string,
  linkUrl: propTypes.string,
};
export default Subtitle;

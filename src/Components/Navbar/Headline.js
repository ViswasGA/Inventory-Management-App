import { Box, Heading, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

export default function Headline() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <InfoIcon boxSize={'50px'} color={'blue.500'} />
      <Heading as="h2" size="xl" mt={18} mb={9}>
        This is the headline
      </Heading>
      <Text color={'gray.500'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
    </Box>
  );
}
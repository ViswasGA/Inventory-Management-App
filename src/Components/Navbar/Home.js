import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
export default function SplitScreen() {
  return (
    <div>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Inventory
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              management App
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            <Heading><ul type="disc">It is the process of managing 
              inventories from raw materials.</ul></Heading>
            <Heading><ul type="disc">Inventory management tries to efficiently 
            streamline inventories to avoid both gluts and shortages.</ul></Heading>
            <Heading><ul type="disc">Four major inventory management methods include just-in-time management (JIT), materials requirement 
            planning (MRP), economic order quantity (EOQ) , and days sales of inventory (DSI).</ul></Heading>
  
            <Heading><ul type="disc">Finished goods — are completed products readily available for sale to a company's customers.</ul></Heading>

          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }} >
              Get started
            </Button>
            <Button rounded={'full'}></Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://res.cloudinary.com/dcxx1ug2n/image/upload/v1689244064/qq/z9hyrjyjjakis5tvuqa2.jpg'
          }
        />
      </Flex>
    </Stack>
    </div>
  );
}
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

const ServiceBox = ({ title, description, image }) => (
  <Box
    role={'group'}
    p={6}
    maxW={'330px'}
    w={'full'}
    // bg={useColorModeValue('white', 'gray.800')}
    boxShadow={'2xl'}
    rounded={'lg'}
    pos={'relative'}
    zIndex={1}
  >
    <Box
      rounded={'lg'}
      mt={-12}
      pos={'relative'}
      height={'230px'}
      _after={{
        transition: 'all .3s ease',
        content: '""',
        w: 'full',
        h: 'full',
        pos: 'absolute',
        top: 5,
        left: 0,
        backgroundImage: `url(${image})`,
        filter: 'blur(15px)',
        zIndex: -1,
      }}
      _groupHover={{
        _after: {
          filter: 'blur(20px)',
        },
      }}>
      <Image
        rounded={'lg'}
        height={230}
        width={282}
        objectFit={'cover'}
        src={image}
      />
    </Box>
    <Stack pt={10} align={'center'}>
      <Text color={'green.500'} fontSize={'sm'} textTransform={'uppercase'}>
        {title}
      </Text>
      <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} color={"black.600"}>
        {description}
      </Heading>
    </Stack>
  </Box>
);


const Services = () =>{
        const services = [
  {
    title: "order Management",
    description: "Barcode Scanning, Invoicing, & More radical frequency Inventory Software.",
    image: "https://res.cloudinary.com/dcxx1ug2n/image/upload/v1689240661/afkzdj7ymjp7x8c2zsks.jpg",

  },
  {
    title: "Stock Management",
    description: "Stock management is the practice of ordering, storing, tracking, and inventory.",
    image: "https://res.cloudinary.com/dcxx1ug2n/image/upload/v1689240937/kavhjmkp7fq0wew4gjh5.png",

  },
  {
    title: "Warehouse Management",
    description: "Ecommerce focused Warehouse solution for 99.9% Inventory visibility.",
    image: "https://res.cloudinary.com/dcxx1ug2n/image/upload/v1689241084/ewfw/tyrhrfk0judnyhgtsxt3.jpg",

  },
  {
    title: "Bussiness Management",
    description: "Business management is the process of planning, organizing, directing.",
    image: "https://res.cloudinary.com/dcxx1ug2n/image/upload/v1689241253/ewwf/w4djzr1uduzlxbhucdep.jpg",

  },
  {
    title: "Sales Management",
    description: "It is a transfer of product from the manufacturer in exchange for the money.",
    image: "https://res.cloudinary.com/dcxx1ug2n/image/upload/v1689243006/fsfe/rzedjvly93eguajyezdh.png",

  },

];
  return (
    <div>
      <Heading fontSize={{ base: "2x1", sm: "4x1" }}
        fontWeight={"bold"}
        color={"eer.900"}
      >
       <Heading><center><strong>Product Services</strong></center></Heading>
      </Heading>
      <Center py={12}>
        <Wrap spacing={12} justify="center">
          <WrapItem>
            <ServiceBox
              title={services[0].title}
              description={services[0].description}
              image={services[0].image}
            />
          </WrapItem>
          <WrapItem>
            <ServiceBox
              title={services[1].title}
              description={services[1].description}
              image={services[1].image}
            />
          </WrapItem>
        </Wrap>
        <Wrap spacing={12} justify="center" mt={7}>
          <WrapItem>
            <ServiceBox
              title={services[2].title}
              description={services[2].description}
              image={services[2].image}
            />
          </WrapItem>
          <WrapItem>
            <ServiceBox
              title={services[3].title}
              description={services[3].description}
              image={services[3].image}
            />
          </WrapItem>
          <WrapItem>
            <ServiceBox
              title={services[4].title}
              description={services[4].description}
              image={services[4].image}
            />
          </WrapItem>
        </Wrap>
      </Center>
    </div>

  );
  };
  export default Services;
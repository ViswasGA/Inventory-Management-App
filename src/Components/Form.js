import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';
import { useDispatch,useSelector } from 'react-redux';
import Creates from './Navbar/Creation';
import Tables from './Navbar/Tables';
import {useNavigate} from 'react-router-dom';

export default function SplitScreen() {
  const dispatch=useDispatch();
  const username=useSelector((state)=>state.username);
  const navigate = useNavigate();
  const handlers =(event)=>
  {
    navigate("/all");
      alert("signed in successfully");
  }
const handleChange=(e)=>{
  dispatch({type: "SET_USERNAME",payload: e.target.value});
}


  return (
    <div>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <FormControl id="name">
            <strong><FormLabel>User name:</FormLabel></strong>
            <Input type="text"  onChange={handleChange} required/>
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email"  onChange={handleChange} required/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" required/>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'} onClick={handlers}>
              Sign in 
            </Button>
             <strong><button style={{fontSize:20}}>UPDATED DETAILS:{username}</button></strong>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://res.cloudinary.com/dcxx1ug2n/image/upload/v1689241253/ewwf/w4djzr1uduzlxbhucdep.jpg'
          }
        />
      </Flex>
    </Stack>
    </div>
  );
}
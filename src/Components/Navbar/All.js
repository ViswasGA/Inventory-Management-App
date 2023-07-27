import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import About from './About';
import Sidebar from './Sidebar';
import Home from './Home';
import Stock from './Stock';
import Heading  from './Heading';
import Orders from './Orders';
import Headline from './Headline';
import Social from './Social';
// import Nav from './Navbar';
// import Table from './table';
function All() {
  return (
    <div>
      <ChakraProvider>
        <Home/>
        <Heading/>
        <About/>
        <Orders/>
        <Stock/>
      </ChakraProvider>
    </div>
  )
}

export default All;

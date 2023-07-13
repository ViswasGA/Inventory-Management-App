import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import About from './About';
import Sidebar from './Sidebar';
import Home from './Home';
import Stock from './Stock';
import Heading  from './Heading';
import Card from './Card';
function All() {
  return (
    <div>
      <ChakraProvider>
        <Home/>
        <Heading/>
        <About/>
        <Stock/>
      </ChakraProvider>
    </div>
  )
}

export default All;

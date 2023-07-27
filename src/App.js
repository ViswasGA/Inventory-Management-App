import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Navbar/Home";
import About from "./Components/Navbar/About";
import Orders from "./Components/Navbar/Orders";
import Stock from "./Components/Navbar/Stock";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Form";
// import { Register } from "./Components/register";
import Sidebar from "./Components/Navbar/Sidebar";
import { ChakraProvider } from "@chakra-ui/react";
import All from "./Components/Navbar/All";
import Nav from "./Components/Navbar/Navbar"; 
// import PostCard from "./Components/Navbar/Card";
// import { Log } from "./Components/Form";
import { Provider } from "react-redux";
import Store from "./Components/Navbar/Store";
// import Price from "./Components/Navbar/Price";
import Tables from "./Components/Navbar/Tables";
import Creates from "./Components/Navbar/Creation";
import Register from "./Components/register";
import Form from "./Components/Form";
function App() {
  return (
    <ChakraProvider>
      <Provider store={Store}>
    { <Router>
      <Nav/>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/About" element={<About />} />
        <Route path="/Stock" element={<Stock />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        
      </Routes>
    </Router> }
      {/* <Sidebar/> */}
      </Provider>
    </ChakraProvider>
  );
  
}

export default App;

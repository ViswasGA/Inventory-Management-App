import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"
import "../Styles/NavbarStyles.css";
import { useSelector } from 'react-redux';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {setClick(!click);
  }
  const username=useSelector((state)=>state.username);
  return (
    <div className="header">
      < Link to="/"> 
        {/* <h1>Sign Up</h1>      */}
      </Link>
      <ul className={click? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/Login"><h1>Login</h1></Link>
        </li>
        <li>
          <Link to="/Register"><h1>Register</h1></Link>
        </li>
        <li>
          <Link to="/"><h1>Home</h1></Link>
        </li>

        <li>
          <Link to="/About"><h1>About</h1></Link>
        </li>
        <li>
          <Link to="/Orders"><h1>Orders</h1></Link>
        </li>
        <li>
          <Link to="/Stock"><h1>Stock</h1></Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "white" }} />) : (<FaBars size={20} style={{ color: "white" }} />)}
      </div>
    </div>
  )
}

export default Navbar;
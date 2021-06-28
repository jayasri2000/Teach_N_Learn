import React from 'react';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className="nav">
        <div className="topnav" id="myTopnav">
        <a href="#home">Home</a>
  <a href="#profile">About Me</a>
  <a href="#offer">My Course</a>
  <a href="#content">What to expect</a>
  <a href="#login">LogIn</a>
  <a href="#contact">Contact Me</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
            
        </div>
    )
}

export default Navbar

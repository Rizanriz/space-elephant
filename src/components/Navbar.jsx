import React from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Space Elephant Logo" />
      <div id="nav-part2">
        <h4><a href="#">Home</a></h4>
        <h4><a href="#">Portfolio</a></h4>
        <h4><a href="#">About Us</a></h4>
        <h4><a href="#">Contact Us</a></h4>
        <h4><a href="#">Blog</a></h4>
      </div>
      <h3>Menu</h3>
    </nav>
  );
};

export default Navbar;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineSearch } from 'react-icons/ai';
import { useEffect, useLayoutEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Header = () => {
 
  return (
    <div className="header">
      <Link className="productCard" to={`/testCrossCheck`}>
        About
      </Link>
      <Link className="productCard" to={`/test`}>
        Contact
      </Link>
      <Link className="productCard" to={`/testCrossCheck`}>
        Products
      </Link>
      <Link className="productCard" to={`/search`}>
        <AiOutlineSearch />
      </Link>
    </div>
  );
};

export default Header;

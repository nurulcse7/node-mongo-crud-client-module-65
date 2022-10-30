import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      className='mb-4 navbar sticky-top'
      expand='lg'
      bg='info'
      variant='light'
    >
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Brand>
          <Link to='/' className='web-title'>
            MongoDB CRUD
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav '>
          <Nav className='me-auto'>
            <Link to='/' className='home'>
              Home
            </Link>
            <Link to='/users/add' className='addUser'>
              AddUser
            </Link>
            <Link to='/update/:id' className='updateUser'>
              UpdateUser
            </Link>

            <Link to='/blog' className='blog'>
              Blog
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
        <Navbar expand="lg" bg="dark" variant='dark' collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Proshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex gap-3">
              <Nav.Link href="/cart"><i className='fas fa-shopping-cart me-2'></i>
                Cart
              </Nav.Link>
              <Nav.Link href="/login"><i className='fas fa-user me-2'></i>
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
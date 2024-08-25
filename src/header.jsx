import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" className="header" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/" onClick={() => setExpanded(false)}>JOHN DOE</Link>
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Accueil</Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={() => setExpanded(false)}>Services</Nav.Link>
            <Nav.Link as={Link} to="/realisation" onClick={() => setExpanded(false)}>Réalisation</Nav.Link>
            <Nav.Link as={Link} to="/blog" onClick={() => setExpanded(false)}>Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Me contacter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
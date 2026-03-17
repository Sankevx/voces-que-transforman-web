import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/Transformando1.png";
import "../../styles/navbar.css";



const CustomNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>

        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center navbar-brand-text">
          <img
            src={logo}
            width="50"
            height="50"
            className="me-2 navbar-logo"
            alt="Voces Que Transforman Logo"
          />
          Voces Que Transforman
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mx-auto">

            <Nav.Link as={Link} to="/" className="nav-link-custom">
              INICIO
            </Nav.Link>

            <Nav.Link as={Link} to="/biblioteca" className="nav-link-custom">
              BIBLIOTECA
            </Nav.Link>

            <Nav.Link as={Link} to="/nosotros" className="nav-link-custom">
              NOSOTROS
            </Nav.Link>

            <Nav.Link as={Link} to="/voluntarios" className="nav-link-custom">
              VOLUNTARIOS
            </Nav.Link>

            <Link to="/login">
               <button>Iniciar sesión</button>
            </Link>

          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar..."
              className="me-2 search-input"
            />

            <Button className="search-button">
              Buscar
            </Button>
          </Form>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
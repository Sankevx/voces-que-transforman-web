import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/heroSection.css";

const HeroSection = () => {
  return (

    <div className="hero-container">

      <Container className="hero-content text-center">
        <Row className="justify-content-center">

          <Col md={8}>
            <h1 className="hero-title">
              VOCES QUE TRANSFORMAN
            </h1>

            <p className="hero-description">
              Bienvenido a la biblioteca sonora de nuestra fundación.
              Escucha las historias, experiencias y voces de las personas
              que hacen parte de esta comunidad.
            </p>

            <Link to="/biblioteca">
              <Button className="hero-button">
                Explorar Audiolibros
              </Button>
            </Link>
          </Col>

        </Row>
      </Container>

    </div>

  );
};

export default HeroSection;
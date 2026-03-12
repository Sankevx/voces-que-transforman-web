import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../styles/aboutSection.css";

const AboutSection = () => {
  return (
    <Container className="about-section">
      <Row className="align-items-center">

        <Col md={6}>
          <h2 className="about-title">Sobre la Fundación</h2>

          <p className="about-text">
            La Fundación Transformando Vidas trabaja para visibilizar historias
            de resiliencia, esperanza y transformación social a través de la
            narración de experiencias reales de nuestra comunidad.
          </p>

          <p className="about-text">
            Creemos que cada historia tiene el poder de inspirar, generar empatía
            y transformar vidas.
          </p>

          <Button className="about-btn">
            Conocer más
          </Button>
        </Col>

        <Col md={6} className="text-center">
          <img
            src="https://via.placeholder.com/500x350"
            alt="Fundación"
            className="about-image"
          />
        </Col>

      </Row>
    </Container>
  );
};

export default AboutSection;
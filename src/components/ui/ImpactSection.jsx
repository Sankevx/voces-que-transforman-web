import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../styles/impactSection.css";

const ImpactSection = () => {
  return (
    <Container className="impact-section">

      <h2 className="impact-title">
        Nuestro Impacto
      </h2>

      <Row>

        <Col md={4}>
          <Card className="impact-card">
            <Card.Body>
              <Card.Title>🎧 Biblioteca Sonora</Card.Title>
              <Card.Text>
                Historias narradas por personas que han vivido procesos de
                transformación y superación.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="impact-card">
            <Card.Body>
              <Card.Title>🤝 Comunidad</Card.Title>
              <Card.Text>
                Trabajamos con diferentes comunidades para compartir sus
                experiencias y fortalecer sus voces.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="impact-card">
            <Card.Body>
              <Card.Title>🌱 Esperanza</Card.Title>
              <Card.Text>
                Cada historia tiene el poder de inspirar empatía y generar
                cambios positivos en la sociedad.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
};

export default ImpactSection;
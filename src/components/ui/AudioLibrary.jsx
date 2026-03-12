import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/audioLibrary.css";

const audiolibros = [
  {
    id: 1,
    titulo: "Voces de Sabiduría",
    descripcion: "Historias y recuerdos de nuestros abuelos",
    clase: "sabiduria",
    ruta: "/voces-sabiduria"
  },
  {
    id: 2,
    titulo: "Historias de la Calle",
    descripcion: "Relatos de resiliencia y esperanza",
    clase: "calle",
    ruta: "/historias-calle"
  },
  {
    id: 3,
    titulo: "Huellas de Esperanza",
    descripcion: "Historias de animales que buscan un hogar",
    clase: "animales",
    ruta: "/huellas-esperanza"
  },
  {
    id: 4,
    titulo: "Pequeños Guerreros",
    descripcion: "Valentía y esperanza de niños luchadores",
    clase: "ninos",
    ruta: "/pequenos-guerreros"
  }
];

const AudioLibrary = () => {
  return (
    <div className="audio-library-container" id="biblioteca">
      <h2 className="audio-library-title">
        Nuestra Biblioteca Sonora
      </h2>

      <Row>
        {audiolibros.map((audio) => (
          <Col key={audio.id} sm={12} md={6} lg={3} className="mb-4">
            <Card className="audio-card h-100 shadow-sm">
              <div className={`audio-img ${audio.clase}`}></div>

              <Card.Body className="d-flex flex-column">
                <Card.Title>{audio.titulo}</Card.Title>

                <Card.Text>
                  <small className="text-muted">{audio.descripcion}</small>
                </Card.Text>

                <Link to={audio.ruta} className="mt-auto">
                  <Button className="audio-btn w-100">
                    Explorar
                  </Button>
                </Link>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AudioLibrary;
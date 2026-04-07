// components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#fdf2e9' }} className="mt-5 pt-5 pb-3">
      <Container>
        <Row className="text-center text-md-start">

          {/* Información */}
          <Col md={4} className="mb-4">
            <h5>Voces Que Transforman</h5>
            <p className="text-muted">
              Fundación enfocada en la inclusión social, cultural y el fortalecimiento de las voces comunitarias.
            </p>
          </Col>

          {/* Contacto */}
          <Col md={4} className="mb-4">
            <h5>Contacto</h5>
            <p className="mb-1">📞 7866146275 - 3228567540 </p>
            <p className="mb-1">📧 fundatransformandovidas1@gmail.com</p>
            <p className="mb-0">📍 Bogotá, Colombia</p>
          </Col>

          {/* Redes Sociales */}
          <Col md={4} className="mb-4">
            <h5>Síguenos</h5>

            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-2">

              <a
                href="https://chat.whatsapp.com/KRah4aLjRSBK3MUZobB2p5?mode=wwt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-4"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.instagram.com/fundatransformandovidas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-4"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/Fundatransformandovidas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark fs-4"
              >
                <FaFacebook />
              </a>

            </div>
          </Col>

        </Row>

        <hr />

        <div className="text-center small text-muted">
          © 2026 Voces Que Transforman - Todos los derechos reservados <br />
          <span>“Todas las voces merecen ser escuchadas”</span>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
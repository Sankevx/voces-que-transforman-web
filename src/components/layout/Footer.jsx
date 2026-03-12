// components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-5 py-4" style={{ backgroundColor: '#fdf2e9' }}>
      <Container className="text-center">
        <p className="mb-0">© 2025 Voces Que Transforman - Fundación para la inclusión y la cultura</p>
        <p className="small text-muted">Todas las voces merecen ser escuchadas</p>
      </Container>
    </footer>
  );
};

export default Footer;
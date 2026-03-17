import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/Voluntarios.css";

const Voluntarios = () => {

  useEffect(() => {
    const cards = document.querySelectorAll(".vol-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div className="voluntarios-section">
      <Container>

        {/* HEADER */}
        <h1 className="voluntarios-title">Voluntariado</h1>
        <p className="voluntarios-subtitle">
          Únete a nuestro equipo y transforma vidas. Tu apoyo permite llevar ayuda
          a quienes más lo necesitan.
        </p>

        <Row className="g-4">

          {/* COMO AYUDAR */}
          <Col md={6}>
            <Card className="vol-card">
              <div className="vol-icon">🤝</div>
              <h4>¿Cómo puedes ayudar?</h4>
              <ul>
                <li>Asistiendo a brigadas de entrega de mercados.</li>
                <li>Ayudando a conseguir donaciones.</li>
                <li>Compartiendo información en redes sociales.</li>
                <li>Participando en concursos y eventos para recaudar fondos.</li>
                <li>Proponiendo ideas para ayudar a quienes lo necesitan.</li>
                <li>
                  Si eres profesional, puedes dar charlas virtuales a madres cabeza
                  de familia y voluntarios.
                </li>
                <li>
                  Donando dinero para la compra de mercados (con reportes
                  transparentes semanales).
                </li>
              </ul>
            </Card>
          </Col>

          {/* ACTIVIDADES */}
          <Col md={6}>
            <Card className="vol-card">
              <div className="vol-icon">🎯</div>
              <h4>¿Qué tipo de actividades realizamos?</h4>
              <ul>
                <li>Apoyo a habitantes de calle.</li>
                <li>Brigadas de alimentación.</li>
                <li>Ayuda a perritos de la calle.</li>
                <li>Visitas a niños con enfermedades.</li>
                <li>Visitas a adultos mayores.</li>
                <li>Actividades recreativas.</li>
                <li>Entrega de mercados.</li>
                <li>Cumplimiento de sueños.</li>
                <li>Actividades en barrios vulnerables.</li>
                <li>Trabajo con niños de Ciudad Bolívar.</li>
                <li>Apoyo a madres cabeza de familia.</li>
                <li>Inclusión de población con discapacidad.</li>
                <li>Actividades de integración y crecimiento personal.</li>
                <li>Eventos para recaudar fondos.</li>
              </ul>
            </Card>
          </Col>

          {/* ORGANIZACIÓN */}
          <Col md={6}>
            <Card className="vol-card">
              <div className="vol-icon">📋</div>
              <h4>Organización de actividades</h4>
              <p>
                Para cada actividad se publica una lista donde debes registrar tu
                nombre y número de contacto. Esto nos permite organizar la logística,
                conocer la cantidad de asistentes y planificar transporte.
              </p>
              <p>
                Es muy importante el compromiso. Si te inscribes y no asistes,
                puedes afectar la organización y costos del grupo.
              </p>
            </Card>
          </Col>

          {/* FAQ */}
          <Col md={6}>
            <Card className="vol-card">
              <div className="vol-icon">❓</div>
              <h4>Preguntas frecuentes</h4>

              <p><strong>¿Puedo llevar amigos o familiares?</strong><br/>
              Sí, siempre serán bienvenidos.</p>

              <p><strong>¿Soy menor de edad?</strong><br/>
              Puedes participar con autorización de tus padres.</p>

              <p><strong>¿Puedo hacer servicio social del colegio?</strong><br/>
              Sí, debes contactarnos y enviar tus datos, colegio y horas requeridas.</p>

              <p><strong>¿Reciben universitarios?</strong><br/>
              Sí, se coordina con la universidad para formalizar el proceso.</p>

            </Card>
          </Col>

        </Row>

        {/* STATS */}
        <Row className="vol-stats">
          <Col md={4} className="vol-stat-box">
            <h3>+500</h3>
            <p>Personas beneficiadas</p>
          </Col>

          <Col md={4} className="vol-stat-box">
            <h3>+50</h3>
            <p>Voluntarios activos</p>
          </Col>

          <Col md={4} className="vol-stat-box">
            <h3>+100</h3>
            <p>Actividades realizadas</p>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Voluntarios;
import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPodcast, FaUsers, FaSeedling } from "react-icons/fa";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../styles/impactSection.css";

const ImpactSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (

    <section className="impact-section">

      <Container>

        <div className="impact-header" data-aos="fade-up">

          <h2 className="impact-title">
            Nuestro Impacto
          </h2>

          <p className="impact-subtitle">
            A través de nuestras iniciativas buscamos visibilizar historias,
            fortalecer comunidades y generar esperanza en diferentes sectores
            de la sociedad.
          </p>

        </div>


        <Row className="g-4">

          <Col md={4} data-aos="zoom-in">

            <Card className="impact-card text-center">

              <Card.Body>

                <div className="impact-icon">
                  <FaPodcast />
                </div>

                <Card.Title>Biblioteca Sonora</Card.Title>

                <Card.Text>
                  Historias narradas por personas que han vivido procesos
                  de transformación y superación personal.
                </Card.Text>

              </Card.Body>

            </Card>

          </Col>


          <Col md={4} data-aos="zoom-in" data-aos-delay="200">

            <Card className="impact-card text-center">

              <Card.Body>

                <div className="impact-icon">
                  <FaUsers />
                </div>

                <Card.Title>Comunidad</Card.Title>

                <Card.Text>
                  Trabajamos con diferentes comunidades para compartir
                  experiencias, fortalecer sus voces y generar impacto social.
                </Card.Text>

              </Card.Body>

            </Card>

          </Col>


          <Col md={4} data-aos="zoom-in" data-aos-delay="400">

            <Card className="impact-card text-center">

              <Card.Body>

                <div className="impact-icon">
                  <FaSeedling />
                </div>

                <Card.Title>Esperanza</Card.Title>

                <Card.Text>
                  Cada historia tiene el poder de inspirar empatía
                  y promover cambios positivos en la sociedad.
                </Card.Text>

              </Card.Body>

            </Card>

          </Col>

        </Row>


        {/* ESTADISTICAS */}

        <Row className="impact-stats text-center">

          <Col md={3} data-aos="fade-up">

            <div className="stat-box">

              <h3>
                <CountUp end={600} duration={3} />+
              </h3>

              <p>Voluntarios</p>

            </div>

          </Col>


          <Col md={3} data-aos="fade-up" data-aos-delay="150">

            <div className="stat-box">

              <h3>
                <CountUp end={8} duration={3} />+
              </h3>

              <p>Años de trabajo</p>

            </div>

          </Col>


          <Col md={3} data-aos="fade-up" data-aos-delay="300">

            <div className="stat-box">

              <h3>
                <CountUp end={100} duration={3} />+
              </h3>

              <p>Actividades sociales</p>

            </div>

          </Col>


          <Col md={3} data-aos="fade-up" data-aos-delay="450">

            <div className="stat-box">

              <h3>
                <CountUp end={20} duration={3} />+
              </h3>

              <p>Comunidades impactadas</p>

            </div>

          </Col>

        </Row>

      </Container>

    </section>

  );

};

export default ImpactSection;
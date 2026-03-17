import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import { FaHandsHelping, FaHandshake, FaHeart } from "react-icons/fa";
import "../../styles/aboutSection.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import img1 from "../../assets/images/HabitantesCalle2.jpg";
import img2 from "../../assets/images/Niños1.jpg";
import img3 from "../../assets/images/Niños3.jpg";
import img4 from "../../assets/images/animales1.jpg";
import img5 from "../../assets/images/abuelos1.jpg";
import heroImg from "../../assets/images/voluntarios.jpg";

const AboutSection = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  return (
    <div className="about-wrapper">

      {/* HERO */}
      <div
        className="about-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="about-overlay">
          <h1>Fundación Transformando Vidas</h1>

          <p className="hero-subtitle">
            Un movimiento de voluntarios comprometidos con generar
            impacto social en las comunidades más necesitadas de Bogotá.
          </p>
        </div>
      </div>

      <Container className="about-section">

        <Row className="align-items-center">

          {/* HISTORIA */}
          <Col md={6}>
            <div className="about-card">

              <h2 className="about-title">
                Nuestra Historia
              </h2>

              <p>
                Somos un movimiento de alrededor de <strong>600 voluntarios</strong>
                con más de <strong>8 años de trabajo social</strong> y legalmente
                constituidos en el año 2019.
              </p>

              <p>
                Gracias a la iniciativa de nuestra fundadora
                <strong> Daniela Ardila</strong>, desarrollamos programas sociales
                enfocados en comunidades vulnerables de Bogotá.
              </p>

              <p>
                A través de talleres pedagógicos, actividades culturales
                y procesos comunitarios promovemos la participación
                ciudadana, el emprendimiento y el valor por la vida.
              </p>

            </div>
          </Col>

          {/* GALERIA */}
          <Col md={6}>

            <Carousel
              fade
              interval={3500}
              pause="hover"
              className="about-carousel"
            >

              <Carousel.Item>
                <img className="d-block w-100 about-image" src={img1} alt="Actividad 1"/>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100 about-image" src={img2} alt="Actividad 2"/>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100 about-image" src={img3} alt="Actividad 3"/>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100 about-image" src={img4} alt="Actividad 4"/>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100 about-image" src={img5} alt="Actividad 5"/>
              </Carousel.Item>

            </Carousel>

          </Col>

        </Row>
        
        <Row className="about-mision-vision">

          <Col md={6}>
            <div className="mv-card">
              <h3>Misión</h3>
              <p>
                Trabajar con comunidades vulnerables mediante programas sociales,
                educativos y humanitarios que promuevan la solidaridad, el
                desarrollo personal y la transformación social.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="mv-card">
              <h3>Visión</h3>
              <p>
                Ser una fundación referente en Colombia por su impacto social,
                fortaleciendo redes de voluntariado y generando oportunidades
                para poblaciones en situación de vulnerabilidad.
              </p>
            </div>
          </Col>

        </Row>

        {/* VALORES */}
        <Row className="about-values text-center g-4" >

          <Col md={4} className="value-box">
            <FaHeart className="value-icon"/>
            <h4>Solidaridad</h4>
            <p>
              Creemos en la empatía y el apoyo mutuo como motor
              de transformación social.
            </p>
          </Col>

          <Col md={4} className="value-box">
            <FaHandshake className="value-icon"/>
            <h4>Compromiso</h4>
            <p>
              Trabajamos con responsabilidad y dedicación para
              generar impacto real en cada comunidad.
            </p>
          </Col>

          <Col md={4} className="value-box">
            <FaHandsHelping className="value-icon"/>
            <h4>Comunidad</h4>
            <p>
              Construimos redes de apoyo que fortalecen el
              tejido social.
            </p>
          </Col>

        </Row>

        <Row className="about-areas text-center">

          <h2 className="areas-title">Nuestras Áreas de Trabajo</h2>

          <Col md={3}>
            <div className="area-card">
              <h5>Niños</h5>
              <p>Programas educativos y recreativos.</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="area-card">
              <h5>Habitantes de calle</h5>
              <p>Entrega de alimentos y acompañamiento.</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="area-card">
              <h5>Animales</h5>
              <p>Apoyo a campañas de bienestar animal.</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="area-card">
              <h5>Adultos mayores</h5>
              <p>Actividades de acompañamiento y apoyo.</p>
            </div>
          </Col>

        </Row>
      <div className="about-cta">

        <h2>¿Quieres ser parte del cambio?</h2>

        <p>
          Únete a nuestra comunidad de voluntarios y ayúdanos a
          transformar vidas en diferentes comunidades de Bogotá.
        </p>

        <Link to="/contacto">
          <button className="cta-btn">
            Quiero ser voluntario
          </button>
        </Link>

      </div>

      </Container>
    </div>

    
    
  );
};

export default AboutSection;
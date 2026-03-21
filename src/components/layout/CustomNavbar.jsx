import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import Fuse from "fuse.js";
import logo from "../../assets/icons/Transformando1.png";
import "../../styles/navbar.css";

const CustomNavbar = () => {

  const [user, setUser] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [audios, setAudios] = useState([]);

  const navigate = useNavigate();

  // 🔐 SESIÓN
  useEffect(() => {

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };

  }, []);

  // 🔥 CARGAR AUDIOS PARA BUSCADOR
  useEffect(() => {
    const cargarAudios = async () => {
      const { data } = await supabase.from("audios").select("*");
      setAudios(data || []);
    };

    cargarAudios();
  }, []);

  // 🔍 BUSCADOR INTELIGENTE
  const handleSearch = () => {

  const texto = busqueda.toLowerCase();

  // 🔥 1. BUSCAR RUTAS (PÁGINAS)
  if (texto.includes("inicio")) return navigate("/");
  if (texto.includes("biblioteca")) return navigate("/biblioteca");
  if (texto.includes("nosotros")) return navigate("/nosotros");
  if (texto.includes("voluntarios")) return navigate("/voluntarios");

  // 🔍 2. BUSCAR EN AUDIOS
  const fuse = new Fuse(audios, {
    keys: ["titulo", "descripcion", "categoria"],
    threshold: 0.4,
  });

  const resultados = fuse.search(busqueda);
  const datosFiltrados = resultados.map(r => r.item);

  navigate("/resultados", { state: { resultados: datosFiltrados } });
};
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>

        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center navbar-brand-text">
          <img
            src={logo}
            width="50"
            height="50"
            className="me-2 navbar-logo"
            alt="logo"
          />
          Voces Que Transforman
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

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

            {/* LOGIN / LOGOUT */}
            {!user ? (
              <Button as={Link} to="/login" className="login-btn">
                Iniciar sesión
              </Button>
            ) : (
              <Button
                className="login-btn"
                onClick={async () => await supabase.auth.signOut()}
              >
                Cerrar sesión
              </Button>
            )}

          </Nav>

          {/* 🔍 BUSCADOR */}
          <Form
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <FormControl
              type="search"
              placeholder="Buscar..."
              className="me-2 search-input"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />

            <Button className="search-button" onClick={handleSearch}>
              Buscar
            </Button>
          </Form>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
import React from "react";
import { Routes, Route } from "react-router-dom";

import CustomNavbar from "./components/layout/CustomNavbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Biblioteca from "./pages/Biblioteca";
import Nosotros from "./pages/Nosotros";
import HistoriasCalle from "./pages/HistoriasCalle";
import HuellasEsperanza from "./pages/HuellasEsperanza";
import PequenosGuerreros from "./pages/PequenosGuerreros";
import VocesSabiduria from "./pages/VocesSabiduria";
import AdminPanel from "./pages/AdminPanel";
import Contact from "./pages/Contact";

import AdminRoute from "./components/AdminRoute";
import GlobalAudioPlayer from "./components/audio/GlobalAudioPlayer";

function App() {

  return (

    <>

      {/* Navbar visible en todo el sitio */}
      <CustomNavbar />

      {/* Rutas del sitio */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contact />} />

        {/* Secciones de podcast */}
        <Route path="/voces-sabiduria" element={<VocesSabiduria />} />
        <Route path="/historias-calle" element={<HistoriasCalle />} />
        <Route path="/huellas-esperanza" element={<HuellasEsperanza />} />
        <Route path="/pequenos-guerreros" element={<PequenosGuerreros />} />

        {/* Panel admin protegido */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          }
        />

      </Routes>

      {/* Reproductor global (SIEMPRE ACTIVO) */}
      <GlobalAudioPlayer />

      {/* Footer global */}
      <Footer />

    </>

  );

}

export default App;
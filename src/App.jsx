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

function App() {
  return (
    <>
      <CustomNavbar />

      <Routes>

        {/* Página principal */}
        <Route path="/" element={<Home />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/nosotros" element={<Nosotros />} />
        
        {/* Secciones de la biblioteca */}
        <Route path="/voces-sabiduria" element={<VocesSabiduria />} />
        <Route path="/historias-calle" element={<HistoriasCalle />} />
        <Route path="/huellas-esperanza" element={<HuellasEsperanza />} />
        <Route path="/pequenos-guerreros" element={<PequenosGuerreros />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
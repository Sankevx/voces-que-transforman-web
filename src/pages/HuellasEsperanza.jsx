import React from "react";
import AudioCategoryPage from "../components/ui/AudioCategoryPage";

function HuellasEsperanza() {

   const isAdmin = false;
   
  return (
    <AudioCategoryPage
      title="Huellitas de la calle"
      description="Testimonios que muestran caminos de transformación y nuevas oportunidades."
      backgroundClass="bg-animales"
      categoria="animales"
      isAdmin={isAdmin}
    />
  );
}

export default HuellasEsperanza;
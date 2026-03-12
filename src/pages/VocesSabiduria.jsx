import React from "react";
import AudioCategoryPage from "../components/ui/AudioCategoryPage";

function VocesSabiduria() {
   
  const isAdmin = false;

  return (
    <AudioCategoryPage
      title="Voces de Sabiduría"
      description="Historias y reflexiones de personas mayores que comparten su experiencia de vida."
      backgroundClass="bg-abuelos"
      categoria="abuelos"
      isAdmin={isAdmin}
    />
  );
}

export default VocesSabiduria;
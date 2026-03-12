import React from "react";
import AudioCategoryPage from "../components/ui/AudioCategoryPage";

function PequenosGuerreros() {

  const isAdmin = false;
  
  return (
    <AudioCategoryPage
      title="Pequeños Guerreros"
      description="Historias de niños y niñas que enfrentan la vida con valentía y esperanza."
      backgroundClass="bg-niños"
      categoria="ninos"
      isAdmin={isAdmin}
    />
  );
}

export default PequenosGuerreros;
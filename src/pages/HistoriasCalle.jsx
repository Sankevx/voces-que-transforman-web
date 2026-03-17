import React from "react";
import AudioCategoryPage from "../components/ui/AudioCategoryPage";
import UploadAudio from "../components/admin/UploadAudio";

function HistoriasCalle() {

  const isAdmin = false;

  return (
    <>
      <AudioCategoryPage
        title="Historias de Calle"
        description="Relatos de resiliencia y superación de personas que han vivido en la calle."
        backgroundClass="bg-habitantesCalle"
        categoria="habitantes"
        isAdmin={isAdmin}
      />

      {isAdmin && <UploadAudio categoria="habitantes" />}
    </>
  );
}

export default HistoriasCalle;
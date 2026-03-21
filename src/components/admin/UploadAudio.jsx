import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

function UploadAudio() {

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("habitantesCalle");
  const [audioFile, setAudioFile] = useState(null);
  const [imagenFile, setImagenFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const subirAudio = async () => {

    if (!audioFile) {
      alert("Selecciona un audio");
      return;
    }

    setLoading(true);

    try {

      // 🔥 1. NOMBRE ÚNICO Y LIMPIO
      const audioNombre = `audios/${Date.now()}-${audioFile.name}`;

      // 🔥 2. SUBIR AUDIO
      const { error: audioError } = await supabase.storage
        .from("audios")
        .upload(audioNombre, audioFile);

      if (audioError) {
        console.error(audioError);
        alert("Error subiendo audio");
        setLoading(false);
        return;
      }

      // 🔥 3. OBTENER URL PÚBLICA
      const { data: audioData } = supabase.storage
        .from("audios")
        .getPublicUrl(audioNombre);

      let imagenUrl = null;
      let imagenPath = null;

      // 🔥 4. SUBIR IMAGEN (SI EXISTE)
      if (imagenFile) {

        imagenPath = `imagenes/${Date.now()}-${imagenFile.name}`;

        const { error: imgError } = await supabase.storage
          .from("audios") // mismo bucket (puedes separarlo si quieres)
          .upload(imagenPath, imagenFile);

        if (!imgError) {

          const { data: imgData } = supabase.storage
            .from("audios")
            .getPublicUrl(imagenPath);

          imagenUrl = imgData.publicUrl;
        }
      }

      // 🔥 5. GUARDAR TAMBIÉN EL PATH (CLAVE PARA BORRAR BIEN)
const { error: dbError } = await supabase.from("audios").insert([
  {
    titulo,
    descripcion,
    categoria,
    audio_url: audioData.publicUrl,
    audio_path: audioNombre,
    imagen_url: imagenUrl,
    imagen_path: imagenPath
  }
]);

if (dbError) {
  console.error("ERROR BD COMPLETO:", dbError);
  alert(JSON.stringify(dbError));
  return;
}

      alert("Audio subido correctamente");

      // 🔥 LIMPIAR FORMULARIO
      setTitulo("");
      setDescripcion("");
      setCategoria("habitantesCalle");
      setAudioFile(null);
      setImagenFile(null);

    } catch (error) {
      console.error("Error inesperado:", error);
    }

    setLoading(false);
  };

  return (

    <div className="upload-audio-box">

      <h3>Subir nuevo podcast</h3>

      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="habitantesCalle">Habitantes de calle</option>
        <option value="animales">Animales abandonados</option>
        <option value="ninos">Niños con cáncer</option>
        <option value="abuelos">Adultos mayores</option>
      </select>

      <input
        type="file"
        accept="audio/*"
        onChange={(e) => setAudioFile(e.target.files[0])}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImagenFile(e.target.files[0])}
      />

      <button onClick={subirAudio} disabled={loading}>
        {loading ? "Subiendo..." : "Subir audio"}
      </button>

    </div>
  );
}

export default UploadAudio;
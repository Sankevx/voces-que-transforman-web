import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useAudioPlayer } from "../../context/AudioPlayerContext";

function AudioList({ categoria, isAdmin }) {

  const [audios, setAudios] = useState([]);
  const [loading, setLoading] = useState(true);

  const { playAudio } = useAudioPlayer();

  const cargarAudios = async () => {

    console.log("Categoria recibida:", categoria);

    const categoriasMap = {
      habitantes: "habitantesCalle",
      animales: "animales",
      ninos: "ninos",
      abuelos: "abuelos"
    };

    const categoriaNormalizada = categoriasMap[categoria] || categoria;

    setLoading(true);

    const { data, error } = await supabase
      .from("audios")
      .select("*")
      .eq("categoria", categoriaNormalizada)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error cargando audios:", error);
      setLoading(false);
      return;
    }

    setAudios(data || []);
    setLoading(false);
  };

  useEffect(() => {
    if (categoria) {
      cargarAudios();
    }
  }, [categoria]);

  // 🔥 FUNCIÓN MEJORADA
  const eliminarAudio = async (audio) => {

    const confirmar = window.confirm("¿Eliminar este audio?");
    if (!confirmar) return;

    try {
      // 1. Eliminar audio del storage
      if (audio.audio_url) {

       await supabase.storage
          .from("audios")
          .remove([audio.audio_path]);

        const { error: storageError } = await supabase.storage
          .from("audios") // ⚠️ nombre del bucket
          .remove([nombreArchivo]);

        if (storageError) {
          console.error("Error eliminando archivo de audio:", storageError);
        }
      }

      // 2. Eliminar imagen del storage (opcional pero PRO)
      if (audio.imagen_path) {

        const { error: imageError } = await supabase.storage
          .from("audios") // ⚠️ usa el mismo bucket donde guardaste la imagen
          .remove([audio.imagen_path]);

        if (imageError) {
          console.error("Error eliminando imagen:", imageError);
        }
      }

      // 3. Eliminar de la base de datos
      const { error: dbError } = await supabase
        .from("audios")
        .delete()
        .eq("id", audio.id);

      if (dbError) {
        console.error("Error eliminando audio:", dbError);
        alert("Error eliminando audio");
        return;
      }

      // 4. Actualizar estado sin recargar
      setAudios(prev => prev.filter(a => a.id !== audio.id));

    } catch (error) {
      console.error("Error inesperado:", error);
    }
  };

  if (loading) return <p>Cargando audios...</p>;

  if (audios.length === 0) {
    return <p>No hay audios disponibles aún.</p>;
  }

  return (

    <div className="audio-list">

      {audios.map((audio) => {

        const imagen =
          audio.imagen_url || "/src/assets/images/podcast-default.jpg";

        return (

          <div key={audio.id} className="audio-card">

            <div className="audio-card-top">

              <img
                src={imagen}
                alt="portada podcast"
                className="audio-cover"
              />

              <div className="audio-info">

                <h3>{audio.titulo}</h3>

                <p>{audio.descripcion}</p>

                <button
                  className="play-audio-btn"
                  onClick={() => playAudio(audio)}
                >
                  ▶ Escuchar historia
                </button>

                {isAdmin && (
                  <button
                    className="delete-audio-btn"
                    onClick={() => eliminarAudio(audio)} // 🔥 CAMBIO AQUÍ
                  >
                    Eliminar
                  </button>
                )}

              </div>

            </div>

          </div>

        );

      })}

    </div>

  );

}

export default AudioList;
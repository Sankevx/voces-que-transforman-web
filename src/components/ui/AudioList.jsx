import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useAudioPlayer } from "../../context/AudioPlayerContext";

function AudioList({ categoria, isAdmin }) {

  const [audios, setAudios] = useState([]);
  const [loading, setLoading] = useState(true);

  const { playAudio } = useAudioPlayer();

  const cargarAudios = async () => {

    setLoading(true);

    const { data, error } = await supabase
      .from("audios")
      .select("*")
      .eq("categoria", categoria)
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
    cargarAudios();
  }, [categoria]);

  const eliminarAudio = async (id) => {

    const confirmar = window.confirm("¿Eliminar este audio?");
    if (!confirmar) return;

    const { error } = await supabase
      .from("audios")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error eliminando audio:", error);
      return;
    }

    cargarAudios();
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
                    onClick={() => eliminarAudio(audio.id)}
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
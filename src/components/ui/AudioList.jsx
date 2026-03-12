import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

function AudioList({ categoria, isAdmin }) {

  const [audios, setAudios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const cargarAudios = async () => {

      const { data, error } = await supabase
        .from("audios")
        .select("*")
        .eq("categoria", categoria);

      if(error){
        console.log("Error cargando audios:", error);
        setLoading(false);
        return;
      }

      setAudios(data || []);
      setLoading(false);
    };

    cargarAudios();

  }, [categoria]);

  if(loading){
    return <p>Cargando audios...</p>;
  }

  if(audios.length === 0){
    return <p>No hay audios disponibles aún.</p>;
  }

  return (

    <div>

      {audios.map(audio => (

        <div key={audio.id}>

          <h3>{audio.titulo}</h3>

          <p>{audio.descripcion}</p>

          <audio controls src={audio.audio_url}></audio>

        </div>

      ))}

    </div>

  );
}

export default AudioList;
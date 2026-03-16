import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import UploadAudio from "../components/admin/UploadAudio";

function AdminPanel() {

  const [audios,setAudios] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    cargarAudios();

  },[]);

  const cargarAudios = async () => {

    const { data,error } = await supabase
      .from("audios")
      .select("*")
      .order("created_at",{ascending:false});

    if(error){
      console.log(error);
      return;
    }

    setAudios(data);
    setLoading(false);
  };

  const eliminarAudio = async(id)=>{

    const confirmar = window.confirm("¿Eliminar este audio?");

    if(!confirmar) return;

    const { error } = await supabase
      .from("audios")
      .delete()
      .eq("id",id);

    if(error){
      console.log(error);
      alert("Error eliminando audio");
      return;
    }

    setAudios(audios.filter(a=>a.id !== id));

  };

  if(loading){
    return <p>Cargando panel...</p>;
  }

  return(

    <div className="admin-panel">

      <h1>Panel de Administración</h1>

      <UploadAudio categoria="general"/>

      <h2>Audios subidos</h2>

      <div className="admin-audios">

        {audios.map(audio=>(
          
          <div key={audio.id} className="admin-audio-card">

            <h3>{audio.titulo}</h3>

            <p>{audio.descripcion}</p>

            <p><b>Categoría:</b> {audio.categoria}</p>

            <audio controls src={audio.audio_url}></audio>

            <button onClick={()=>eliminarAudio(audio.id)}>
              Eliminar
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default AdminPanel;
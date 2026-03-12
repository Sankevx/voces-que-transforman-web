import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

function UploadAudio({ categoria }) {

  const [titulo,setTitulo] = useState("");
  const [descripcion,setDescripcion] = useState("");
  const [file,setFile] = useState(null);

  const subirAudio = async () => {

    if(!file) {
      alert("Selecciona un audio");
      return;
    }

    const fileName = Date.now() + "-" + file.name;

    const { error } = await supabase.storage
      .from("audios")
      .upload(fileName,file);

    if(error){
      console.log(error);
      alert("Error subiendo audio");
      return;
    }

    const { data } = supabase.storage
      .from("audios")
      .getPublicUrl(fileName);

    await supabase.from("audios").insert([
      {
        titulo: titulo,
        descripcion: descripcion,
        categoria: categoria,
        audio_url: data.publicUrl
      }
    ]);

    alert("Audio subido correctamente");

  };

  return (

    <div>

      <h3>Subir audio</h3>

      <input
        type="text"
        placeholder="Título"
        onChange={(e)=>setTitulo(e.target.value)}
      />

      <input
        type="text"
        placeholder="Descripción"
        onChange={(e)=>setDescripcion(e.target.value)}
      />

      <input
        type="file"
        accept="audio/*"
        onChange={(e)=>setFile(e.target.files[0])}
      />

      <button onClick={subirAudio}>
        Subir audio
      </button>

    </div>

  );
}

export default UploadAudio;
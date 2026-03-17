import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

function UploadAudio() {

  const [titulo,setTitulo] = useState("");
  const [descripcion,setDescripcion] = useState("");
  const [categoria,setCategoria] = useState("habitantesCalle");
  const [audioFile,setAudioFile] = useState(null);
  const [imagenFile,setImagenFile] = useState(null);

  const subirAudio = async () => {

    if(!audioFile){
      alert("Selecciona un audio");
      return;
    }

    const audioNombre = Date.now() + "-" + audioFile.name;

    const { error: audioError } = await supabase.storage
      .from("audios")
      .upload(audioNombre,audioFile);

    if(audioError){
      console.log(audioError);
      alert("Error subiendo audio");
      return;
    }

    const { data: audioData } = supabase.storage
      .from("audios")
      .getPublicUrl(audioNombre);

    let imagenUrl = null;

    if(imagenFile){

      const imagenNombre = Date.now() + "-" + imagenFile.name;

      const { error: imgError } = await supabase.storage
        .from("audios")
        .upload(imagenNombre,imagenFile);

      if(!imgError){

        const { data: imgData } = supabase.storage
          .from("audios")
          .getPublicUrl(imagenNombre);

        imagenUrl = imgData.publicUrl;

      }

    }

    await supabase.from("audios").insert([
      {
        titulo,
        descripcion,
        categoria,
        audio_url: audioData.publicUrl,
        imagen_url: imagenUrl
      }
    ]);

    alert("Audio subido correctamente");

  };

  return (

    <div className="upload-audio-box">

      <h3>Subir nuevo podcast</h3>

      <input
        type="text"
        placeholder="Título"
        onChange={(e)=>setTitulo(e.target.value)}
      />

      <textarea
        placeholder="Descripción"
        onChange={(e)=>setDescripcion(e.target.value)}
      />

      <select onChange={(e)=>setCategoria(e.target.value)}>

        <option value="habitantesCalle">Habitantes de calle</option>
        <option value="animales">Animales abandonados</option>
        <option value="ninos">Niños con cáncer</option>
        <option value="abuelos">Adultos mayores</option>

      </select>

      <input
        type="file"
        accept="audio/*"
        onChange={(e)=>setAudioFile(e.target.files[0])}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e)=>setImagenFile(e.target.files[0])}
      />

      <button onClick={subirAudio}>
        Subir audio
      </button>

    </div>

  );
}

export default UploadAudio;
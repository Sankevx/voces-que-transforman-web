import { useLocation } from "react-router-dom";

function Resultados() {

  const location = useLocation();
  const resultados = location.state?.resultados || [];

  return (
    <div style={{ padding: "100px 20px" }}>
      <h2>Resultados de búsqueda</h2>

      {resultados.length === 0 ? (
        <p>No se encontraron resultados</p>
      ) : (
        resultados.map(audio => (
          <div key={audio.id} style={{ marginBottom: "20px" }}>
            <h3>{audio.titulo}</h3>
            <p>{audio.descripcion}</p>
          </div>
        ))
      )}

    </div>
  );
}

export default Resultados;
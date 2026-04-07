import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

function UpdatePassword() {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleUpdate = async () => {

    if (!password || !confirmPassword) {
      alert("Completa todos los campos");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Contraseña actualizada correctamente");
      navigate("/");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Nueva contraseña</h2>

        <input
          type="password"
          placeholder="Nueva contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button onClick={handleUpdate}>
          Cambiar contraseña
        </button>

      </div>
    </div>
  );
}

export default UpdatePassword;
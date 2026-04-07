import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

function RecuperarPassword() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRecovery = async () => {

    if (!email) {
      alert("Ingresa tu correo");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${import.meta.env.VITE_SITE_URL}/update-password`
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Revisa tu correo para cambiar la contraseña");
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Recuperar contraseña</h2>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleRecovery} disabled={loading}>
          {loading ? "Enviando..." : "Enviar enlace"}
        </button>

      </div>
    </div>
  );
}

export default RecuperarPassword;
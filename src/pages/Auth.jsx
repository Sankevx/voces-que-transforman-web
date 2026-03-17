import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

function Auth() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      alert("Correo o contraseña incorrectos");
      setLoading(false);
      return;
    }

    const user = data.user;

    // 🔍 Verificar rol
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("is_admin")
      .eq("id", user.id)
      .single();

    if (profileError) {
      alert("Error verificando permisos");
      setLoading(false);
      return;
    }

    // 🚀 Redirección inteligente
    if (profile?.is_admin) {
      navigate("/admin");
    } else {
      navigate("/biblioteca");
    }

    setLoading(false);
  };

  const handleRegister = async () => {

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      alert("Error al registrarse");
    } else {
      alert("Usuario creado. Ahora inicia sesión.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h2>Acceso</h2>

      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Cargando..." : "Iniciar sesión"}
      </button>

      <br /><br />

      <button onClick={handleRegister} disabled={loading}>
        Registrarse
      </button>
    </div>
  );
}

export default Auth;
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

function Auth() {

  const [isLogin, setIsLogin] = useState(true);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // 🔐 LOGIN
  const handleLogin = async () => {

    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }

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

    const { data: profile } = await supabase
      .from("profiles")
      .select("is_admin")
      .eq("id", user.id)
      .single();

    if (profile?.is_admin) {
      navigate("/admin");
    } else {
      navigate("/biblioteca");
    }

    setLoading(false);
  };

  // 📝 REGISTRO
  const handleRegister = async () => {

    if (!nombre || !email || !password || !confirmPassword) {
      alert("Completa todos los campos");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { nombre }
      }
    });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    alert("Cuenta creada correctamente");

    navigate("/biblioteca");

    setLoading(false);
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h2>{isLogin ? "Iniciar sesión" : "Crear cuenta"}</h2>

{/* Nombre solo en registro */}
{!isLogin && (
  <input
    type="text"
    placeholder="Nombre completo"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
  />
)}

{/* EMAIL (SOLO UNO) */}
<input
  type="email"
  placeholder="Correo electrónico"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

{/* PASSWORD */}
<input
  type="password"
  placeholder="Contraseña"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

{/* CONFIRMAR PASSWORD solo en registro */}
{!isLogin && (
  <input
    type="password"
    placeholder="Confirmar contraseña"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />
)}
        <button
          onClick={isLogin ? handleLogin : handleRegister}
          disabled={loading}
        >
          {loading
            ? "Cargando..."
            : isLogin
              ? "Iniciar sesión"
              : "Registrarse"}
        </button>

        <p
          className="auth-switch"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "¿No tienes cuenta? Crear una"
            : "Ya tengo cuenta"}
        </p>

      </div>

    </div>
  );
}

export default Auth;
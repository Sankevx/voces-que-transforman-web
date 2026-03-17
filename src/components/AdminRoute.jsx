import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {

  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {

    const checkAdmin = async () => {

      try {
        const { data: { user } } = await supabase.auth.getUser();

        // ❌ No hay sesión
        if (!user) {
          setUser(null);
          setLoading(false);
          return;
        }

        setUser(user);

        // 🔍 Consultar rol
        const { data, error } = await supabase
          .from("profiles")
          .select("is_admin")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error obteniendo perfil:", error);
          setLoading(false);
          return;
        }

        setIsAdmin(!!data?.is_admin);

      } catch (err) {
        console.error("Error general:", err);
      }

      setLoading(false);
    };

    checkAdmin();

  }, []);

  // ⏳ Mientras carga
  if (loading) {
    return <p>Verificando permisos...</p>;
  }

  // 🔒 No logueado → login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // 🔒 No admin → home o biblioteca
  if (!isAdmin) {
    return <Navigate to="/biblioteca" />;
  }

  // ✅ Admin autorizado
  return children;
}

export default AdminRoute;
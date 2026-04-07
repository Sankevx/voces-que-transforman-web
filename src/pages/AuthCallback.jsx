import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

function AuthCallback() {

  const navigate = useNavigate();

  useEffect(() => {

    const handleSession = async () => {

      const { data } = await supabase.auth.getSession();

      if (data?.session) {

        const user = data.session.user;

        // 🔍 Buscar rol
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

      } else {
        navigate("/");
      }
    };

    handleSession();

  }, [navigate]);

  return <p>Confirmando cuenta...</p>;
}

export default AuthCallback;
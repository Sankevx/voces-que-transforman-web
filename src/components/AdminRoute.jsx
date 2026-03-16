import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {

  const [loading,setLoading] = useState(true);
  const [isAdmin,setIsAdmin] = useState(false);

  useEffect(()=>{

    const checkAdmin = async ()=>{

      const { data:{user} } = await supabase.auth.getUser();

      if(!user){
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id",user.id)
        .single();

      if(data?.is_admin){
        setIsAdmin(true);
      }

      setLoading(false);

    };

    checkAdmin();

  },[]);

  if(loading){
    return <p>Verificando permisos...</p>;
  }

  if(!isAdmin){
    return <Navigate to="/" />;
  }

  return children;

}

export default AdminRoute;
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gdmacswymnizxiqbvawx.supabase.co";
const supabaseKey = "sb_publishable_npUeM5WCP-rj7zoAmWOe2w_-KLCUUIC";

export const supabase = createClient(supabaseUrl, supabaseKey);
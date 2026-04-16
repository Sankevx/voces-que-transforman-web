import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wqkiimizsrdwidnfftfg.supabase.co";
const supabaseKey = "sb_publishable_7KwplEQ331g-T4mrhSAROA_K-4jTNU6";

export const supabase = createClient(supabaseUrl, supabaseKey);
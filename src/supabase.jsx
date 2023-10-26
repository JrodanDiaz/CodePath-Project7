import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_URL;
const supabaseKey = import.meta.env.VITE_APIKEY;

const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;

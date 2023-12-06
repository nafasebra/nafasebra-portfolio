import { createClient } from "@supabase/supabase-js";

export const supabaseInit = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_KEY || ""
);

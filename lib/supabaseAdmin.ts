import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl =
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey =
    process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseSecretKey) {
    console.warn(
        "Supabase server environment variable (SUPABASE_SERVICE_ROLE_KEY or SUPABASE_SECRET_KEY) is missing. Supabase admin client will not be initialized."
    );
}

export const supabaseAdmin: SupabaseClient | null =
    supabaseUrl && supabaseSecretKey
        ? createClient(supabaseUrl, supabaseSecretKey, {
              auth: {
                  persistSession: false,
                  autoRefreshToken: false,
              },
          })
        : null;
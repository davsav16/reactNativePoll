import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mjoljwrthjjdccuclaxe.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qb2xqd3J0aGpqZGNjdWNsYXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyMzExMzUsImV4cCI6MjA0NTgwNzEzNX0.7eKGT8h8XWYMbeAnshBL3cAUhbfddjx0p3bNzPGjyvs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

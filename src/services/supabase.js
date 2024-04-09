import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://tkzouaxollvajkmzihrc.supabase.co";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrem91YXhvbGx2YWprbXppaHJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NzYwMTUsImV4cCI6MjAyODI1MjAxNX0.RUItrH1uYkzv0iN4OQ6lDLhizVunl1PjAtLMDUrSuV8";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;

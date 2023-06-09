import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://yciwytjuvbslrghfniat.supabase.co";
const supabaseAPIKEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljaXd5dGp1dmJzbHJnaGZuaWF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMjUxODMsImV4cCI6MjAwMTkwMTE4M30.LsP_mUbNlT0nr7mZtgOxm9cevizYtTk9cLixo_K4ewM";

export const supabase = createClient(supabaseURL, supabaseAPIKEY);

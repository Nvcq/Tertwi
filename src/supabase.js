import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tbecbpkmyshwyyclsitd.supabase.co";
const supabasePass = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiZWNicGtteXNod3l5Y2xzaXRkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0Nzg1ODA2OSwiZXhwIjoxOTYzNDM0MDY5fQ.EiEcgP3PSpUTr0JD4h22M0kKkYVsQVa9ApRDI3pw1mA";

export const supabase = createClient(supabaseUrl, supabasePass);

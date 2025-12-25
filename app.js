// app.js - Lógica de conexión con Supabase

// Configuración del cliente (Credenciales extraídas de tu index.html)
const SUPABASE_URL = 'https://hydmhaovulntaailfpjv.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5ZG1oYW92dWxudGFhaWxmcGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2MDQzMTEsImV4cCI6MjA4MjE4MDMxMX0.26S6m9rD7g8AVZ-tZvU6mWjBtdrv-5qKmHpxnlXQTl4';

// Inicializar cliente (Asegúrate de tener la librería de Supabase cargada en tu HTML)
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
export const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Función para obtener datos de la tabla 'login.html'.
 * Esta función funciona gracias a la política SQL:
 * create policy "public read" on login.html for select using (true);
 */
async function obtener(*loginhtml*)// Hacer la función accesible globalmente para usarla en la consola o botones HTML
{
    const { data, error } = await supabase
        .from('login.html')
        .select('*');
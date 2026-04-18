const supabaseUrl = 'https://ndtkcocdiixgzqwzgqjs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kdGtjb2NkaWl4Z3pxd3pncWpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDQxODUsImV4cCI6MjA5MTkyMDE4NX0.V5VcPhrnXcMF1rscbbrQVznGjmgdBovCxr8qlNSeiwY'
const client = supabase.createClient(supabaseUrl, supabaseKey)

export async function cargarDatos(funcion, nombreTabla) {
  let resultado = await client.from(nombreTabla).select("*");
  let datos = resultado.data || [];
  funcion(datos);
}
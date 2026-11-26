// Convierte fecha string en Date
const toDate = (str) => str ? new Date(str) : null;

// Unifica nombres (p.ej. "Santa Barbara" vs "Santa Bárbara")
const normalizeIngenioNombre = (nombre) =>
  (nombre || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

// Obtiene el rango correcto según el tipo
function getRangoFechas(ingenio, tipo) {
  switch (tipo) {
    case "zafra":
      return {
        inicio: toDate(ingenio.inicio_zafra),
        fin: toDate(ingenio.fin_zafra),
      };
    case "destileria":
      return {
        inicio: toDate(ingenio.inicio_destileria),
        fin: toDate(ingenio.fin_destileria),
      };
    case "anhidro":
      return {
        inicio: toDate(ingenio.inicio_anhidro),
        fin: toDate(ingenio.fin_anhidro),
      };
    default:
      return { inicio: null, fin: null };
  }
}

// Filtra un dataset por ingenio y rango
function filtrarDatasetPorIngenio(dataset, ingenio, tipo) {
  const { inicio, fin } = getRangoFechas(ingenio, tipo);
  const nombreIngenio = normalizeIngenioNombre(ingenio.nombre_ingenio);
  return dataset.filter(item => {
    if (normalizeIngenioNombre(item.ingenioNombre) !== nombreIngenio) return false;

    const fechaParte = new Date(item.fechaParte);

    // Inicio requerido, fin opcional
    if (!inicio) return false;
    if (fin && fechaParte > fin) return false;

    return fechaParte >= inicio;
  });
}

// --- USO --- //
export function procesarTodosLosIngenios(dateInicioIngeniosItemCollapse, dataZafra1, dataDestileria1, dataAnhidro1, regionProvincia) {
  const resultado = [];
  for (const ingenio of dateInicioIngeniosItemCollapse) {
    if (ingenio.id_region_ingenios === regionProvincia) {
      const datosZafra = filtrarDatasetPorIngenio(dataZafra1, ingenio, "zafra");
      const datosDest = filtrarDatasetPorIngenio(dataDestileria1, ingenio, "destileria");
      const datosAnhi = filtrarDatasetPorIngenio(dataAnhidro1, ingenio, "anhidro");

      resultado.push({
        ingenio: ingenio.nombre_ingenio,
        id: ingenio.id_nombre_ingenio,
        zafra: datosZafra,
        destileria: datosDest,
        anhidro: datosAnhi
      });

    }
  }

  return resultado;
}
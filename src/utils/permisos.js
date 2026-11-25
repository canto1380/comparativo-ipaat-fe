import { getDataToken } from "../helpers/helpers";

export const ingenioFijo = (user) => {
  const sesion = user && (user.nombre_rol || user.permisos || user.id_ingenio != null) ? user : getDataToken();
  if (!sesion || sesion.nombre_rol === "Administrador" || sesion.id_ingenio == null) return null;
  return Number(sesion.id_ingenio);
};

export const tienePermiso = (user, permiso) => {
  const sesion = user && (user.nombre_rol || user.permisos) ? user : getDataToken();
  if (!sesion || !permiso) return !permiso;
  if (sesion.nombre_rol === "Administrador") return true;
  return Array.isArray(sesion.permisos) && sesion.permisos.includes(permiso);
};

export const primeraRutaPermitida = (user) => {
  // Home es la entrada para cualquier sesión autenticada
  if (user) return "/admin/home";
  return "/admin/perfil";
};

const ETIQUETAS_CATEGORIA = {
  parte_diario: "Parte diario",
  ddjj: "Declaraciones juradas",
  graficas: "Gráficos",
  reportes: "Reportes",
  periodos: "Periodos de zafra",
  dias_parada: "Días de parada",
  datos_comparativos: "Datos comparativos",
  ingenios: "Ingenios",
  regiones: "Regiones",
  anios: "Años",
  meses: "Meses",
  quincenas: "Quincenas",
  ia: "IA",
  admin: "Administración",
};

export const categoriaDePermiso = (nombrePermiso) => {
  if (!nombrePermiso) return "otros";
  const punto = String(nombrePermiso).indexOf(".");
  return punto > 0 ? String(nombrePermiso).slice(0, punto) : String(nombrePermiso);
};

export const etiquetaCategoriaPermiso = (categoria) =>
  ETIQUETAS_CATEGORIA[categoria] ||
  String(categoria || "Otros")
    .replace(/_/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase());

export const agruparPermisosPorCategoria = (permisos = []) => {
  const grupos = {};
  permisos.forEach((permiso) => {
    const key = categoriaDePermiso(permiso.nombre_permiso);
    if (!grupos[key]) grupos[key] = [];
    grupos[key].push(permiso);
  });
  return Object.keys(grupos)
    .sort((a, b) => etiquetaCategoriaPermiso(a).localeCompare(etiquetaCategoriaPermiso(b), "es"))
    .map((key) => ({
      key,
      titulo: etiquetaCategoriaPermiso(key),
      permisos: grupos[key].sort((a, b) =>
        String(a.nombre_permiso || "").localeCompare(String(b.nombre_permiso || ""), "es")
      ),
    }));
};

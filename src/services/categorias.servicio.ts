const URL_BASE = process.env.EXPO_PUBLIC_API_URL;
const AGENTE_USUARIO = "UNTDF TNT 2026";

export type SugerenciaCategoria = string;

export const obtenerSugerenciasCategorias = async (
  busqueda: string,
): Promise<SugerenciaCategoria[]> => {
  const parametros = new URLSearchParams({
    tagtype: "categories",
    lc: "es",
    string: busqueda,
    limit: "20",
  });

  const respuesta = await fetch(
    `${URL_BASE}/v3/taxonomy_suggestions?${parametros.toString()}`,
    { headers: { "User-Agent": AGENTE_USUARIO } },
  );

  if (!respuesta.ok) {
    throw new Error(`Error HTTP: ${respuesta.status}`);
  }

  return respuesta.json();
};

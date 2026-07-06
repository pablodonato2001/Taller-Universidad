const URL_BASE = process.env.EXPO_PUBLIC_API_URL;
const AGENTE_USUARIO = "UNTDF TNT 2026";

export type ProductoCrudo = {
  id: string;
  product_name?: string;
  abbreviated_product_name?: string;
  image_url?: string;
  brands?: string;
  nutriscore_grade?: string;
  nutriscore_score?: number;
  ecoscore_grade?: string;
  nova_group?: number;
  ingredients_text?: string;
  nutriments?: Record<string, number | string>;
};

export type RespuestaDetalleProducto = {
  status: number;
  status_verbose: string;
  product?: ProductoCrudo;
};

export type RespuestaBusquedaProductos = {
  count: number;
  page: number;
  page_count: number;
  page_size: number;
  products: ProductoCrudo[];
};

const manejarRespuesta = async <T,>(respuesta: Response): Promise<T> => {
  if (!respuesta.ok) {
    throw new Error(`Error HTTP: ${respuesta.status}`);
  }

  return respuesta.json();
};

export const obtenerProductoPorId = async (
  id: string,
): Promise<RespuestaDetalleProducto> => {
  const parametros = new URLSearchParams({
    fields:
      "abbreviated_product_name,brands,ecoscore_grade,id,image_url,ingredients_text,nova_group,nutriscore_grade,nutriscore_score,nutriments,product_name",
  });

  const respuesta = await fetch(
    `${URL_BASE}/v2/product/${id}?${parametros.toString()}`,
    { headers: { "User-Agent": AGENTE_USUARIO } },
  );

  return manejarRespuesta<RespuestaDetalleProducto>(respuesta);
};

export const buscarProductosPorCategoria = async (
  categoria: string,
  pagina: number = 1,
): Promise<RespuestaBusquedaProductos> => {
  const parametros = new URLSearchParams({
    categories_tags: categoria,
    page_size: "10",
    page: String(pagina),
  });

  const respuesta = await fetch(`${URL_BASE}/v2/search?${parametros.toString()}`, {
    headers: { "User-Agent": AGENTE_USUARIO },
  });

  return manejarRespuesta<RespuestaBusquedaProductos>(respuesta);
};

export const buscarProductosPorMarca = async (
  marca: string,
  pagina: number = 1,
): Promise<RespuestaBusquedaProductos> => {
  const parametros = new URLSearchParams({
    brands_tags: marca,
    page_size: "10",
    page: String(pagina),
  });

  const respuesta = await fetch(`${URL_BASE}/v2/search?${parametros.toString()}`, {
    headers: { "User-Agent": AGENTE_USUARIO },
  });

  return manejarRespuesta<RespuestaBusquedaProductos>(respuesta);
};

export const buscarProductosPorEtiqueta = async (
  etiqueta: string,
  pagina: number = 1,
): Promise<RespuestaBusquedaProductos> => {
  const parametros = new URLSearchParams({
    labels_tags: etiqueta,
    page_size: "10",
    page: String(pagina),
  });

  const respuesta = await fetch(`${URL_BASE}/v2/search?${parametros.toString()}`, {
    headers: { "User-Agent": AGENTE_USUARIO },
  });

  return manejarRespuesta<RespuestaBusquedaProductos>(respuesta);
};

export const buscarProductosPorTexto = async (
  termino: string,
  pagina: number = 1,
): Promise<RespuestaBusquedaProductos> => {
  const parametros = new URLSearchParams({
    search_terms: termino,
    json: "1",
    fields: "id,product_name,brands,image_url,nutriscore_grade,ecoscore_grade",
    page_size: "10",
    page: String(pagina),
  });

  const urlOrigen = new URL(URL_BASE!).origin;
  const respuesta = await fetch(
    `${urlOrigen}/cgi/search.pl?${parametros.toString()}`,
    { headers: { "User-Agent": AGENTE_USUARIO } },
  );

  return manejarRespuesta<RespuestaBusquedaProductos>(respuesta);
};

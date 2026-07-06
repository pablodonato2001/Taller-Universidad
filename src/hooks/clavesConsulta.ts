export type TipoFiltroProductos = "categoria" | "marca" | "etiqueta";

export const clavesProductos = {
  todos: ["productos"] as const,
  detalle: (id: string) => [...clavesProductos.todos, "detalle", id] as const,
  texto: (termino: string) => [...clavesProductos.todos, "texto", termino] as const,
  filtrados: (tipo: TipoFiltroProductos, valor: string) =>
    [...clavesProductos.todos, tipo, valor] as const,
};

export const clavesFavoritos = {
  todos: ["favoritos"] as const,
};

export const clavesCategorias = {
  sugerencias: (busqueda: string) => ["sugerencias-categorias", busqueda] as const,
};

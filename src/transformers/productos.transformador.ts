import {
  ProductoCrudo,
  RespuestaBusquedaProductos,
} from "@/src/services/productos.servicio";

export type ProductoSimplificado = {
  id: string;
  nombre: string;
  urlImagen?: string;
  marca?: string;
  gradoNutriscore?: string;
  gradoEcoscore?: string;
};

export type ResultadoBusquedaProductos = {
  cantidadTotal: number;
  pagina: number;
  cantidadPaginas: number;
  productos: ProductoSimplificado[];
};

export const transformarProducto = (producto: ProductoCrudo): ProductoSimplificado => ({
  id: producto.id,
  nombre: producto.product_name ?? "Producto sin nombre",
  urlImagen: producto.image_url,
  marca: producto.brands,
  gradoNutriscore: producto.nutriscore_grade,
  gradoEcoscore: producto.ecoscore_grade,
});

export const transformarRespuestaBusqueda = (
  respuesta: RespuestaBusquedaProductos,
): ResultadoBusquedaProductos => ({
  cantidadTotal: respuesta.count,
  pagina: respuesta.page,
  cantidadPaginas: respuesta.page_count,
  productos: respuesta.products.map(transformarProducto),
});

import { clavesProductos } from "@/src/hooks/clavesConsulta";
import {
  buscarProductosPorTexto,
  obtenerProductoPorId,
} from "@/src/services/productos.servicio";
import {
  ResultadoBusquedaProductos,
  transformarProducto,
  transformarRespuestaBusqueda,
} from "@/src/transformers/productos.transformador";
import { useInfiniteQuery } from "@tanstack/react-query";

const ES_CODIGO_DE_BARRAS = /^\d{8,14}$/;

export const useProductosPorTextoPaginados = (termino: string) =>
  useInfiniteQuery({
    queryKey: clavesProductos.texto(termino),
    initialPageParam: 1,
    enabled: termino.length > 0,
    queryFn: async ({ pageParam }): Promise<ResultadoBusquedaProductos> => {
      if (ES_CODIGO_DE_BARRAS.test(termino)) {
        const respuesta = await obtenerProductoPorId(termino);
        const productos =
          respuesta.status === 1 && respuesta.product
            ? [transformarProducto(respuesta.product)]
            : [];

        return {
          cantidadTotal: productos.length,
          pagina: 1,
          cantidadPaginas: 1,
          productos,
        };
      }

      const respuesta = await buscarProductosPorTexto(termino, pageParam);
      return transformarRespuestaBusqueda(respuesta);
    },
    getNextPageParam: (ultimaPagina) => {
      const siguientePagina = ultimaPagina.pagina + 1;
      return siguientePagina <= ultimaPagina.cantidadPaginas
        ? siguientePagina
        : undefined;
    },
  });

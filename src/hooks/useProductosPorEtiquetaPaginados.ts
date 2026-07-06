import { clavesProductos } from "@/src/hooks/clavesConsulta";
import { buscarProductosPorEtiqueta } from "@/src/services/productos.servicio";
import { transformarRespuestaBusqueda } from "@/src/transformers/productos.transformador";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useProductosPorEtiquetaPaginados = (etiqueta: string) =>
  useInfiniteQuery({
    queryKey: clavesProductos.filtrados("etiqueta", etiqueta),
    initialPageParam: 1,
    enabled: Boolean(etiqueta),
    queryFn: async ({ pageParam }) => {
      const respuesta = await buscarProductosPorEtiqueta(etiqueta, pageParam);
      return transformarRespuestaBusqueda(respuesta);
    },
    getNextPageParam: (ultimaPagina) => {
      const siguientePagina = ultimaPagina.pagina + 1;
      return siguientePagina <= ultimaPagina.cantidadPaginas
        ? siguientePagina
        : undefined;
    },
  });

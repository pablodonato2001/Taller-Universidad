import { clavesProductos } from "@/src/hooks/clavesConsulta";
import { buscarProductosPorCategoria } from "@/src/services/productos.servicio";
import { transformarRespuestaBusqueda } from "@/src/transformers/productos.transformador";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useProductosPorCategoriaPaginados = (categoria: string) =>
  useInfiniteQuery({
    queryKey: clavesProductos.filtrados("categoria", categoria),
    initialPageParam: 1,
    enabled: Boolean(categoria),
    queryFn: async ({ pageParam }) => {
      const respuesta = await buscarProductosPorCategoria(categoria, pageParam);
      return transformarRespuestaBusqueda(respuesta);
    },
    getNextPageParam: (ultimaPagina) => {
      const siguientePagina = ultimaPagina.pagina + 1;
      return siguientePagina <= ultimaPagina.cantidadPaginas
        ? siguientePagina
        : undefined;
    },
  });

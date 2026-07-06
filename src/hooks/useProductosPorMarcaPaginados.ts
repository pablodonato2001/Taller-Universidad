import { clavesProductos } from "@/src/hooks/clavesConsulta";
import { buscarProductosPorMarca } from "@/src/services/productos.servicio";
import { transformarRespuestaBusqueda } from "@/src/transformers/productos.transformador";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useProductosPorMarcaPaginados = (marca: string) =>
  useInfiniteQuery({
    queryKey: clavesProductos.filtrados("marca", marca),
    initialPageParam: 1,
    enabled: Boolean(marca),
    queryFn: async ({ pageParam }) => {
      const respuesta = await buscarProductosPorMarca(marca, pageParam);
      return transformarRespuestaBusqueda(respuesta);
    },
    getNextPageParam: (ultimaPagina) => {
      const siguientePagina = ultimaPagina.pagina + 1;
      return siguientePagina <= ultimaPagina.cantidadPaginas
        ? siguientePagina
        : undefined;
    },
  });

import { clavesProductos } from "@/src/hooks/clavesConsulta";
import { obtenerProductoPorId } from "@/src/services/productos.servicio";
import { useQuery } from "@tanstack/react-query";

export const useProducto = (id: string) =>
  useQuery({
    queryKey: clavesProductos.detalle(id),
    queryFn: () => obtenerProductoPorId(id),
    enabled: Boolean(id),
  });

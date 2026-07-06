import { clavesCategorias } from "@/src/hooks/clavesConsulta";
import { obtenerSugerenciasCategorias } from "@/src/services/categorias.servicio";
import { useQuery } from "@tanstack/react-query";

export const useSugerenciasCategorias = (busqueda: string) =>
  useQuery({
    queryKey: clavesCategorias.sugerencias(busqueda),
    queryFn: () => obtenerSugerenciasCategorias(busqueda),
    enabled: busqueda.length > 0,
  });

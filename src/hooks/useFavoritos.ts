import { clavesFavoritos } from "@/src/hooks/clavesConsulta";
import {
  eliminarFavorito,
  guardarFavorito,
  obtenerFavoritos,
} from "@/src/services/favoritos.servicio";
import { ProductoSimplificado } from "@/src/transformers/productos.transformador";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useFavoritos = () => {
  const clienteConsulta = useQueryClient();

  const consultaFavoritos = useQuery({
    queryKey: clavesFavoritos.todos,
    queryFn: obtenerFavoritos,
  });

  const invalidarFavoritos = () =>
    clienteConsulta.invalidateQueries({ queryKey: clavesFavoritos.todos });

  const mutacionGuardar = useMutation({
    mutationFn: (producto: ProductoSimplificado) => guardarFavorito(producto),
    onSuccess: invalidarFavoritos,
  });

  const mutacionEliminar = useMutation({
    mutationFn: (id: string) => eliminarFavorito(id),
    onSuccess: invalidarFavoritos,
  });

  return {
    favoritos: consultaFavoritos.data ?? [],
    estaCargando: consultaFavoritos.isLoading,
    guardarFavorito: mutacionGuardar.mutate,
    eliminarFavorito: mutacionEliminar.mutate,
  };
};

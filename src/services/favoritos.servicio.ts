import { ProductoSimplificado } from "@/src/transformers/productos.transformador";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CLAVE_FAVORITOS = "favoritos";

export const obtenerFavoritos = async (): Promise<ProductoSimplificado[]> => {
  const datos = await AsyncStorage.getItem(CLAVE_FAVORITOS);
  return datos ? JSON.parse(datos) : [];
};

export const guardarFavorito = async (
  producto: ProductoSimplificado,
): Promise<ProductoSimplificado[]> => {
  const favoritos = await obtenerFavoritos();
  const yaEsFavorito = favoritos.some((favorito) => favorito.id === producto.id);
  const nuevosFavoritos = yaEsFavorito ? favoritos : [...favoritos, producto];

  await AsyncStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(nuevosFavoritos));
  return nuevosFavoritos;
};

export const eliminarFavorito = async (id: string): Promise<ProductoSimplificado[]> => {
  const favoritos = await obtenerFavoritos();
  const nuevosFavoritos = favoritos.filter((favorito) => favorito.id !== id);

  await AsyncStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(nuevosFavoritos));
  return nuevosFavoritos;
};

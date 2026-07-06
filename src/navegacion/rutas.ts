import { Href } from "expo-router";

export const RUTAS = {
  HOME: "/",
  CATEGORIA: "/categoria/[nombre]",
  ETIQUETA: "/etiqueta/[nombre]",
  MARCA: "/marca/[nombre]",
  PRODUCTO: "/producto/[id]",
} as const;

export type Ruta = (typeof RUTAS)[keyof typeof RUTAS];
type ParametrosRuta = Record<string, string | number | boolean | undefined>;

export const construirRuta = (ruta: Ruta, parametros?: ParametrosRuta): Href => {
  if (!parametros) {
    return ruta as Href;
  }

  return {
    pathname: ruta,
    params: parametros,
  } as Href;
};

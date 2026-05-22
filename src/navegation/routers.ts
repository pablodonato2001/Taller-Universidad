import { Href } from "expo-router";

export const ROUTES = {
  HOME: "/",
  CATEGORIA: "/categoria/[nombre]",
  ETIQUETA: "/etiqueta/[nombre]",
  MARCA: "/marca/[nombre]",
  PRODUCTO: "/producto/[id]",
  FAVORITOS: "/(tabs)/favoritos",
  BUSQUEDA: "/(tabs)/busqueda/[nombre]",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
type RouteParams = Record<string, string | number | boolean | undefined>;

export const buildRoute = (route: AppRoute, params?: RouteParams): Href => {
  if (!params) {
    return route as Href;
  }

  return {
    pathname: route,
    params,
  } as Href;
};

import type { ProductoD } from "./producto";

type item = {
  nombre: string;
  id: string;
  productos: ProductoD[];
};

export type itemD = {
  item: item;
  fondo: string;
  texto: string;
  icono: string;
};

export const categoriasD: itemD[] = [
  {
    item: { id: "bebidas", nombre: "bebidas", productos: [] },
    fondo: "#87CEEB",
    texto: "black",
    icono: "water-outline",
  },
  {
    item: { id: "lacteos", nombre: "lácteos", productos: [] },
    fondo: "yellow",
    texto: "black",
    icono: "color-fill-outline",
  },
  {
    item: { id: "snacks", nombre: "snacks", productos: [] },
    fondo: "pink",
    texto: "black",
    icono: "fast-food-outline",
  },
  {
    item: { id: "desayunos", nombre: "desayunos", productos: [] },
    fondo: "orange",
    texto: "white",
    icono: "cafe-outline",
  },
  {
    item: { id: "postres", nombre: "postres", productos: [] },
    fondo: "violet",
    texto: "white",
    icono: "ice-cream-outline",
  },
  {
    item: { id: "chocolates", nombre: "chocolates", productos: [] },
    fondo: "black",
    texto: "white",
    icono: "cube-outline",
  },
  {
    item: {
      id: "galletas-y-pasteles",
      nombre: "galletas y pasteles",
      productos: [],
    },
    fondo: "brown",
    texto: "white",
    icono: "pie-chart-outline",
  },
  {
    item: { id: "cereales-y-papas", nombre: "cereales y papas", productos: [] },
    fondo: "green",
    texto: "white",
    icono: "nutrition-outline",
  },
  {
    item: { id: "comidas", nombre: "comidas", productos: [] },
    fondo: "red",
    texto: "white",
    icono: "restaurant-outline",
  },
  {
    item: {
      id: "alimentos-vegetales",
      nombre: "alimentos vegetales",
      productos: [],
    },
    fondo: "green",
    texto: "white",
    icono: "leaf-outline",
  },
];

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
};

export const categoriasD: itemD[] = [
  {
    item: { id: "bebidas", nombre: "bebidas", productos: [] },
    fondo: "#87CEEB",
    texto: "black",
  },
  {
    item: { id: "lacteos", nombre: "lácteos", productos: [] },
    fondo: "yellow",
    texto: "black",
  },
  {
    item: { id: "snacks", nombre: "snacks", productos: [] },
    fondo: "pink",
    texto: "black",
  },
  {
    item: { id: "desayunos", nombre: "desayunos", productos: [] },
    fondo: "orange",
    texto: "white",
  },
  {
    item: { id: "postres", nombre: "postres", productos: [] },
    fondo: "violet",
    texto: "white",
  },
  {
    item: { id: "chocolates", nombre: "chocolates", productos: [] },
    fondo: "black",
    texto: "white",
  },
  {
    item: {
      id: "galletas-y-pasteles",
      nombre: "galletas y pasteles",
      productos: [],
    },
    fondo: "brown",
    texto: "white",
  },
  {
    item: { id: "cereales-y-papas", nombre: "cereales y papas", productos: [] },
    fondo: "green",
    texto: "white",
  },
  {
    item: { id: "comidas", nombre: "comidas", productos: [] },
    fondo: "red",
    texto: "white",
  },
  {
    item: {
      id: "alimentos-vegetales",
      nombre: "alimentos vegetales",
      productos: [],
    },
    fondo: "green",
    texto: "white",
  },
];

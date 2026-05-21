import { ProductoD } from "./producto";

type item = {
  nombre: string;
  id: string;
  productos: ProductoD[];
};

type itemD = {
  item: item;
  fondo: string;
  texto: string;
};

export const etiquetasD: itemD[] = [
  {
    item: { id: "organico", nombre: "orgánico", productos: [] },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "vegano", nombre: "vegano", productos: [] },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "vegetariano", nombre: "vegetariano", productos: [] },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "sin-gluten", nombre: "sin gluten", productos: [] },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: {
      id: "sin-azucar-anadida",
      nombre: "sin azúcar añadida",
      productos: [],
    },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "comercio-justo", nombre: "comercio justo", productos: [] },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "sin-lactosa", nombre: "sin lactosa", productos: [] },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: {
      id: "sin-aceite-de-palma",
      nombre: "sin aceite de palma",
      productos: [],
    },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "alto-en-fibra", nombre: "alto en fibra", productos: [] },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "bajo-en-grasa", nombre: "bajo en grasa", productos: [] },
    fondo: "#c6e9be",
    texto: "black",
  },
];

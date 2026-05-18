type item = {
  nombre: string;
  id: string;
};

export type itemD = {
  item: item;
  fondo: string;
  texto: string;
};

export const categoriasD: itemD[] = [
  {
    item: { id: "bebidas", nombre: "bebidas" },
    fondo: "#87CEEB",
    texto: "black",
  },
  {
    item: { id: "lacteos", nombre: "lácteos" },
    fondo: "yellow",
    texto: "black",
  },
  {
    item: { id: "snacks", nombre: "snacks" },
    fondo: "pink",
    texto: "black",
  },
  {
    item: { id: "desayunos", nombre: "desayunos" },
    fondo: "orange",
    texto: "white",
  },
  {
    item: { id: "postres", nombre: "postres" },
    fondo: "violet",
    texto: "white",
  },
  {
    item: { id: "chocolates", nombre: "chocolates" },
    fondo: "black",
    texto: "white",
  },
  {
    item: { id: "galletas-y-pasteles", nombre: "galletas y pasteles" },
    fondo: "brown",
    texto: "white",
  },
  {
    item: { id: "cereales-y-papas", nombre: "cereales y papas" },
    fondo: "green",
    texto: "white",
  },
  {
    item: { id: "comidas", nombre: "comidas" },
    fondo: "red",
    texto: "white",
  },
  {
    item: { id: "alimentos-vegetales", nombre: "alimentos vegetales" },
    fondo: "green",
    texto: "white",
  },
];

// export const items: item[] = [
//     { nombre: "bebidas", fondo: "blue", texto: "white" },
//     { nombre: "lácteos", fondo: "yellow", texto: "black" },
//     { nombre: "snacks", fondo: "pink", texto: "white" },
//     { nombre: "desayunos", fondo: "orange", texto: "white" },
//     { nombre: "postres", fondo: "violet", texto: "white" },
//     { nombre: "chocolates", fondo: "black", texto: "white" },
//     { nombre: "galletas y pasteles", fondo: "brown", texto: "white" },
//     { nombre: "cereales y papas", fondo: "green", texto: "white" },
//     { nombre: "comidas", fondo: "red", texto: "white" },
//     { nombre: "alimentos vegetales", fondo: "green", texto: "white" },
// ];

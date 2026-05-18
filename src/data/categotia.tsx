type item = {
  nombre: string;
  id: string;
};

type itemD = {
  item: item;
  fondo: string;
  texto: string;
};

export const categoriasD: itemD[] = [
  {
    item: { id: "beverages", nombre: "beverages" },
    fondo: "blue",
    texto: "white",
  },
  {
    item: { id: "dairies", nombre: "dairies" },
    fondo: "yellow",
    texto: "black",
  },
  {
    item: { id: "snacks", nombre: "snacks" },
    fondo: "pink",
    texto: "black",
  },
  {
    item: { id: "breakfasts", nombre: "breakfasts" },
    fondo: "orange",
    texto: "white",
  },
  {
    item: { id: "desserts", nombre: "desserts" },
    fondo: "violet",
    texto: "white",
  },
  {
    item: { id: "chocolates", nombre: "chocolates" },
    fondo: "black",
    texto: "white",
  },
  {
    item: { id: "biscuits-and-cakes", nombre: "biscuits-and-cakes" },
    fondo: "brown",
    texto: "white",
  },
  {
    item: { id: "cereals-and-potatoes", nombre: "cereals-and-potatoes" },
    fondo: "green",
    texto: "white",
  },
  {
    item: { id: "meals", nombre: "meals" },
    fondo: "red",
    texto: "white",
  },
  {
    item: { id: "plant-based-foods", nombre: "plant-based-foods" },
    fondo: "green",
    texto: "white",
  },
];

// export const items: item[] = [
//     { nombre: "beverages", fondo: "blue", texto: "white" },
//     { nombre: "dairies", fondo: "yellow", texto: "black" },
//     { nombre: "snacks", fondo: "pink", texto: "white" },
//     { nombre: "breakfasts", fondo: "orange", texto: "white" },
//     { nombre: "desserts", fondo: "violet", texto: "white" },
//     { nombre: "chocolates", fondo: "black", texto: "white" },
//     { nombre: "biscuits-and-cakes", fondo: "brown", texto: "white" },
//     { nombre: "cereals-and-potatoes", fondo: "green", texto: "white" },
//     { nombre: "meals", fondo: "red", texto: "white" },
//     { nombre: "plant-based-foods", fondo: "green", texto: "white" },
// ];

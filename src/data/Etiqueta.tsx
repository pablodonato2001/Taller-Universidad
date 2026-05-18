type item = {
  nombre: string;
  id: string;
};

type itemD = {
  item: item;
  fondo: string;
  texto: string;
};

export const etiquetasD: itemD[] = [
  {
    item: { id: "organic", nombre: "organic" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "vegan", nombre: "vegan" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "vegetarian", nombre: "vegetarian" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "gluten-free", nombre: "gluten-free" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "no-added-sugar", nombre: "no-added-sugar" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "fair-trade", nombre: "fair-trade" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "lactose-free", nombre: "lactose-free" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "palm-oil-free", nombre: "palm-oil-free" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "high-fiber", nombre: "high-fiber" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "low-fat", nombre: "low-fat" },
    fondo: "#c6e9be",
    texto: "black",
  },
];

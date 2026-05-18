type item = {
  nombre: string;
  id: string;
};

type itemD = {
  item: item;
  fondo: string;
  texto: string;
};

export const marcasD: itemD[] = [
  {
    item: { id: "nestle", nombre: "nestle" },
    fondo: "blue",
    texto: "white",
  },
  {
    item: { id: "coca-cola", nombre: "coca-cola" },
    fondo: "yellow",
    texto: "black",
  },
  {
    item: { id: "pepsi", nombre: "pepsi" },
    fondo: "pink",
    texto: "black",
  },
  {
    item: { id: "danone", nombre: "danone" },
    fondo: "orange",
    texto: "black",
  },
  {
    item: { id: "kelloggs", nombre: "kelloggs" },
    fondo: "violet",
    texto: "black",
  },
  {
    item: { id: "unilever", nombre: "unilever" },
    fondo: "black",
    texto: "white",
  },
  {
    item: { id: "mondelez", nombre: "mondelez" },
    fondo: "brown",
    texto: "white",
  },
  {
    item: { id: "mars", nombre: "mars" },
    fondo: "green",
    texto: "black",
  },
  {
    item: { id: "ferrero", nombre: "ferrero" },
    fondo: "red",
    texto: "black",
  },
  {
    item: { id: "lactalis", nombre: "lactalis" },
    fondo: "green",
    texto: "black",
  },

  {
    item: { id: "la-serenisima", nombre: "La serenisima" },
    fondo: "blue",
    texto: "white",
  },
];

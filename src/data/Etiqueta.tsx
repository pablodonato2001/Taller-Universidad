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
    item: { id: "organico", nombre: "orgánico" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "vegano", nombre: "vegano" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "vegetariano", nombre: "vegetariano" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "sin-gluten", nombre: "sin gluten" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "sin-azucar-anadida", nombre: "sin azúcar añadida" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "comercio-justo", nombre: "comercio justo" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "sin-lactosa", nombre: "sin lactosa" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "sin-aceite-de-palma", nombre: "sin aceite de palma" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "alto-en-fibra", nombre: "alto en fibra" },
    fondo: "#c6e9be",
    texto: "black",
  },
  {
    item: { id: "bajo-en-grasa", nombre: "bajo en grasa" },
    fondo: "#c6e9be",
    texto: "black",
  },
];

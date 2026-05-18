import { categoriasD } from "./categotia";
import { etiquetasD } from "./Etiqueta";
import { marcasD } from "./Marca";

type InformacionNutricional = {
  energia: string;
  grasas: string;
  grasasSaturadas: string;
  carbohidratos: string;
  azucares: string;
  fibra: string;
  proteinas: string;
  sal: string;
};

type itemD = {
  nombre: string;
  id: string;
  imagen: string;
  marca: (typeof marcasD)[number];
  categoria: (typeof categoriasD)[number];
  etiqueta: (typeof etiquetasD)[number];
  ingredientes: string;
  informacionNutricional?: InformacionNutricional;
};

export const productosD: itemD[] = [
  {
    nombre: "Manteca Clasica",
    id: "7793940054006",
    imagen: "7793940054006.jpg",
    marca: marcasD[6],
    categoria: categoriasD[1],
    etiqueta: etiquetasD[0],
    ingredientes:
      "Crema de leche: 62.5% (estimación) Productos lácteos: 18.8% (estimación) Aceite vegetal: 9.4% (estimación) Cloruro de sodio: 9.4% (estimación) ",
    informacionNutricional: {
      energia: "46 kcal / 193 kJ",
      grasas: "1.5g",
      grasasSaturadas: "0.2g",
      carbohidratos: "6.7g",
      azucares: "4.1g",
      fibra: "0.8g",
      proteinas: "1.0g",
      sal: "0.10g",
    },
  },
];

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

type Clasificacion = {
  nutriScore?: string;
  novaGrupo?: number;
  EcoScore?: string;
};

export type ProductoD = {
  nombre: string;
  id: string;
  imagen: any;
  marca: string;
  categoria: string;
  etiqueta: string;
  ingredientes: string;
  clasificacion?: Clasificacion;
  informacionNutricional?: InformacionNutricional;
};

export const productosD: ProductoD[] = [
  {
    nombre: "Manteca Clasica",
    id: "7793940054006",
    imagen: require("@/src/assets/7793940054006.jpg"),
    marca: marcasD[10].item.id,
    categoria: categoriasD[1].item.id,
    etiqueta: etiquetasD[0].item.id,
    ingredientes:
      "Crema de leche: 62.5% (estimación) Productos lácteos: 18.8% (estimación) Aceite vegetal: 9.4% (estimación) Cloruro de sodio: 9.4% (estimación) ",
    clasificacion: {
      nutriScore: "E",
      novaGrupo: 2,
      EcoScore: "E",
    },
    informacionNutricional: {
      energia: "193 kJ",
      grasas: "1.5g",
      grasasSaturadas: "0.2g",
      carbohidratos: "6.7g",
      azucares: "4.1g",
      fibra: "0.8g",
      proteinas: "1.0g",
      sal: "0.10g",
    },
  },
  // --- BEBIDAS (0) ---
  {
    nombre: "Coca-Cola Original",
    id: "7790895000997",
    imagen: {
      uri: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&q=80",
    },
    marca: marcasD[1].item.id,
    categoria: categoriasD[0].item.id,
    etiqueta: etiquetasD[1].item.id,
    ingredientes:
      "Agua carbonatada, azúcar, colorante, ácido fosfórico, saborizantes naturales, cafeína.",
    clasificacion: { nutriScore: "E", novaGrupo: 4, EcoScore: "D" },
    informacionNutricional: {
      energia: "180 kJ",
      grasas: "0g",
      grasasSaturadas: "0g",
      carbohidratos: "10.6g",
      azucares: "10.6g",
      fibra: "0g",
      proteinas: "0g",
      sal: "0g",
    },
  },
  {
    nombre: "Pepsi Black",
    id: "7790895001000",
    imagen: {
      uri: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&q=80",
    },
    marca: marcasD[2].item.id,
    categoria: categoriasD[0].item.id,
    etiqueta: etiquetasD[4].item.id,
    ingredientes:
      "Agua carbonatada, colorante caramelo, edulcorantes, cafeína.",
    clasificacion: { nutriScore: "B", novaGrupo: 4, EcoScore: "C" },
    informacionNutricional: {
      energia: "2 kJ",
      grasas: "0g",
      grasasSaturadas: "0g",
      carbohidratos: "0g",
      azucares: "0g",
      fibra: "0g",
      proteinas: "0g",
      sal: "0.01g",
    },
  },
  // --- LACTEOS (1) ---
  {
    nombre: "Yogur Firme",
    id: "7790895001001",
    imagen: {
      uri: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80",
    },
    marca: marcasD[3].item.id,
    categoria: categoriasD[1].item.id,
    etiqueta: etiquetasD[9].item.id,
    ingredientes: "Leche descremada, fermentos lácteos, vitaminas.",
    clasificacion: { nutriScore: "A", novaGrupo: 3, EcoScore: "B" },
    informacionNutricional: {
      energia: "240 kJ",
      grasas: "1.5g",
      grasasSaturadas: "0.9g",
      carbohidratos: "6.5g",
      azucares: "5.5g",
      fibra: "0g",
      proteinas: "4.0g",
      sal: "0.12g",
    },
  },
  {
    nombre: "Queso Untable",
    id: "7790895001002",
    imagen: {
      uri: "https://images.unsplash.com/photo-1631451095764-9facf23026af?w=500&q=80",
    },
    marca: marcasD[9].item.id,
    categoria: categoriasD[1].item.id,
    etiqueta: etiquetasD[6].item.id,
    ingredientes: "Leche pasteurizada, crema, sal, cuajo.",
    clasificacion: { nutriScore: "D", novaGrupo: 3, EcoScore: "C" },
    informacionNutricional: {
      energia: "1020 kJ",
      grasas: "24g",
      grasasSaturadas: "16g",
      carbohidratos: "3g",
      azucares: "3g",
      fibra: "0g",
      proteinas: "6g",
      sal: "0.8g",
    },
  },
  // --- SNACKS (2) ---
  {
    nombre: "Papas Lays Clásicas",
    id: "7790895001003",
    imagen: {
      uri: "https://images.unsplash.com/photo-1566478989037-e923883a938a?w=500&q=80",
    },
    marca: marcasD[2].item.id,
    categoria: categoriasD[2].item.id,
    etiqueta: etiquetasD[3].item.id,
    ingredientes: "Papa, aceite vegetal, sal.",
    clasificacion: { nutriScore: "C", novaGrupo: 3, EcoScore: "C" },
    informacionNutricional: {
      energia: "2200 kJ",
      grasas: "34g",
      grasasSaturadas: "3.5g",
      carbohidratos: "49g",
      azucares: "0.5g",
      fibra: "4.5g",
      proteinas: "6g",
      sal: "1.2g",
    },
  },
  {
    nombre: "Doritos Queso",
    id: "7790895001004",
    imagen: {
      uri: "https://images.unsplash.com/photo-1600952841320-db92ec40e4ca?w=500&q=80",
    },
    marca: marcasD[2].item.id,
    categoria: categoriasD[2].item.id,
    etiqueta: etiquetasD[2].item.id,
    ingredientes: "Maíz, aceite vegetal, saborizante a queso.",
    clasificacion: { nutriScore: "D", novaGrupo: 4, EcoScore: "D" },
    informacionNutricional: {
      energia: "2100 kJ",
      grasas: "26g",
      grasasSaturadas: "3g",
      carbohidratos: "58g",
      azucares: "2.5g",
      fibra: "4g",
      proteinas: "7g",
      sal: "1.5g",
    },
  },
  // --- DESAYUNOS (3) ---
  {
    nombre: "Zucaritas",
    id: "7790895001005",
    imagen: {
      uri: "https://images.unsplash.com/photo-1521249635712-6973347b40bd?w=500&q=80",
    },
    marca: marcasD[4].item.id,
    categoria: categoriasD[3].item.id,
    etiqueta: etiquetasD[2].item.id,
    ingredientes: "Maíz, azúcar, malta, sal.",
    clasificacion: { nutriScore: "C", novaGrupo: 4, EcoScore: "C" },
    informacionNutricional: {
      energia: "1600 kJ",
      grasas: "1g",
      grasasSaturadas: "0.2g",
      carbohidratos: "85g",
      azucares: "37g",
      fibra: "2g",
      proteinas: "5g",
      sal: "0.9g",
    },
  },
  {
    nombre: "Café Nescafé Dolca",
    id: "7790895001006",
    imagen: {
      uri: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80",
    },
    marca: marcasD[0].item.id,
    categoria: categoriasD[3].item.id,
    etiqueta: etiquetasD[5].item.id,
    ingredientes: "Café instantáneo, azúcar.",
    clasificacion: { nutriScore: "B", novaGrupo: 3, EcoScore: "B" },
    informacionNutricional: {
      energia: "250 kJ",
      grasas: "0.2g",
      grasasSaturadas: "0.1g",
      carbohidratos: "9g",
      azucares: "8g",
      fibra: "3g",
      proteinas: "7g",
      sal: "0.1g",
    },
  },
  // --- POSTRES (4) ---
  {
    nombre: "Helado Magnum",
    id: "7790895001007",
    imagen: {
      uri: "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?w=500&q=80",
    },
    marca: marcasD[5].item.id,
    categoria: categoriasD[4].item.id,
    etiqueta: etiquetasD[3].item.id,
    ingredientes: "Leche, chocolate, azúcar, crema.",
    clasificacion: { nutriScore: "E", novaGrupo: 4, EcoScore: "D" },
    informacionNutricional: {
      energia: "1350 kJ",
      grasas: "20g",
      grasasSaturadas: "14g",
      carbohidratos: "31g",
      azucares: "28g",
      fibra: "1.5g",
      proteinas: "3.5g",
      sal: "0.15g",
    },
  },
  {
    nombre: "Postre Danette",
    id: "7790895001008",
    imagen: {
      uri: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&q=80",
    },
    marca: marcasD[3].item.id,
    categoria: categoriasD[4].item.id,
    etiqueta: etiquetasD[2].item.id,
    ingredientes: "Leche, azúcar, cacao, almidón.",
    clasificacion: { nutriScore: "D", novaGrupo: 4, EcoScore: "C" },
    informacionNutricional: {
      energia: "500 kJ",
      grasas: "3g",
      grasasSaturadas: "2g",
      carbohidratos: "19g",
      azucares: "15g",
      fibra: "1g",
      proteinas: "3.5g",
      sal: "0.1g",
    },
  },
  // --- CHOCOLATES (5) ---
  {
    nombre: "Ferrero Rocher",
    id: "7790895001009",
    imagen: {
      uri: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=500&q=80",
    },
    marca: marcasD[8].item.id,
    categoria: categoriasD[5].item.id,
    etiqueta: etiquetasD[2].item.id,
    ingredientes: "Chocolate con leche, avellanas, azúcar, manteca de cacao.",
    clasificacion: { nutriScore: "E", novaGrupo: 4, EcoScore: "D" },
    informacionNutricional: {
      energia: "2500 kJ",
      grasas: "42g",
      grasasSaturadas: "14g",
      carbohidratos: "44g",
      azucares: "39g",
      fibra: "4g",
      proteinas: "8g",
      sal: "0.15g",
    },
  },
  {
    nombre: "M&M's",
    id: "7790895001010",
    imagen: {
      uri: "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?w=500&q=80",
    },
    marca: marcasD[7].item.id,
    categoria: categoriasD[5].item.id,
    etiqueta: etiquetasD[7].item.id,
    ingredientes: "Azúcar, masa de cacao, leche entera en polvo.",
    clasificacion: { nutriScore: "E", novaGrupo: 4, EcoScore: "E" },
    informacionNutricional: {
      energia: "2000 kJ",
      grasas: "19g",
      grasasSaturadas: "11g",
      carbohidratos: "69g",
      azucares: "65g",
      fibra: "2.5g",
      proteinas: "4.5g",
      sal: "0.12g",
    },
  },
  // --- GALLETAS Y PASTELES (6) ---
  {
    nombre: "Galletas Oreo",
    id: "7790895001011",
    imagen: {
      uri: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
    },
    marca: marcasD[6].item.id,
    categoria: categoriasD[6].item.id,
    etiqueta: etiquetasD[1].item.id,
    ingredientes: "Harina de trigo, azúcar, grasa vegetal, cacao.",
    clasificacion: { nutriScore: "E", novaGrupo: 4, EcoScore: "D" },
    informacionNutricional: {
      energia: "1950 kJ",
      grasas: "20g",
      grasasSaturadas: "9g",
      carbohidratos: "68g",
      azucares: "38g",
      fibra: "3g",
      proteinas: "5g",
      sal: "0.7g",
    },
  },
  {
    nombre: "Pepitos",
    id: "7790895001012",
    imagen: {
      uri: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&q=80",
    },
    marca: marcasD[6].item.id,
    categoria: categoriasD[6].item.id,
    etiqueta: etiquetasD[2].item.id,
    ingredientes: "Harina de trigo, chispas de chocolate, azúcar, manteca.",
    clasificacion: { nutriScore: "D", novaGrupo: 4, EcoScore: "D" },
    informacionNutricional: {
      energia: "2050 kJ",
      grasas: "22g",
      grasasSaturadas: "11g",
      carbohidratos: "65g",
      azucares: "30g",
      fibra: "2.5g",
      proteinas: "6g",
      sal: "0.5g",
    },
  },
  // --- CEREALES Y PAPAS (7) ---
  {
    nombre: "All Bran",
    id: "7790895001013",
    imagen: {
      uri: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=500&q=80",
    },
    marca: marcasD[4].item.id,
    categoria: categoriasD[7].item.id,
    etiqueta: etiquetasD[8].item.id,
    ingredientes: "Salvado de trigo, azúcar, malta, sal.",
    clasificacion: { nutriScore: "A", novaGrupo: 3, EcoScore: "A" },
    informacionNutricional: {
      energia: "1350 kJ",
      grasas: "2.5g",
      grasasSaturadas: "0.5g",
      carbohidratos: "48g",
      azucares: "18g",
      fibra: "27g",
      proteinas: "14g",
      sal: "0.9g",
    },
  },
  {
    nombre: "Puré de Papas Maggi",
    id: "7790895001014",
    imagen: {
      uri: "https://images.unsplash.com/photo-1518568740560-3331ebebb121?w=500&q=80",
    },
    marca: marcasD[0].item.id,
    categoria: categoriasD[7].item.id,
    etiqueta: etiquetasD[3].item.id,
    ingredientes: "Papas deshidratadas, emulsionante, conservantes.",
    clasificacion: { nutriScore: "B", novaGrupo: 4, EcoScore: "B" },
    informacionNutricional: {
      energia: "1450 kJ",
      grasas: "1g",
      grasasSaturadas: "0.5g",
      carbohidratos: "75g",
      azucares: "1.5g",
      fibra: "5g",
      proteinas: "7g",
      sal: "1g",
    },
  },
  // --- COMIDAS (8) ---
  {
    nombre: "Sopa Quick Knorr",
    id: "7790895001015",
    imagen: {
      uri: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80",
    },
    marca: marcasD[5].item.id,
    categoria: categoriasD[8].item.id,
    etiqueta: etiquetasD[9].item.id,
    ingredientes: "Fideos, sal, vegetales deshidratados, almidón.",
    clasificacion: { nutriScore: "C", novaGrupo: 4, EcoScore: "C" },
    informacionNutricional: {
      energia: "150 kJ",
      grasas: "0.5g",
      grasasSaturadas: "0.1g",
      carbohidratos: "6g",
      azucares: "0.5g",
      fibra: "0.5g",
      proteinas: "1g",
      sal: "0.8g",
    },
  },
  {
    nombre: "Fideos Lucchetti",
    id: "7790895001016",
    imagen: {
      uri: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&q=80",
    },
    marca: marcasD[6].item.id,
    categoria: categoriasD[8].item.id,
    etiqueta: etiquetasD[1].item.id,
    ingredientes: "Sémola de trigo candeal, agua.",
    clasificacion: { nutriScore: "A", novaGrupo: 1, EcoScore: "A" },
    informacionNutricional: {
      energia: "1500 kJ",
      grasas: "1.5g",
      grasasSaturadas: "0.3g",
      carbohidratos: "72g",
      azucares: "2g",
      fibra: "3g",
      proteinas: "12g",
      sal: "0g",
    },
  },
  // --- ALIMENTOS VEGETALES (9) ---
  {
    nombre: "Bebida de Almendras",
    id: "7790895001017",
    imagen: {
      uri: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&q=80",
    },
    marca: marcasD[3].item.id,
    categoria: categoriasD[9].item.id,
    etiqueta: etiquetasD[6].item.id,
    ingredientes: "Agua, almendras, azúcar, calcio.",
    clasificacion: { nutriScore: "B", novaGrupo: 4, EcoScore: "B" },
    informacionNutricional: {
      energia: "100 kJ",
      grasas: "1.2g",
      grasasSaturadas: "0.1g",
      carbohidratos: "2.5g",
      azucares: "2g",
      fibra: "0.4g",
      proteinas: "0.5g",
      sal: "0.1g",
    },
  },
  {
    nombre: "NotBurger",
    id: "7790895001018",
    imagen: {
      uri: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&q=80",
    },
    marca: marcasD[5].item.id,
    categoria: categoriasD[9].item.id,
    etiqueta: etiquetasD[1].item.id,
    ingredientes: "Agua, proteína de arveja, aceite de coco, fibra.",
    clasificacion: { nutriScore: "C", novaGrupo: 4, EcoScore: "B" },
    informacionNutricional: {
      energia: "1100 kJ",
      grasas: "18g",
      grasasSaturadas: "8g",
      carbohidratos: "8g",
      azucares: "0.5g",
      fibra: "3g",
      proteinas: "15g",
      sal: "1g",
    },
  },
];

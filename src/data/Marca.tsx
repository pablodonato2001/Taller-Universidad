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
  imagen: string;
};

export const marcasD: itemD[] = [
  {
    item: { id: "nestle", nombre: "nestle", productos: [] },
    fondo: "blue",
    texto: "white",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-M4nt1XIqqqlYQVZaMOilFFfwmq0oDyixQ&s",
  },
  {
    item: { id: "coca-cola", nombre: "coca-cola", productos: [] },
    fondo: "yellow",
    texto: "black",
    imagen:
      "https://thumbs.dreamstime.com/b/logotipo-de-coca-cola-en-la-pantalla-de-ordenador-80980608.jpg",
  },
  {
    item: { id: "pepsi", nombre: "pepsi", productos: [] },
    fondo: "pink",
    texto: "black",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/250px-Pepsi_2023.svg.png",
  },
  {
    item: { id: "danone", nombre: "danone", productos: [] },
    fondo: "orange",
    texto: "black",
    imagen:
      "https://yt3.googleusercontent.com/iiSOP5j8Wg4HbFF2M16PU3bOhW6d8YuLMee9ylZJArJGJDOrUzQeNXykkno7ndlxeu4zRqc1OA=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    item: { id: "kelloggs", nombre: "kelloggs", productos: [] },
    fondo: "violet",
    texto: "black",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81yKTsjhWyUeEMAff51vyv6IqhrmHxNoOSw&s",
  },
  {
    item: { id: "unilever", nombre: "unilever", productos: [] },
    fondo: "black",
    texto: "white",
    imagen: "https://www.unilever.com.ar/apple-touch-icon.png",
  },
  {
    item: { id: "mondelez", nombre: "mondelez", productos: [] },
    fondo: "brown",
    texto: "white",
    imagen:
      "https://media.ambito.com/p/5bc7c689e813b80ff60df40567cf9c1e/adjuntos/239/imagenes/032/023/0032023667/1200x675/smart/en-argentina-beldent-clight-mantecol-cerealitas-terrabusi-tita-y-rhodesia-otras-se-agregan-las-marcas-elaboradas-la-mondelez-international.jpg",
  },
  {
    item: { id: "mars", nombre: "mars", productos: [] },
    fondo: "green",
    texto: "black",
    imagen:
      "https://i.pinimg.com/736x/44/65/77/446577c567a4ba4534d0e3292553d0f7.jpg",
  },
  {
    item: { id: "ferrero", nombre: "ferrero", productos: [] },
    fondo: "red",
    texto: "black",
    imagen:
      "https://w7.pngwing.com/pngs/354/480/png-transparent-ferrero-rocher-logo-sweets-and-candy-brands-logos.png",
  },
  {
    item: { id: "lactalis", nombre: "lactalis", productos: [] },
    fondo: "green",
    texto: "black",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvz5Gm0H5GLNdKFPTnjSCyBg8B0rllqHXMw&s",
  },

  {
    item: { id: "La Serenisima", nombre: "La Serenisima", productos: [] },
    fondo: "blue",
    texto: "white",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4SkARtizwXY2iUnALuQcaPb6dTygzvfi0Q&s",
  },
];

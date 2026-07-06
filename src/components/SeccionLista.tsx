import { RUTAS, Ruta, construirRuta } from "@/src/navegacion/rutas";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { BotonCategorias } from "./BotonCategorias";
import { BotonEtiquetas } from "./BotonEtiquetas";
import { BotonMarcas } from "./BotonMarcas";

type item = {
  nombre: string;
  id: string;
};

type itemD = {
  item: item;
  fondo: string;
  texto: string;
  imagen?: string;
};

type seccionList = {
  titulo: string;
  items: itemD[];
};

const COMPONENTES_POR_TITULO: Record<string, React.FC<any>> = {
  Categorias: BotonCategorias,
  Etiquetas: BotonEtiquetas,
  Marcas: BotonMarcas,
};

const RUTA_POR_TITULO: Record<string, Ruta> = {
  Categorias: RUTAS.CATEGORIA,
  Etiquetas: RUTAS.ETIQUETA,
  Marcas: RUTAS.MARCA,
};

export function seccionLista({ titulo, items }: seccionList) {
  const router = useRouter();

  const Boton = COMPONENTES_POR_TITULO[titulo] || BotonEtiquetas;
  const ruta = RUTA_POR_TITULO[titulo] || RUTAS.ETIQUETA;

  const navegarItems = (nombre: string) => () => {
    router.push(construirRuta(ruta, { nombre }));
  };

  return (
    <View>
      <View style={styles.contenedorRow}>
        <Text style={styles.titulo}>{titulo}</Text>
      </View>
      <View style={styles.items}>
        {items.map((item) => (
          <Boton
            key={item.item.id}
            nombre={item.item.nombre}
            fondo={item.fondo}
            texto={item.texto}
            imagen={item.imagen}
            icono={(item as any).icono}
            onPress={navegarItems(item.item.nombre)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorRow: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 200,
  },
  items: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: 15,
  },
  titulo: {
    fontSize: 28,
    paddingTop: 30,
    fontWeight: "bold",
  },
});

import { AppRoute, buildRoute } from "@/src/navegation/routers";
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
};

type seccionList = {
  titulo: string;
  items: itemD[];
  ruta: AppRoute;
};

const COMPONENTES_POR_TITULO: Record<string, React.FC<any>> = {
  Categorias: BotonCategorias,
  Etiquetas: BotonEtiquetas,
  Marcas: BotonMarcas,
};

export function seccionLista({ titulo, items, ruta }: seccionList) {
  const router = useRouter();

  const Boton = COMPONENTES_POR_TITULO[titulo] || BotonEtiquetas;

  const navegarItems = (nombre: string) => {
    router.push(buildRoute(ruta, { nombre: nombre }));
  };

  return (
    <View>
      <View style={styles.contenedorRow}>
        <Text>{titulo}</Text>
      </View>
      <View style={styles.categorias}>
        {items.map((item) => (
          <Boton
            key={item.item.id}
            nombre={item.item.nombre}
            fondo={item.fondo}
            texto={item.texto}
            onPress={() => navegarItems(item.item.nombre)}
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
  categorias: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 30,
  },
});

import { ListaProductosPaginada } from "@/src/components/ListaProductosPaginada";
import { useProductosPorEtiquetaPaginados } from "@/src/hooks/useProductosPorEtiquetaPaginados";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type EtiquetaParams = {
  nombre: string;
};

export default function EtiquetaScreen() {
  const { nombre } = useLocalSearchParams<EtiquetaParams>();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    refetch,
  } = useProductosPorEtiquetaPaginados(nombre);

  const productos = data?.pages.flatMap((pagina) => pagina.productos) ?? [];
  const cantidadTotal = data?.pages[0]?.cantidadTotal ?? 0;

  const cargarMasProductos = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nombre}</Text>
      <Text style={styles.description}>
        {isLoading ? "Buscando..." : `${cantidadTotal} productos encontrados`}
      </Text>

      <ListaProductosPaginada
        productos={productos}
        onEndReached={cargarMasProductos}
        estaCargandoMas={isFetchingNextPage}
        estaError={isError}
        onReintentar={refetch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 5,
    backgroundColor: "#f3f4f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 18,
    color: "#818181ff",
    fontWeight: "bold",
  },
});

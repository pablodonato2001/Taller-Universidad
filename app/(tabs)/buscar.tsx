import { EscanerCodigoBarras } from "@/src/components/EscanerCodigoBarras";
import { ListaProductosPaginada } from "@/src/components/ListaProductosPaginada";
import { useProductosPorTextoPaginados } from "@/src/hooks/useProductosPorTextoPaginados";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function BuscarScreen() {
  const [texto, setTexto] = useState("");
  const [terminoBuscado, setTerminoBuscado] = useState("");
  const [escanerVisible, setEscanerVisible] = useState(false);

  useEffect(() => {
    const temporizador = setTimeout(() => setTerminoBuscado(texto.trim()), 400);
    return () => clearTimeout(temporizador);
  }, [texto]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    refetch,
  } = useProductosPorTextoPaginados(terminoBuscado);

  const productos = data?.pages.flatMap((pagina) => pagina.productos) ?? [];
  const cantidadTotal = data?.pages[0]?.cantidadTotal ?? 0;

  const cargarMasProductos = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busqueda</Text>

      <View style={styles.filaBusqueda}>
        <View style={styles.barraBusqueda}>
          <Ionicons name="search" size={24} color="#9d9da7" />
          <TextInput
            style={styles.input}
            value={texto}
            onChangeText={setTexto}
            returnKeyType="search"
            placeholder="Buscar jugos, sodas, snacks, etc..."
            placeholderTextColor="#9d9da7"
          />
        </View>
        <Pressable
          style={styles.botonEscanear}
          onPress={() => setEscanerVisible(true)}
        >
          <Ionicons name="barcode-outline" size={28} color="white" />
        </Pressable>
      </View>

      {terminoBuscado.length > 0 && (
        <Text style={styles.description}>
          {isLoading ? "Buscando..." : `${cantidadTotal} productos encontrados`}
        </Text>
      )}

      <ListaProductosPaginada
        productos={productos}
        onEndReached={cargarMasProductos}
        estaCargandoMas={isFetchingNextPage}
        estaError={isError}
        onReintentar={refetch}
      />

      <EscanerCodigoBarras
        visible={escanerVisible}
        onCerrar={() => setEscanerVisible(false)}
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
    textAlign: "left",
  },
  description: {
    fontSize: 18,
    textAlign: "left",
    color: "#818181ff",
    fontWeight: "bold",
  },
  filaBusqueda: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 15,
  },
  barraBusqueda: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderRadius: 10,
    height: 60,
    paddingHorizontal: 15,
  },
  botonEscanear: {
    backgroundColor: "green",
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    marginLeft: 10,
  },
});

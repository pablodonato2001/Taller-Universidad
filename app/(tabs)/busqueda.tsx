import { categoriasD } from "@/src/data/categotia";
import { buildRoute, ROUTES } from "@/src/navegation/routers";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function BusquedaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busqueda</Text>
      <CategoriaFiltro />
    </View>
  );
}

function CategoriaFiltro() {
  const [texto, setTexto] = useState("");

  return (
    <View>
      <TextInput
        style={{ height: 60, width: 300, backgroundColor: "lightgray" }}
        onChangeText={setTexto}
        returnKeyType="next"
      />

      <ListaCategorias filtro={texto} />
    </View>
  );
}

function ListaCategorias({ filtro }: { filtro: string }) {
  const router = useRouter();

  const categoriasFiltradas = categoriasD.filter((categoria) =>
    categoria.item.nombre.toLowerCase().includes(filtro.toLowerCase()),
  );
  const NavegarItems = (nombre: string) => {
    router.push(buildRoute(ROUTES.CATEGORIA, { nombre: nombre }));
  };

  return (
    <FlatList
      data={categoriasFiltradas}
      keyExtractor={(itemD) => itemD.item.id}
      renderItem={({ item }) => (
        <Text
          style={{ fontSize: 18, padding: 10 }}
          onPress={() => NavegarItems(item.item.nombre)}
        >
          {item.item.nombre}
        </Text>
      )}
      ListEmptyComponent={<Text>No se encontraron categorías</Text>}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 24,
    gap: 12,
    backgroundColor: "#eff6ff",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d4ed8",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    color: "#1e3a8a",
  },
});

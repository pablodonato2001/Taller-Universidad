import { ProductoD, productosD } from "@/src/data/producto";
import { buildRoute, ROUTES } from "@/src/navegation/routers";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type BusquedaParams = {
  nombre: string;
  Tipo: string;
  Filtro: string;
};

export default function BusquedaScreen() {
  const { nombre, Tipo, Filtro } = useLocalSearchParams<BusquedaParams>();
  const getProductosPorTipo = (Seleccion: string, Tipo: string) => {
    switch (Seleccion) {
      case "Categorias":
        return productosD.filter((p) => p.categoria === Tipo);
      case "Etiquetas":
        return productosD.filter((p) => p.etiqueta === Tipo);
      case "Marcas":
        return productosD.filter((p) => p.marca === Tipo);
      default:
        return productosD;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nombre}</Text>
      <Text style={styles.description}>
        {getProductosPorTipo(Filtro, Tipo).length} productos
      </Text>
      <BusquedaProductos productos={getProductosPorTipo(Filtro, Tipo)} />
    </View>
  );
}

function BusquedaProductos({ productos }: { productos: ProductoD[] }) {
  const [texto, setTexto] = useState("");

  return (
    <View style={styles.ContenedorBusqueda}>
      <View style={styles.barraBusqueda}>
        <Ionicons name="search" size={24} color="#9d9da7" />
        <TextInput
          style={styles.input}
          onChangeText={setTexto}
          returnKeyType="next"
          placeholder={"Buscar jugos, sodas, snacks, etc..."}
          placeholderTextColor={"#9d9da7"}
        />
      </View>

      <ListaProductos filtro={texto} Lproductos={productos} />
    </View>
  );
}

function ListaProductos({
  filtro,
  Lproductos,
}: {
  filtro: string;
  Lproductos: ProductoD[];
}) {
  const router = useRouter();
  const productosFiltrados = Lproductos.filter((p) =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase()),
  );
  const NavegarItems = (id: string) => {
    router.push(buildRoute(ROUTES.PRODUCTO, { id: id }));
  };

  return (
    <FlatList
      contentContainerStyle={{
        paddingBottom: 300,
      }}
      data={productosFiltrados}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          style={styles.tarjetaProducto}
          onPress={() => NavegarItems(item.id)}
        >
          <Image
            source={item.imagen}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
            }}
          />
          <View style={{ flexDirection: "column", width: 180 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {item.nombre}
            </Text>
            <Text style={{ fontSize: 14, color: "gray" }}>
              {item.marca.toUpperCase()}
            </Text>
            <View style={{ flexDirection: "row", marginTop: 10, gap: 10 }}>
              <View style={styles.tarjetaNutriScore}>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  NutriScore:
                </Text>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  {item.clasificacion?.nutriScore}
                </Text>
              </View>
              <View
                style={[
                  styles.tarjetaNutriScore,
                  { backgroundColor: "#c6e9be" },
                ]}
              >
                <Text style={{ fontWeight: "bold", color: "black" }}>
                  EcoScore:
                </Text>
                <Text style={{ fontWeight: "bold", color: "black" }}>
                  {item.clasificacion?.EcoScore}
                </Text>
              </View>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </Pressable>
      )}
      ListEmptyComponent={<Text>No se encuentra el producto</Text>}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 5,
    backgroundColor: "#f3f4f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#black",
    textAlign: "left",
  },
  description: {
    fontSize: 18,
    textAlign: "left",
    color: "#818181ff",
    fontWeight: "bold",
  },
  ContenedorBusqueda: {
    alignItems: "center",
    marginTop: 15,
  },
  barraBusqueda: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderRadius: 10,
    width: "90%",
    height: 60,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    marginLeft: 10,
  },
  tarjetaProducto: {
    borderRadius: 20,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    gap: 10,
    margin: 10,
    shadowColor: "#3e3e3eff",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
    alignItems: "center",
  },
  tarjetaNutriScore: {
    gap: 3,
    backgroundColor: "#16a349",
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: "center",
    borderRadius: 10,
  },
});

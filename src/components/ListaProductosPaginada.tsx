import { BadgePuntuacion } from "@/src/components/BadgePuntuacion";
import { RUTAS, construirRuta } from "@/src/navegacion/rutas";
import { ProductoSimplificado } from "@/src/transformers/productos.transformador";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type ListaProductosPaginadaProps = {
  productos: ProductoSimplificado[];
  onEndReached: () => void;
  estaCargandoMas: boolean;
  estaError?: boolean;
  onReintentar?: () => void;
};

export function ListaProductosPaginada({
  productos,
  onEndReached,
  estaCargandoMas,
  estaError,
  onReintentar,
}: ListaProductosPaginadaProps) {
  const router = useRouter();

  const navegarAlProducto = (id: string) => () => {
    router.push(construirRuta(RUTAS.PRODUCTO, { id }));
  };

  return (
    <FlatList
      contentContainerStyle={styles.listaContenido}
      data={productos}
      keyExtractor={(item, indice) => `${item.id}-${indice}`}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        estaCargandoMas ? (
          <ActivityIndicator style={styles.cargador} color="green" />
        ) : estaError && productos.length > 0 ? (
          <Pressable style={styles.botonReintentar} onPress={onReintentar}>
            <Text style={styles.botonReintentarTexto}>
              Error al cargar más. Reintentar
            </Text>
          </Pressable>
        ) : null
      }
      renderItem={({ item }) => (
        <Pressable
          style={styles.tarjetaProducto}
          onPress={navegarAlProducto(item.id)}
        >
          <Image
            source={{ uri: item.urlImagen }}
            style={styles.imagenProducto}
          />
          <View style={styles.infoProducto}>
            <Text style={styles.nombreProducto}>{item.nombre}</Text>
            {item.marca && (
              <Text style={styles.marcaProducto}>{item.marca.toUpperCase()}</Text>
            )}
            <View style={styles.badges}>
              <BadgePuntuacion etiqueta="Nutri-Score" grado={item.gradoNutriscore} />
              <BadgePuntuacion etiqueta="Eco-Score" grado={item.gradoEcoscore} />
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </Pressable>
      )}
      ListEmptyComponent={
        estaError ? (
          <View style={styles.vacio}>
            <Text style={styles.vacioTexto}>
              Ocurrió un error al buscar los productos.
            </Text>
            <Pressable style={styles.botonReintentar} onPress={onReintentar}>
              <Text style={styles.botonReintentarTexto}>Reintentar</Text>
            </Pressable>
          </View>
        ) : (
          <Text style={styles.vacioTexto}>No se encontraron productos</Text>
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  listaContenido: {
    paddingBottom: 300,
  },
  cargador: {
    marginVertical: 20,
  },
  vacio: {
    alignItems: "center",
    marginTop: 40,
    gap: 12,
  },
  vacioTexto: {
    textAlign: "center",
    color: "#818181ff",
  },
  botonReintentar: {
    backgroundColor: "green",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 10,
  },
  botonReintentarTexto: {
    color: "white",
    fontWeight: "bold",
  },
  tarjetaProducto: {
    borderRadius: 20,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    gap: 10,
    marginVertical: 8,
    shadowColor: "#3e3e3eff",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
    alignItems: "center",
  },
  imagenProducto: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoProducto: {
    flexDirection: "column",
    flex: 1,
    gap: 4,
  },
  nombreProducto: {
    fontSize: 20,
    fontWeight: "bold",
  },
  marcaProducto: {
    fontSize: 14,
    color: "gray",
  },
  badges: {
    flexDirection: "row",
    marginTop: 6,
    gap: 8,
  },
});

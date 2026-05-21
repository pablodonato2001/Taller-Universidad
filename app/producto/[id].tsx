import { productosD } from "@/src/data/producto";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

type productoParams = {
  id: string;
};

export default function ProductoScreen() {
  const { id } = useLocalSearchParams<productoParams>();

  const producto = productosD.find((p) => p.id === id);

  return (
    <ScrollView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#f3f4f5",
      }}
    >
      <View style={{ width: "100%", height: 300, position: "absolute" }}>
        <Image
          source={producto?.imagen}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View style={{ width: "100%", height: 250 }} />
      <View style={styles.tajetaTitulo}>
        <Text
          style={{
            fontSize: 16,
            color: "green",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {producto?.marca.item.nombre}
        </Text>
        <Text
          style={{
            fontSize: 30,
            color: "black",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {producto?.nombre}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          {Object.entries(producto?.clasificacion || {}).map(
            ([titulo, valor]) => (
              <View key={titulo} style={styles.tarjetaPrincipal}>
                <Text style={styles.nutriscore}>{titulo.toUpperCase()}</Text>
                <Text style={styles.tarjetaNutriscore}>{valor}</Text>
              </View>
            ),
          )}
        </View>
        <ScrollView horizontal style={{ paddingVertical: 20 }}>
          {Object.entries(producto?.informacionNutricional || {}).map(
            ([nutriente, valor]) => (
              <View key={nutriente} style={styles.tajetaNutriente}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 12,
                    textTransform: "uppercase",
                  }}
                >
                  {nutriente}
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                  {valor}
                </Text>
              </View>
            ),
          )}
        </ScrollView>
      </View>
      <View style={styles.tajetaIngredientes}>
        <Text style={styles.titulo}>Ingredientes</Text>
        <Text>{producto?.ingredientes}</Text>
      </View>
      <View style={styles.tajetaValorNutricional}>
        <Text style={styles.titulo}>Valor Nutricional (por 100gr)</Text>
        {Object.entries(producto?.informacionNutricional || {}).map(
          ([nutriente, valor]) => (
            <View key={nutriente} style={styles.renglonNutricional}>
              <Text
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                }}
              >
                {nutriente}
              </Text>
              <Text style={{ fontWeight: "bold", fontSize: 14 }}>{valor}</Text>
            </View>
          ),
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 12,
    backgroundColor: "#eff6ff",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
  },
  tajetaTitulo: {
    width: "90%",
    backgroundColor: "white",
    padding: 24,
    justifyContent: "center",
    marginHorizontal: "auto",
    borderRadius: 24,
  },
  tarjetaPrincipal: {
    width: 95,
    height: 110,
    backgroundColor: "#f3f4f5",
    borderRadius: 10,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  nutriscore: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#616560ff",
    textAlign: "center",
  },
  tarjetaNutriscore: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "green",
    borderRadius: 12,
    padding: 7,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  tajetaNutriente: {
    gap: 10,
    backgroundColor: "#c6e9be",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    marginHorizontal: 15,
    marginStart: 0,
  },
  tajetaIngredientes: {
    backgroundColor: "#ffffffbd",
    padding: 24,
    gap: 12,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 24,
  },
  renglonNutricional: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f5",
    marginEnd: 10,
  },
  tajetaValorNutricional: {
    backgroundColor: "white",
    padding: 24,
    gap: 12,
    marginHorizontal: 20,
    borderRadius: 24,
    marginVertical: 30,
  },
});

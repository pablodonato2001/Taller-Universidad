import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type MarcaParams = {
  nombre: string;
};

export default function MarcaScreen() {
  const { nombre } = useLocalSearchParams<MarcaParams>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nombre}</Text>
      <Text style={styles.description}>
        Este es el apartado de {nombre} de esta categoria.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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

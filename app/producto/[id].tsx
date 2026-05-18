import { productosD } from "@/src/data/producto";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

type productoParams = {
  id: string;
};

export default function ProductoScreen() {
  const { id } = useLocalSearchParams<productoParams>();

  const producto = productosD.find((p) => p.id === id);

  return (
    <ScrollView
      style={{ width: "100%", height: "100%", backgroundColor: "red" }}
    >
      <View style={{ width: "100%", height: 300, backgroundColor: "red" }}>
        <Image
          source={producto?.imagen}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </View>
      <View style={{ width: "100%", height: 300, backgroundColor: "" }}></View>
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

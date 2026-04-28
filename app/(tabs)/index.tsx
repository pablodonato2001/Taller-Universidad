import { Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.fondo} />
      <View style={styles.contenedorRow}>
        <View style={styles.contenedorCentral}>
          <Text>BUS</Text>
          <View style={{ backgroundColor: "yellow", flex: 1 }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  fondo: {
    backgroundColor: "red",
    position: "absolute",
    height: "30%",
    width: "100%",
  },
  contenedorRow: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  contenedorCentral: {
    backgroundColor: "blue",
    width: "80%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

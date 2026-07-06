import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type TarjetaPuntuacionProps = {
  etiqueta: string;
  valor: string;
  color: string;
  icono?: keyof typeof Ionicons.glyphMap;
};

export function TarjetaPuntuacion({
  etiqueta,
  valor,
  color,
  icono,
}: TarjetaPuntuacionProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.etiqueta}>{etiqueta}</Text>
      <View style={[styles.caja, { backgroundColor: color }]}>
        <Text style={styles.valor}>{valor}</Text>
        {icono && <Ionicons name={icono} size={14} color="white" />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    flex: 1,
    backgroundColor: "#f3f4f5",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    gap: 10,
  },
  etiqueta: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#616560ff",
    textAlign: "center",
    textTransform: "uppercase",
  },
  caja: {
    flexDirection: "row",
    minWidth: 48,
    minHeight: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingHorizontal: 12,
  },
  valor: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
});

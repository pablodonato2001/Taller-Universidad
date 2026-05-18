import { LinearGradient } from "expo-linear-gradient";
import { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type BotonMarcasProps = {
  nombre: string;
  fondo?: string;
  texto?: string;
  onPress: () => void;
};

export const BotonMarcas: FC<BotonMarcasProps> = ({
  nombre,
  fondo = "#c6e9be",
  texto = "black",
  onPress,
}) => {
  return (
    <Pressable style={[styles.tarjeta]} onPress={onPress}>
      <LinearGradient
        colors={[fondo, "#ffffff"]}
        start={{ x: 1, y: 1 }}
        end={{ x: -1, y: -1 }}
        style={styles.redondo}
      >
        <Text
          style={{ color: texto, fontWeight: "bold", textAlign: "center" }}
          adjustsFontSizeToFit
          numberOfLines={1}
        >
          {nombre}
        </Text>
      </LinearGradient>
      <Text style={{ color: "black", fontWeight: "bold" }}> {nombre}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    width: 150,
    marginBottom: 25,
    height: 150,
    borderRadius: 20,
    padding: 16,
    backgroundColor: "#f3f4f5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  redondo: {
    width: 75,
    height: 75,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
});

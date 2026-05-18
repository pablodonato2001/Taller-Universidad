import { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type BotonEtiquetaProps = {
  nombre: string;
  fondo?: string;
  texto?: string;
  onPress: () => void;
};

export const BotonEtiquetas: FC<BotonEtiquetaProps> = ({
  nombre,
  fondo = "#c6e9be",
  texto = "black",
  onPress,
}) => {
  return (
    <Pressable
      style={[styles.tarjeta, { backgroundColor: fondo }]}
      onPress={onPress}
    >
      <Text style={{ color: texto }}> {nombre}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    borderRadius: 30,
    padding: 13,
    marginBottom: 12,
  },
});

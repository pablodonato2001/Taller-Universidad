import { FC } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
    <View style={styles.prueba}>
      <Pressable
        style={[styles.tarjeta, { backgroundColor: fondo }]}
        onPress={onPress}
      >
        <Text style={{ color: texto }}> {nombre}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    borderRadius: 30,
    padding: 13,
  },
  prueba: {
    paddingVertical: 5,
    marginHorizontal: 10,
  },
});

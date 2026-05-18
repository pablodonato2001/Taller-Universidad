import { LinearGradient } from "expo-linear-gradient";
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type BotonCategoriaProps = {
  nombre: string;
  fondo?: string;
  texto?: string;
  onPress: () => void;
};

export const BotonCategorias: FC<BotonCategoriaProps> = ({
  nombre,
  fondo = "black",
  texto = "white",
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[fondo, "#ffffff"]}
        start={{ x: 1, y: 1 }}
        end={{ x: -1, y: -1 }}
        style={styles.tarjeta}
      >
        <View
          style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row" }}
        >
          <Text>Icono</Text>
        </View>
        <View style={{ flex: 3 }}></View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text style={{ color: texto, fontWeight: "bold" }}>{nombre}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    width: 150,
    height: 170,
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

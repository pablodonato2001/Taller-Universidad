import { LinearGradient } from 'expo-linear-gradient';
import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type BotonCategoriaProps = {
  nombre: string;
  onPress: () => void;
  fondo?: string;
  texto?: string;
};

export const BotonCategoria: FC<BotonCategoriaProps> = ({
  nombre,
  fondo = "black",
  texto = "white",
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}>
      <LinearGradient
        colors={[fondo, '#ffffff']}
        start={{ x: 1, y: 1 }}
        end={{ x: -1, y: -1 }}
        style={styles.tarjeta}
      >
        <View style={{ flex: 1, justifyContent: "flex-end", flexDirection: "row" }}>
          <Text>Icono</Text>
        </View>
        <View style={{ flex: 2 }}>

        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: texto }}>{nombre}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tarjeta: {
    width: 150,
    marginBottom: 25,
    height: 150,
    borderRadius: 20,
    padding: 16,
  }
});

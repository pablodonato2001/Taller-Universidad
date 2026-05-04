import { BotonCategoria } from "@/components/BotonCategoria";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type categoria = {
  nombre: string;
  fondo: string;
  texto: string;
};

const categorias: categoria[] = [
  { nombre: "beverages", fondo: "blue", texto: "white" },
  { nombre: "dairies", fondo: "yellow", texto: "black" },
  { nombre: "snacks", fondo: "pink", texto: "white" },
  { nombre: "breakfasts", fondo: "orange", texto: "white" },
  { nombre: "desserts", fondo: "violet", texto: "white" },
  { nombre: "chocolates", fondo: "black", texto: "white" },
  { nombre: "biscuits-and-cakes", fondo: "brown", texto: "white" },
  { nombre: "cereals-and-potatoes", fondo: "green", texto: "white" },
  { nombre: "meals", fondo: "red", texto: "white" },
  { nombre: "plant-based-foods", fondo: "green", texto: "white" },
];

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>BUSCAR</Text>
      <Text>Segundo texto</Text>
      <View style={styles.contenedorRow}>
        <Text>Tercero texto</Text>
        <Pressable onPress={() => alert("Agregado")}>
          <Text>Agregar</Text>
        </Pressable>
      </View>
      <View style={styles.prueba}>
        {categorias.map((cat) => (
          <BotonCategoria
            key={cat.nombre}
            onPress={() => alert(cat.nombre)}
            nombre={cat.nombre}
            fondo={cat.fondo}
            texto={cat.texto}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 5,
  },
  contenedorRow: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 200,
  },
  prueba: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 30,
  }
});

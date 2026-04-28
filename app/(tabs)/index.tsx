import { Pressable, StyleSheet, Text, View } from "react-native";

type categoria = {
  nombre: string;
  fondo: string;
  texto: string;
}

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
    <View style={styles.container}>
      <Text>BUSCAR</Text>
      <Text >Segundo texto</Text>
      <View style={styles.contenedorRow}>
        <Text>Tercero texto</Text>
        <Pressable onPress={() => alert("Agregado")}>
          <Text>Agregar</Text>
        </Pressable>
      </View>
      <View>
        {
          categorias.map(categoria => {
            return (
              <Pressable onPress={() => alert(categoria.nombre)} key={categoria.nombre}>
                <Text style={{ backgroundColor: categoria.fondo, color: categoria.texto, margin: 10, borderRadius: 8, textAlign: "center" }}>{categoria.nombre}</Text>
              </Pressable>
            )
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
  },
  contenedorRow: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 200,
  }
});

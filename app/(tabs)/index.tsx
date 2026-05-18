import { seccionLista } from "@/src/components/SeccionLista";
import { categoriasD } from "@/src/data/categotia";
import { etiquetasD } from "@/src/data/Etiqueta";
import { marcasD } from "@/src/data/Marca";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{ padding: 10 }}>BUSCAR</Text>
      <Text style={{ padding: 10 }}>Segundo texto</Text>
      {seccionLista({
        titulo: "Categorias",
        items: categoriasD,
        ruta: "/categoria/[nombre]",
      })}
      {seccionLista({
        titulo: "Etiquetas",
        items: etiquetasD,
        ruta: "/etiqueta/[nombre]",
      })}
      {seccionLista({
        titulo: "Marcas",
        items: marcasD,
        ruta: "/marca/[nombre]",
      })}
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
});

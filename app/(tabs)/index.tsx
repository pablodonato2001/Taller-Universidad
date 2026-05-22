import { seccionLista } from "@/src/components/SeccionLista";
import { categoriasD } from "@/src/data/categotia";
import { etiquetasD } from "@/src/data/Etiqueta";
import { marcasD } from "@/src/data/Marca";
import { productosD } from "@/src/data/producto";
import { buildRoute, ROUTES } from "@/src/navegation/routers";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Home() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        style={{
          padding: 5,
          fontSize: 15,
          color: "green",
          alignSelf: "flex-start",
          fontWeight: "bold",
        }}
      >
        SABORES SELECCIONADOS
      </Text>
      <Text style={{ padding: 5, fontSize: 28, fontWeight: "bold" }}>
        El arte del{" "}
        <Text style={{ color: "green", fontStyle: "italic" }}>
          descubrimiento
        </Text>{" "}
        conciente
      </Text>
      {seccionLista({
        titulo: "Categorias",
        items: categoriasD,
        ruta: ROUTES.BUSQUEDA,
      })}
      {seccionLista({
        titulo: "Etiquetas",
        items: etiquetasD,
        ruta: ROUTES.BUSQUEDA,
      })}
      {seccionLista({
        titulo: "Marcas",
        items: marcasD,
        ruta: ROUTES.BUSQUEDA,
      })}

      <Text
        onPress={() => {
          router.push(buildRoute(ROUTES.PRODUCTO, { id: productosD[0].id }));
        }}
      >
        Producto Prueba
      </Text>
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

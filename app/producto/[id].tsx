import {
  colorPorGrado,
  colorPorNovaGroup,
  formatearGrado,
} from "@/src/components/BadgePuntuacion";
import { TarjetaPuntuacion } from "@/src/components/TarjetaPuntuacion";
import { useFavoritos } from "@/src/hooks/useFavoritos";
import { useProducto } from "@/src/hooks/useProducto";
import { ProductoCrudo } from "@/src/services/productos.servicio";
import { transformarProducto } from "@/src/transformers/productos.transformador";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

type ProductoParams = {
  id: string;
};

type Nutriente = {
  etiqueta: string;
  clave: string;
  unidad: string;
};

const NUTRIENTES_CARRUSEL: Nutriente[] = [
  { etiqueta: "Energía", clave: "energy-kj_100g", unidad: "kJ" },
  { etiqueta: "Grasas", clave: "fat_100g", unidad: "g" },
  { etiqueta: "Carbohidratos", clave: "carbohydrates_100g", unidad: "g" },
  { etiqueta: "Proteínas", clave: "proteins_100g", unidad: "g" },
  { etiqueta: "Sal", clave: "salt_100g", unidad: "g" },
];

const NUTRIENTES_TABLA: Nutriente[] = [
  ...NUTRIENTES_CARRUSEL,
  { etiqueta: "Grasas saturadas", clave: "saturated-fat_100g", unidad: "g" },
  { etiqueta: "Azúcares", clave: "sugars_100g", unidad: "g" },
  { etiqueta: "Fibra", clave: "fiber_100g", unidad: "g" },
];

export default function ProductoScreen() {
  const { id } = useLocalSearchParams<ProductoParams>();
  const { data, isLoading } = useProducto(id);
  const { favoritos, guardarFavorito, eliminarFavorito } = useFavoritos();

  if (isLoading) {
    return (
      <View style={styles.centrado}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }

  const producto = data?.product;

  if (!producto) {
    return (
      <View style={styles.centrado}>
        <Text style={styles.avisoTexto}> No se encontró el producto.</Text>
      </View>
    );
  }

  const esFavorito = favoritos.some((favorito) => favorito.id === producto.id);

  const alternarFavorito = () => {
    if (esFavorito) {
      eliminarFavorito(producto.id);
    } else {
      guardarFavorito(transformarProducto(producto));
    }
  };

  const tieneNutrientes = Object.keys(producto.nutriments ?? {}).length > 0;

  return (
    <ScrollView
      style={styles.pantalla}
      contentContainerStyle={styles.contenidoPantalla}
    >
      <View style={styles.hero}>
        <Image source={{ uri: producto.image_url }} style={styles.imagenHero} />
        <Pressable style={styles.botonFavorito} onPress={alternarFavorito}>
          <Ionicons
            name={esFavorito ? "heart" : "heart-outline"}
            size={28}
            color={esFavorito ? "#e63e11" : "white"}
          />
        </Pressable>
      </View>

      <View style={styles.tarjetaTitulo}>
        {producto.brands && <Text style={styles.marca}>{producto.brands}</Text>}
        <Text style={styles.nombre}>
          {producto.product_name ?? "Producto sin nombre"}
        </Text>

        <View style={styles.badges}>
          <TarjetaPuntuacion
            etiqueta={"Nutri-\nScore"}
            valor={formatearGrado(producto.nutriscore_grade)}
            color={colorPorGrado(producto.nutriscore_grade)}
          />
          <TarjetaPuntuacion
            etiqueta={"Nova\nGroup"}
            valor={producto.nova_group ? String(producto.nova_group) : "-"}
            color={colorPorNovaGroup(producto.nova_group)}
          />
          <TarjetaPuntuacion
            etiqueta={"Eco-\nScore"}
            valor={formatearGrado(producto.ecoscore_grade)}
            color={colorPorGrado(producto.ecoscore_grade)}
            icono="leaf"
          />
        </View>

        {tieneNutrientes ? (
          <ScrollView horizontal style={styles.carrusel} showsHorizontalScrollIndicator={false}>
            {NUTRIENTES_CARRUSEL.map((nutriente) => (
              <View key={nutriente.clave} style={styles.tarjetaNutriente}>
                <Text style={styles.nutrienteEtiqueta}>{nutriente.etiqueta}</Text>
                <Text style={styles.nutrienteValor}>
                  {formatearValorNutriente(producto, nutriente)}
                </Text>
              </View>
            ))}
          </ScrollView>
        ) : (
          <Aviso />
        )}
      </View>

      <View style={styles.tarjeta}>
        <Text style={styles.tituloSeccion}>Ingredientes</Text>
        {producto.ingredients_text ? (
          <Text style={styles.textoIngredientes}>{producto.ingredients_text}</Text>
        ) : (
          <Aviso />
        )}
      </View>

      <View style={styles.tarjeta}>
        <Text style={styles.tituloSeccion}>Valor Nutricional (por 100gr)</Text>
        {tieneNutrientes ? (
          NUTRIENTES_TABLA.map((nutriente) => (
            <View key={nutriente.clave} style={styles.renglonNutricional}>
              <Text style={styles.renglonEtiqueta}>{nutriente.etiqueta}</Text>
              <Text style={styles.renglonValor}>
                {formatearValorNutriente(producto, nutriente)}
              </Text>
            </View>
          ))
        ) : (
          <Aviso />
        )}
      </View>
    </ScrollView>
  );
}

function formatearValorNutriente(producto: ProductoCrudo, nutriente: Nutriente) {
  const valor = producto.nutriments?.[nutriente.clave];
  return valor !== undefined ? `${valor} ${nutriente.unidad}` : "-";
}

function Aviso() {
  return (
    <View style={styles.aviso}>
      <Text style={styles.avisoTexto}> Sin información</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f3f4f5",
  },
  contenidoPantalla: {
    paddingBottom: 40,
  },
  centrado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f5",
  },
  hero: {
    width: "100%",
    height: 300,
  },
  imagenHero: {
    width: "100%",
    height: "100%",
  },
  botonFavorito: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 24,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  tarjetaTitulo: {
    width: "90%",
    backgroundColor: "white",
    padding: 24,
    marginHorizontal: "auto",
    marginTop: -60,
    borderRadius: 24,
  },
  marca: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },
  nombre: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  badges: {
    flexDirection: "row",
    gap: 10,
    marginTop: 15,
  },
  carrusel: {
    marginTop: 20,
  },
  tarjetaNutriente: {
    gap: 8,
    backgroundColor: "#c6e9be",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 12,
    marginEnd: 10,
  },
  nutrienteEtiqueta: {
    fontWeight: "bold",
    fontSize: 12,
    textTransform: "uppercase",
  },
  nutrienteValor: {
    fontWeight: "bold",
    fontSize: 14,
  },
  tarjeta: {
    backgroundColor: "white",
    padding: 24,
    gap: 12,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 24,
  },
  tituloSeccion: {
    fontSize: 22,
    fontWeight: "bold",
  },
  textoIngredientes: {
    fontSize: 15,
    color: "#333",
  },
  renglonNutricional: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f5",
  },
  renglonEtiqueta: {
    fontSize: 14,
    textTransform: "uppercase",
  },
  renglonValor: {
    fontWeight: "bold",
    fontSize: 14,
  },
  aviso: {
    backgroundColor: "#fff3cd",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  avisoTexto: {
    color: "#7a5b00",
    fontWeight: "bold",
    fontSize: 15,
  },
});

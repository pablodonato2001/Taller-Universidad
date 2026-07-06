import { StyleSheet, Text, View } from "react-native";

const COLORES_POR_GRADO: Record<string, string> = {
  a: "#038141",
  b: "#85bb2f",
  c: "#fecb02",
  d: "#ee8100",
  e: "#e63e11",
};

const COLORES_POR_NOVA: Record<number, string> = {
  1: "#038141",
  2: "#85bb2f",
  3: "#ee8100",
  4: "#e63e11",
};

export const COLOR_INDEFINIDO = "#9d9da7";
const GRADOS_VALIDOS = ["a", "b", "c", "d", "e"];

export const colorPorGrado = (grado?: string) => {
  const gradoNormalizado = grado?.toLowerCase();
  return gradoNormalizado
    ? COLORES_POR_GRADO[gradoNormalizado] ?? COLOR_INDEFINIDO
    : COLOR_INDEFINIDO;
};

export const colorPorNovaGroup = (grupo?: number) =>
  grupo ? COLORES_POR_NOVA[grupo] ?? COLOR_INDEFINIDO : COLOR_INDEFINIDO;

export const formatearGrado = (grado?: string) => {
  const gradoNormalizado = grado?.toLowerCase();
  return gradoNormalizado && GRADOS_VALIDOS.includes(gradoNormalizado)
    ? gradoNormalizado.toUpperCase()
    : "-";
};

type BadgePuntuacionProps = {
  etiqueta: string;
  grado?: string;
};

export function BadgePuntuacion({ etiqueta, grado }: BadgePuntuacionProps) {
  const color = colorPorGrado(grado);
  const valor = formatearGrado(grado);

  return (
    <View style={[styles.contenedor, { backgroundColor: color }]}>
      <Text style={styles.texto}>{etiqueta.toUpperCase()}</Text>
      <Text style={styles.texto}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    minWidth: 100,
  },
  texto: {
    fontWeight: "bold",
    color: "white",
    fontSize: 11,
  },
});

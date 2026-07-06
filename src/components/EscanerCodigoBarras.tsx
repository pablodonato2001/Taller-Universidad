import { obtenerProductoPorId } from "@/src/services/productos.servicio";
import { RUTAS, construirRuta } from "@/src/navegacion/rutas";
import { Ionicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type EstadoBusqueda = "escaneando" | "cargando" | "encontrado" | "no-encontrado";

type EscanerCodigoBarrasProps = {
  visible: boolean;
  onCerrar: () => void;
};

export function EscanerCodigoBarras({
  visible,
  onCerrar,
}: EscanerCodigoBarrasProps) {
  const router = useRouter();
  const [permiso, solicitarPermiso] = useCameraPermissions();
  const [estado, setEstado] = useState<EstadoBusqueda>("escaneando");
  const [idEscaneado, setIdEscaneado] = useState<string | null>(null);
  const [nombreProducto, setNombreProducto] = useState<string | null>(null);

  const reiniciar = () => {
    setEstado("escaneando");
    setIdEscaneado(null);
    setNombreProducto(null);
  };

  const cerrarModal = () => {
    reiniciar();
    onCerrar();
  };

  const buscarCodigoEscaneado = async (codigo: string) => {
    setEstado("cargando");
    setIdEscaneado(codigo);

    try {
      const respuesta = await obtenerProductoPorId(codigo);

      if (respuesta.status === 1 && respuesta.product) {
        setNombreProducto(respuesta.product.product_name ?? codigo);
        setEstado("encontrado");
      } else {
        setEstado("no-encontrado");
      }
    } catch {
      setEstado("no-encontrado");
    }
  };

  const verProducto = () => {
    if (!idEscaneado) {
      return;
    }

    cerrarModal();
    router.push(construirRuta(RUTAS.PRODUCTO, { id: idEscaneado }));
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={cerrarModal}>
      <View style={styles.container}>
        <Pressable style={styles.cerrar} onPress={cerrarModal}>
          <Ionicons name="close" size={28} color="white" />
        </Pressable>

        {!permiso?.granted ? (
          <View style={styles.centrado}>
            <Ionicons name="camera-outline" size={48} color="white" />
            <Text style={styles.texto}>
              Necesitamos acceso a la cámara para escanear códigos de barras.
            </Text>
            {permiso?.canAskAgain !== false ? (
              <Pressable style={styles.boton} onPress={solicitarPermiso}>
                <Text style={styles.botonTexto}>Solicitar permiso</Text>
              </Pressable>
            ) : (
              <Pressable style={styles.boton} onPress={() => Linking.openSettings()}>
                <Text style={styles.botonTexto}>Abrir Ajustes</Text>
              </Pressable>
            )}
          </View>
        ) : estado === "escaneando" ? (
          <CameraView
            style={styles.camara}
            facing="back"
            barcodeScannerSettings={{
              barcodeTypes: ["ean13", "ean8", "upc_a", "upc_e"],
            }}
            onBarcodeScanned={(resultado) =>
              buscarCodigoEscaneado(resultado.data)
            }
          />
        ) : estado === "cargando" ? (
          <View style={styles.centrado}>
            <ActivityIndicator size="large" color="white" />
            <Text style={styles.texto}>Buscando producto...</Text>
          </View>
        ) : estado === "encontrado" ? (
          <View style={styles.centrado}>
            <Ionicons name="checkmark-circle" size={64} color="#38b000" />
            <Text style={styles.texto}>{nombreProducto}</Text>
            <Pressable style={styles.boton} onPress={verProducto}>
              <Text style={styles.botonTexto}>Ver producto</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.centrado}>
            <Ionicons name="close-circle" size={64} color="#e63e11" />
            <Text style={styles.texto}>No se encontró el producto.</Text>
            <Pressable style={styles.boton} onPress={reiniciar}>
              <Text style={styles.botonTexto}>Volver a escanear</Text>
            </Pressable>
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  camara: {
    flex: 1,
  },
  cerrar: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 1,
  },
  centrado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    gap: 16,
  },
  texto: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  boton: {
    backgroundColor: "green",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  botonTexto: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

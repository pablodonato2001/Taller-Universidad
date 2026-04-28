import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type BotonCategoriaProps = {
    nombre: string;
    fondo?: string;
    texto?: string;
}


const BotonCategoria: FC<BotonCategoriaProps> = ({ nombre, fondo = "black", texto = "white" }) => {
    return (
        <View style={[styles.container, { backgroundColor: fondo }]}>
            <Text style={{ color: texto }}>{nombre}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1
    },
    contenedorRow: {
        flexDirection: "row",
        backgroundColor: "transparent",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 200,
    }
}); 
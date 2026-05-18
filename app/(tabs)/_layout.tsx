import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function TabsDemoLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#d97706",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerTitle: "Inicio",
          tabBarLabel: "",
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "grey",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: focused ? color : "transparent",
                  marginTop: size,
                },
              ]}
            >
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? "white" : color}
              />
              {!focused && (
                <Text style={[styles.texto, { color: color }]}>Inicio</Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="busqueda"
        options={{
          title: "busqueda",
          headerTitle: "busqueda",
          tabBarLabel: "",
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "grey",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: focused ? color : "transparent",
                  marginTop: size,
                },
              ]}
            >
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={size}
                color={focused ? "white" : color}
              />
              {!focused && (
                <Text style={[styles.texto, { color: color }]}>busqueda</Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favoritos"
        options={{
          title: "Favoritos",
          headerTitle: "Favoritos",
          tabBarLabel: "",
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "grey",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: focused ? color : "transparent",
                  marginTop: size,
                },
              ]}
            >
              <Ionicons
                name={focused ? "star" : "star-outline"}
                size={size}
                color={focused ? "white" : color}
              />
              {!focused && (
                <Text style={[styles.texto, { color: color }]}>Favoritos</Text>
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 10,
    position: "absolute",
    bottom: 0,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

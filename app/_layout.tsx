import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "HOME",
        headerTintColor: "green",
        headerStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="(tabs)" options={{}} />
    </Stack>
  );
}

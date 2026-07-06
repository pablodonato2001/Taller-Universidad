import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const clienteConsulta = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 2,
    },
  },
});

export default function RootLayout() {
  return (
    <QueryClientProvider client={clienteConsulta}>
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
    </QueryClientProvider>
  );
}

import { useQueryClient } from "@tanstack/react-query";
import { useFocusEffect } from "expo-router";
import { useCallback, useRef } from "react";

export const useRefrescarAlEnfocar = (claveConsulta: unknown[]) => {
  const clienteConsulta = useQueryClient();
  const esPrimeraVez = useRef(true);

  useFocusEffect(
    useCallback(() => {
      if (esPrimeraVez.current) {
        esPrimeraVez.current = false;
        return;
      }

      clienteConsulta.refetchQueries({ queryKey: claveConsulta, type: "active" });
    }, [clienteConsulta, claveConsulta]),
  );
};

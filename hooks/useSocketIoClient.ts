import { socketIoContext } from "@/providers/SocketIoProvider";
import { useContext } from "react";

export function useSocketIoClient() {
  const context = useContext(socketIoContext);
  if (context.socketIoClient === null && typeof window !== "undefined") {
    throw new Error(
      "useSocketIoClient must be used within a ProvideSocketIoClient"
    );
  }
  return context.socketIoClient;
}

export function useIsSocketConnected() {
  const context = useContext(socketIoContext);
  if (context.socketIoClient === null && typeof window !== "undefined") {
    throw new Error(
      "useSocketIoClient must be used within a ProvideSocketIoClient"
    );
  }
  return context.connected;
}

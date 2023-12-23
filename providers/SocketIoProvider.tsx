import SocketIoClient from "@/lib/socket-client";
import React, { useContext, createContext, useRef } from "react";

interface SocketIoContextValue {
  socketIoClient: SocketIoClient | null;
}
export const socketIoContext = createContext<SocketIoContextValue>({
  socketIoClient: null,
});

interface Props {
  children: React.ReactNode;
}

export function ProvideSocketIoClient({ children }: Props) {
  const client = useProvideSocketIoClient();
  return (
    <socketIoContext.Provider value={{ socketIoClient: client }}>
      {children}
    </socketIoContext.Provider>
  );
}
function useProvideSocketIoClient() {
  const clientRef = useRef<SocketIoClient | null>(null);
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  if (!url) return null;
  const config = {
    url: url,
    token: "",
  };

  if (typeof window === "undefined") return null;
  if (!clientRef.current) {
    clientRef.current = new SocketIoClient(config);
    clientRef.current.on("connect", () => {
      console.log("Socket.io client connected");
    });
    clientRef.current.on("disconnect", () => {
      console.log("Socket.io client disconnected");
    });
  }
  return clientRef.current; // Return the existing instance if it exists
}

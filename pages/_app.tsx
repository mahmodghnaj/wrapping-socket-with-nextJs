import { ProvideSocketIoClient } from "@/providers/SocketIoProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProvideSocketIoClient>
      <Component {...pageProps} />
    </ProvideSocketIoClient>
  );
}
